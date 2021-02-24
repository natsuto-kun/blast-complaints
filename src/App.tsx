import React from "react";
import { useState } from "react";
import styled from "styled-components";

const AppStyle = styled.div`
  position: relative;
  background-image: linear-gradient(to top, #8cccd1 0%, #8cccd1 100%);
  width: 100vw;
  height: 100vh;
`;

const Inner = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  text-align: center;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%
  );
  background-size: 50px 50px;
`;

const TitleText = styled.p`
  text-align: center;
  font-size: 40px;
  color: #423225;
`;

const Complaints = styled.textarea`
  resize: none;
  width: 80vw;
  border: 1px solid #aaa;
  border-radius: 20px;
  padding: 10px 25px;
  display: inline-block;
`;

const ComplaintsText = styled.p`
  text-align: center;
  font-size: 25px;
  color: #3f3f3f;
`;

const PopText = styled.p`
  text-align: center;
  font-size: 20px;
  color: #3f2c27;
`;

function App() {
  const [compla, setCompla] = useState("");

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setCompla(e.currentTarget.value);

  return (
    <AppStyle>
      <Inner>
        <TitleText>Blast complaints!</TitleText>
        <Complaints value={compla} onChange={handleChange} rows={10} cols={60}>
          あなたの愚痴や不満を書き出してみよう！
        </Complaints>
        <ComplaintsText>{compla}</ComplaintsText>
        <PopText>言いたい事を書き込んだら上のfont bombをクリック！</PopText>
        <PopText>後は任意の所をクリックするだけで爆破できるよ！！</PopText>
      </Inner>
    </AppStyle>
  );
}

export default App;
