import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const MainContainer = styled.div`
  padding: 100px 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

function TestPage() {
  const [cooldowns, setCooldowns] = useState({});
  const [msg, setMsg] = useState("");
  const [path, setPath] = useState("");
  const [image, setImage] = useState("");
  const [imagepath, setImagepath] = useState("");
  const [imageName, setImageName] = useState("choose Image");
  const onChange = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
    setImagepath(URL.createObjectURL(e.target.files[0]));
    setImageName(e.target.files[0].name);
  };
  const ClickAction = async (e) => {
    e.preventDefault();

    try {
      const res = await axios
        .get(
          "https://api.torn.com/user/?selections=cooldowns&key=GSk15VM7li9N3ZzO"
        )
        .catch(function (error) {
          console.log(error);
        });
      const { drug, medical, booster } = res.data.cooldowns;
      setCooldowns({ drug, medical, booster });
    } catch (err) {
      console.log(err);
    }
  };
  const ClickNode = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    try {
      const res = await axios
        .post("http://127.0.0.1:4000/test", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(res.data);
      const { path, msg } = res.data;
      setMsg(msg);
      setPath(path);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <PageContainer>
        <MainContainer>
          <button onClick={ClickAction}>Click</button>
          <h1>{cooldowns.drug}</h1>
          <h1>{cooldowns.medical}</h1>
          <h1>{cooldowns.booster}</h1>
          <button onClick={ClickNode}>TestNODEJS</button>
          <h1>{msg}</h1>
          <input
            onChange={onChange}
            type="file"
            name="image"
            accept="image/jpeg,image/png,image/gif"
          />
          <img src={imagepath} alt={imageName} />
          <img src={path} alt={imageName} />
        </MainContainer>
      </PageContainer>
    </div>
  );
}

export default TestPage;
