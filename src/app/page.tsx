"use client";
import BannerComponent from "@/components/banner";
import HeaderComponent from "@/components/header";
import Founder1 from "@/media/person1.jpeg";
import Founder2 from "@/media/person2.jpeg";
import ExpertCard from "@/components/expertCard";
import AboutComponent from "@/components/about";
import ServicesComponent from "@/components/services";
import "./globals.css";

export default function Dashboard() {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />

      {/* Content */}
      <div className="container">
        <div className="text-center fs-4 p-5">
          <p>
            In today’s dynamic global marketplace, marked by rapid growth,
            consolidation, and constant change, businesses face a wide array of
            evolving challenges. At Karthik M & Associates, we help our clients
            navigate these complexities and seize new opportunities by
            delivering reliable and timely professional services, wherever and
            whenever they are needed. Our firm offers a comprehensive suite of
            services, tailored to meet the unique needs of each client.
            <br></br>
            <br></br>
            These include Statutory Audits for companies, Internal Audits for
            corporates, consultancy and representation in Income Tax and Goods &
            Services Tax matters, as well as Financial Advisory services. By
            leveraging a strong network of experienced professionals, strategic
            partners, and advanced technologies, Karthik M & Associates delivers
            solutions that are not only compliant but also informed by deep
            industry insights and best practices.
          </p>
        </div>
      </div>

      <div
        style={{
          width: "30em",
          display: "block",
          height: "3px",
          backgroundColor: "#030303",
          margin: "30px auto 30px",
        }}
      ></div>

      {/* Experts */}
      <div className="container py-4" id="expert">
        <div id="Experts">
          {/* <h4 style={{ color: "#547792" }}>Our Experts</h4> */}
          <h1 style={{ color: "#213448" }}>Our Founder</h1>
          <div
            style={{
              width: "10em",
              height: "3px",
              backgroundColor: "#030303",
              margin: "30px 0",
            }}
          ></div>
          <ExpertCard
            name="CA Karthik M"
            designation="ACA"
            bio="Mr. Karthik M, the Founder and Managing Partner of the firm, is a Chartered Accountant by profession. He began his career as a trainee at M/s. N N Yuvaraj & Associates, Bangalore, where he gained valuable experience in financial audits, direct taxation, and corporate law matters.
              In 2018, he co-founded Aditya Karthik & Udupa, Chartered Accountants, where he specialized in statutory audits and direct tax advisory. During this time, he successfully led a team in centralizing Tax Deducted at Source (TDS) compliance for a Public Sector Undertaking (PSU) with over 2,200 branches.
              In 2020, he established Karthik M & Associates, with a vision to provide customized audit, taxation, and financial advisory services to a diverse range of corporate clients across various industries.
              "
            image={Founder1}
            imagePosition="left"
          />

          <ExpertCard
            name="CA Ramya Sravanthi D"
            designation="ACA"
            bio="Mrs. Ramya Sravanthi D is a qualified Chartered Accountant and a Company Secretary, since 2016. She began her career as an Assistant Company Secretary at HM Constructions and subsequently joined Ernst & Young (Global Delivery Services) as a Senior Associate. From 2018 to 2022, she served as a Senior Executive – Secretarial Compliance and Taxation at M/s. Micromatic Machine Tools Private Limited, where she gained extensive experience in corporate governance and regulatory compliance.
                Since 2022 she has been associated with M/s. Karthik M & Associates, and has led the firm’s Secretarial and Legal Compliance division, playing a key role in delivering high-quality solutions to clients across various sectors."
            image={Founder2}
            imagePosition="right"
          />
        </div>
      </div>

      <div
        style={{
          width: "30em",
          display: "block",
          height: "3px",
          backgroundColor: "#030303",
          margin: "30px auto 30px",
        }}
      ></div>

      {/* Services */}
      <ServicesComponent />

      {/* A Little About Us.. */}
      <AboutComponent />

      {/* <div className="container">
        <h4>Our Edge</h4>
        <h1>What Sets Us Apart?</h1>
      </div> */}
    </>
  );
}
