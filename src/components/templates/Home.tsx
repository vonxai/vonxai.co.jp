import React from "react";
import { Footer } from "../organisms/Footer";
import { Title } from "../organisms/Title";
import { TopHeader } from "../organisms/TopHeader";
import { Header } from "../organisms/Header";
import { CompanyList } from "../organisms/CompanyList";

const Home = ({ pageContext }) => {
  return (
    <main className="container mx-auto max-w-full min-h-screen m-0 bg-black">
      <Header />
      <TopHeader />
      <div className="relative top-m25vh">
        <section>
          <Title />
          <section className="z-10 bg-black">
            <div className="py-5 px-2 mx-auto max-w-4xl w-42rem text-white text-center">
              <h2 className="text-4xl md:text-2xl font-bold">取引先企業</h2>
              <p className="my-3 text-xl md:text-md">
                スタートアップから大企業まで、様々な企業様を支えています。
              </p>
              <CompanyList darkMode={true} />
            </div>
          </section>
        </section>
        <Footer className="pt-5 md:pt-2 text-center text-gray-300" />
      </div>
    </main>
  );
};

export default Home;
export { Head } from "../Head";
