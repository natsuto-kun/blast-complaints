import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TitleText = styled.p`
  text-align: center;
`;

const Complaints = styled.textarea`
  resize: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [compla, setCompla] = useState("");

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setCompla(e.currentTarget.value);

  return (
    <div className="App">
      <TitleText>Blast complaints!</TitleText>
      <Complaints value={compla} onChange={handleChange} rows={10} cols={60}>
        あなたの愚痴や不満を書き出してみよう！
      </Complaints>
      <p>{compla}</p>
      <p>愚痴を書き込んだら下のfont bombをクリック！</p>
      <p>後は任意の所をクリックするだけで爆破できるよ！！</p>
    </div>
  );
}

export default App;
