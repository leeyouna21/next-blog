import Title from "@/components/title/Title";
import React from "react";

const secTitle = {
  title: "로그인",
  img: "/img/board.jpg",
  desc: "로그인하시면 더 많은 정보를 얻을 수 있습니다.",
};

export default function Login() {
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
    </main>
  );
}
