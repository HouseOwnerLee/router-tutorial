import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    const location = useLocation();
    console.log(location);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const detail = searchParams.get("detail");
    const mode = searchParams.get("mode");

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === "true" ? false : true });
    };

    const onIncreaseMode = () => {
        console.log(mode);
        // mode === null를 mode === "null"로 비교.
        const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode: nextMode, detail });
    };

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;