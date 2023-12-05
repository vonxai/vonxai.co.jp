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
      <div className="relative top-m10vh">
        <section>
          <Title />
          <CompanyList />
        </section>
        <Footer className="pt-5 md:pt-2 text-center text-gray-300" />
      </div>
    </main>
  );
};

export default Home;
export { Head } from "../Head";
