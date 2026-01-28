import React from "react";

export default function SectionTitle({
  mainTitle,
  title,
  paragraph,
}: {
  mainTitle: string;
  title: string | React.ReactNode;
  paragraph: string;
}) {
  return (
    <div className="relative mx-auto mb-12 max-w-[1024px] pt-6 text-center md:mb-20 lg:pt-16">
      <span className="title -z-10"> {mainTitle} </span>
      <h2 className="font-heading max-w-2xl mx-auto text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
        {title}
      </h2>
      <p className="text-dark-text text-base max-w-2xl mx-auto">{paragraph}</p>
    </div>
  );
}
