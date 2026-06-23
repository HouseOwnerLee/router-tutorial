import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
      <Route path="/Articles" element={<Articles />} >
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/profile/:username" element={<Profile />} />
  //     <Route path="/Articles" element={<Articles />} />
  //     <Route path="/Articles/:id" element={<Article />} />
  //   </Routes>
  // );

  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">홈</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">소개</Link>
  //       </li>
  //       <li>
  //         <Link to="/profile/velopert">velopert 프로필</Link>
  //       </li>
  //       <li>
  //         <Link to="/profile/gildong">gildong 프로필</Link>
  //       </li>
  //     </ul>
  //     <hr />
  //     <Routes> {/* 라우트를 관리하는 엘리먼트 */}
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/profile/:username" element={<Profile />} />
  //     </Routes>
  //   </div>
  // );
};

export default App;