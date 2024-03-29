import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import WritePage from "./pages/WritePage";
import InformationEdit from "./pages/InformationEdit";
import MyPostList from "./pages/MyPostList";
import ReadPage from "./pages/ReadPage";
import "./App.css";
// Router 관련페이지
// https://velog.io/@velopert/react-router-v6-tutorial#35-link-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EB%8B%A4%EB%A5%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%95%98%EB%8A%94-%EB%A7%81%ED%81%AC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route
          path="/information/:memberId"
          element={<InformationEdit />}
        ></Route>
        <Route path="/post/:postId" element={<ReadPage />}></Route>
        <Route path="/my_post_list/:memberId" element={<MyPostList />}></Route>
        {/* 나중에 404페이지를 넣어야합니다 ↓ */}
        {/* <Route path="*" element={<PostView />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
