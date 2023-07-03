import Title from "@/components/title/Title";
import React from "react";

const secTitle = {
  title: "블로그",
  img: "/img/board.jpg",
  desc: "개발자를 위한 블로그입니다.",
};

export default function Blog() {
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
    </main>
  );
}
