import Link from "next/link";
import React from "react";

const menus = [
  {
    id: 1,
    title: "소개",
    url: "/about",
  },
  {
    id: 2,
    title: "로그인",
    url: "/login",
  },
  {
    id: 3,
    title: "게시판",
    url: "/board",
  },
  {
    id: 4,
    title: "블로그",
    url: "/blog",
  },
];

export default function Header() {
  return (
    <header id="header">
      <div className="header__inner container">
        <div className="left">
          <a href="../index.html" className="star">
            <span className="blind">리스트보기</span>
          </a>
        </div>
        <h1 className="logo">
          <Link href="/">Developer Blog</Link>
        </h1>
        <div className="right">
          <ul>
            <li>
              <a href="join.html">회원가입</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="nav__inner">
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
