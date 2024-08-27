import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import { SectionTitle } from "./SectionTitle";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefitstwo = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              src={data.image}
              width={521}
              height={521}
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
     <SectionTitle
        preTitle="Contact Us"
        title="We'd Love to Hear From You"
      >
      We’re here to assist you! Our team is available to help you with any questions or concerns you may have. Please feel free to reach out to us during our operating hours: Monday to Friday: 8:00 AM to 10:00 PM Whether you need support, have a question about our services, or just want to provide feedback, we’re happy to hear from you. We strive to respond to all inquiries as quickly as possible during our business hours. click Please fill out the form below information : Your Email Address: Subject: Message: If you contact us outside of our working hours, we will get back to you as soon as we can on the next business day. We appreciate your patience and look forward to assisting you. Thank you for reaching out to us!
      </SectionTitle>
        </div>
      </Container>
  );
};

function Benefittwo(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}
