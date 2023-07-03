import Title from "@/components/title/Title";
import React from "react";

const secTitle = {
  title: "소개하기",
  img: "/img/joinEnd01.png",
  desc: "next.js를 통해 블로그 만드는 법을 배웁니다.",
};

export default function About() {
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
    </main>
  );
}
