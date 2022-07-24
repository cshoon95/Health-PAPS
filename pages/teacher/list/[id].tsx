import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { TopBar } from "../../../styles/TopBar";
import { Layout } from "../../../styles/Layout";
import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import Form from "../../../components/Form";
import Register from "../../../components/Register";
import StudentManage from "../../../components/StudentManage";
import axios from "axios";

/** 학급 페이지 **/

const Teacher_ClassPage: NextPage = ({ classData }: any) => {
  // 렌더링 시범용 학생수
  console.log(classData);
  const studentNumber = 29;

  const [clickedNav, setClickedNav] = useState("PAPS 기록");

  const navbar = ["PAPS 기록", "가입 요청", "학생 관리"];

  const handleNavbar = useCallback((e: any) => {
    setClickedNav(e.target.innerText);
  }, []);

  return (
    <>
      <Head>
        <title>Health-PAPS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={{ overflow: "scroll" }}>
        <TopBar>
          <h2>{`${classData.name} 페이지`}</h2>
        </TopBar>
        <Nav>
          <ul>
            {navbar.map((el, idx) => {
              return (
                <li
                  key={idx}
                  className={clickedNav === el ? "selected" : ""}
                  onClick={handleNavbar}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </Nav>
        {clickedNav === "PAPS 기록" ? (
          <>
            <Form classData={classData}></Form>
            <ButtonBox>
              <Button>저장하기</Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#66bb6a",
                  border: "1px solid #66bb6a",
                }}
              >
                엑셀로 내보내기
              </Button>
            </ButtonBox>
          </>
        ) : clickedNav === "가입 요청" ? (
          <Register></Register>
        ) : (
          <StudentManage></StudentManage>
        )}
      </Layout>
    </>
  );
};

const getAllClassId = async () => {
  const res = await axios.get("http://localhost:4000/class");
  return res.data.map((classInfo: any) => {
    return {
      params: {
        id: classInfo.id,
      },
    };
  });
};

const getClassData = async (id: string) => {
  const res = await axios.get(`http://localhost:4000/class/${id}`);
  console.log(res);
  return {
    id,
    ...res.data,
  };
};

export async function getStaticPaths() {
  const paths = await getAllClassId();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const classData = await getClassData(params.id);
  return {
    props: {
      classData,
    },
  };
}

const Nav = styled.nav`
  width: 100%;
  margin-bottom: 2rem;
  ul {
    margin: 0;
    display: flex;
    justify-content: space-around;
    padding: 0;
    text-align: center;
  }

  li {
    font-size: 0.9rem;
    width: 100%;
    padding: 0.5rem;
  }

  .selected {
    border-bottom: 3px solid #338a3e;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 20;
  width: 100%;
  background-color: white;
  max-width: 40rem;
`;

const Button = styled.button`
  text-align: center;
  border: 0;
  width: 80%;
  font-size: 1rem;
  font-weight: 600;
  background-color: #66bb6a;
  color: white;
  max-width: 50rem;
  padding: 1rem;

  &:hover {
    background-color: #338a3e;
    transition-duration: 0.5s;
  }
`;

export default Teacher_ClassPage;
