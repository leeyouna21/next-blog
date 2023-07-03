import React from "react";
import Title from "@/components/title/Title";
import { connectDB } from "@/utils/detabase";
import Link from "next/link";

const secTitle = {
  title: "게시판",
  img: "/img/board.jpg",
  desc: "궁금사항은 게시판을 통해 질문 가능합니다.",
};

export default async function Board() {
  const client = await connectDB;

  const db = client.db("yunaTest");
  let result = await db.collection("table").find().toArray();
  console.log(result);

  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
      <div className="board__inner">
        {/* <div className="board__search">
          <div className="left">
            * 총 <em>1111</em>건의 게시물이 등록 돼 있습니다.
          </div>
          <div className="right">
            <form action="#" name="#" method="post">
              <fieldset>
                <legend className="blind">게시판 검색 영역</legend>
                <input type="search" placeholder="검색어를 입력하세요" />
                <select name="#" id="#">
                  <option value="title">제목</option>
                  <option value="content">내용</option>
                  <option value="name">등록자</option>
                </select>
                <button type="submit" className="btnStyle3 white">
                  검색
                </button>
                <a href="boardWrite.html" className="btnStyle3 black">
                  글쓰기
                </a>
              </fieldset>
            </form>
          </div>
        </div> */}
        <div className="board__table">
          <table>
            <colgroup>
              <col style={{ width: "5%" }} />
              <col />
              <col style={{ width: "10%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "7%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록자</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {result.map((result, index) => (
                <tr key={index}>
                  <td>{result.boardID}</td>
                  <td>
                    <Link href={`/board/${result._id}`}>
                      {result.boardtitle}
                    </Link>
                  </td>
                  <td>{result.youName}</td>
                  <td>{result.regTime}</td>
                  <td>{result.boardView}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="board__pages">
          <ul>
            <li>
              <a href="#">처음으로</a>
            </li>
            <li>
              <a href="#">이전</a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="active">2</a>
            </li>
            <li>
              <a href="active">3</a>
            </li>
            <li>
              <a href="active">4</a>
            </li>
            <li>
              <a href="active">5</a>
            </li>
            <li>
              <a href="active">6</a>
            </li>
            <li>
              <a href="active">7</a>
            </li>
            <li>
              <a href="active">다음</a>
            </li>
            <li>
              <a href="active">마지막</a>
            </li>
          </ul>
        </div> */}
      </div>
    </main>
  );
}
