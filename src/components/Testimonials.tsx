import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.png";
import userfourImg from "../../public/img/user4.jpg";

const items = [
  {
    text: "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
    image: userOneImg,
    name: "Jainish Koladiya",
    title: "Full stack developer and DevOps engineer"
  },
  {
    text: "Assist with backend development and styling aspects of the P-show project.",
    image: userTwoImg,
    name: "Mayank Zalavadiya",
    title: "Full stack developer"
  },
  {
    text: "Handle content writing and design contributions for the P-show project.",
    image: userThreeImg,
    name: "Uttam Kheni",
    title: "Python developer, designer and cybersecurity"
  },
  {
    text: "Contribute to the functionality, problem-solving and management for the P-show project.",
    image: userfourImg,
    name: "Parth Kanani",
    title: "iOS developer and good problem-solver"
  }
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {items.concat(items).map((item, index) => (
            <div key={index} className="w-80 h-120 mx-4 flex-shrink-0">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 py-8 rounded-2xl dark:bg-trueGray-800">
                <p className="text-lg leading-normal">
                  {item.text}
                </p>
                <Avatar
                  image={item.image}
                  name={item.name}
                  title={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-4 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="60"
          height="60"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
