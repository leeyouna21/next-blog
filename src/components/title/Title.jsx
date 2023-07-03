import React from "react";
import Image from "next/image";

export default function Title({ title, img, desc }) {
  return (
    <div className="intro__inner center bmStyle">
      <Image src={img} alt="Ss" width={200} height={200} />
      <h2>{title}</h2>
      <p className="intro__text">{desc}</p>
    </div>
  );
}
