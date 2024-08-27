import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import bluecartoon from "../../public/img/avtar.png";

const benefitOne = {
  title: "Highlight your Works",
  desc: "P-show fosters a strong sense of connectivity among students by creating a vibrant community where ideas and innovations are freely exchanged. Through this platform,.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Showcase Your Work",
      desc: "Gain visibility by displaying your projects to a global audience.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Opportunities",
      desc: "Attract attention from potential mentors, students, and collaborators.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Connect with Peers",
      desc: "Collaborate and exchange feedback with like-minded students.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "We offer several additional benefits.",
  desc: "Effortless to upload, use, and showcase projects while connecting with others seamlessly. Discover, collaborate, and inspire within a vibrant community of creators.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive ",
      desc: "P-Show is designed as a mobile first responsive .",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
   image: bluecartoon
};


export {benefitOne, benefitTwo,benefitThree};
