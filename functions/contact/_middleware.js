const TURNSTILE_CHALLENGE_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const onRequestPost = async ({ request, env }) => {
  const formData = await request.formData();

  const token = formData.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");
  const secret = env.TURNSTILE_SECRET_KEY;

  try {
    const success = await handleTurnstile(secret, ip, token);
    if (!success) {
      const url = new URL(request.url);
      url.searchParams.set("error", "turnstile");
      return Response.redirect(url.toString(), 302);
    }
  } catch (e) {
    console.error(e);
    const origin = await fetch(request.url);

    return new Response(origin.body, {
      status: 500,
      headers: origin.headers,
    });
  }

  let name, email, message;
  try {
    name = formData.get("name").toString();
    email = formData.get("email").toString();
    message = formData.get("message").toString();
  } catch (e) {
    console.error(e);
    const origin = await fetch(request.url);

    return new Response(origin.body, {
      status: 500,
      headers: origin.headers,
    });
  }

  try {
    const endpoint = env.MAILER_SEND_API_ENDPOINT;
    const key = env.MAILER_API_KEY;
    const from = env.FROM_ADDRESS;
    const bcc = env.BCC_ADDRESS;
    await sendMail(endpoint, key, from, bcc, name, email, message);
  } catch (e) {
    console.error(e);
    return new Response(origin.body, {
      status: 500,
      headers: origin.headers,
    });
  }

  const url = new URL(request.url);
  url.searchParams.set("submit", true);
  return Response.redirect(url.toString(), 302);
};

const handleTurnstile = async (secret, ip, token) => {
  let formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const result = await fetch(TURNSTILE_CHALLENGE_URL, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();
  return outcome.success;
};

const sendMail = async (endpoint, key, from, bcc, name, email, message) => {
  const sendMessage = `
※本メールは「vonxai.co.jp」よりお問い合わせいただいた方に自動送信されています。

${name} 様
このたびは、vonxai合同会社ホームページよりお問い合わせいただきありがとうございます。
本メールはお問い合わせ内容の控えとなります。

【お問い合わせ内容】

${message}

---

vonxai合同会社
https://www.vonxai.co.jp/
${bcc}

※本メールは配信専用です。お問い合わせは上記までお願いいたします。
`;

  const body = {
    personalizations: [
      {
        to: [
          {
            email: email,
          },
        ],
        bcc: [
          {
            email: bcc,
          },
        ],
        subject: "【vonxai合同会社】お問い合わせ控え",
      },
    ],
    from: {
      email: from,
    },
    content: [
      {
        type: "text/html",
        value: sendMessage.replace(/(\r\n|\n|\r)/gm, "<br>"),
      },
    ],
  };

  const init = {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  const response = await fetch(endpoint, init);
  if (response.status >= 400) {
    const body = await new Response(response.body).text();
    throw new Error(
      `API response[${response.status}] ${response.statusText} | ${body}`
    );
  }
};
