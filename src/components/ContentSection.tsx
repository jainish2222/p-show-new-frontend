import React from "react";

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
  link,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pr-0 md:pr-16 text-center md:text-left">
        <h2 className="uppercase font-black text-2xl md:text-3xl pb-4 md:pb-8">
          {title}
        </h2>
        <p className="text-base md:text-lg leading-6 md:leading-7">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-black text-white px-6 py-2 md:px-8 md:py-3 mt-4 md:mt-6"
        >
          Open App
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={imageSrc} alt={title} className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ContentSection;
