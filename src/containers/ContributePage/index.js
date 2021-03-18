import styled from "styled-components";
import React, { useState } from "react";
import { Marginer } from "../../components/marginer";
import Button from "../../components/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.css";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const MainContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;
const ContributeContainer = styled.div`
  padding: ${({ padding }) => (padding ? "0 2%" : "0 8%")};
  height: 100%;
  display: flex;
  justify-content: center;
`;
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const Text = styled.h1`
  font-size: ${({ size }) => (size ? size + "em" : "18px")};
  @media (max-width: 992px) {
    font-size: 30px;
  }
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  width: 400px;
  color: ${({ color }) => (color ? "#" + color : "#000")};
`;
const SloganContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;
const ButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const CardContainer = styled.div`
  margin-top: 20px;
  height: 100%;
  width: 80%;
  padding: 10px 5%;
  justify-content: center;
  border-radius: 5px;
  background-color: #fff;
  border: 1.5px solid #e0e0e0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
  flex-direction: column;
  display: flex;
  padding-bottom: 10px;
`;
const InputField = styled(TextField)`
  width: ${({ width }) => (width ? "45%" : "100%")};
  height: 60px;
`;
const TextContainer = styled.div`
  width: 100%;
`;
const Fieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
`;
function ContributePage() {
  const [errors, setErrors] = useState({
    place: { value: false, msg: "" },
    writer: { value: false, msg: "" },
    email: { value: false, msg: "" },
    city: { value: false, msg: "" },
    stats: { value: false, msg: "" },
    category: { value: false, msg: "" },
    text: { value: false, msg: "" },
  });
  const [place, setPlace] = useState("");
  const [html, setHtml] = useState("");
  const [email, setEmail] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [writer, setWriter] = useState("");
  const [adress, setAdress] = useState({ city: "", stats: "" });
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  const [category, setCategory] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
    setErrors((prevState) => ({
      ...prevState,
      category: { value: false, msg: "" },
    }));
  };
  function handleClick(e) {
    console.log(editorState.getCurrentContent().getPlainText());
    setHtml(stateToHTML(editorState.getCurrentContent()));
  }
  return (
    <PageContainer>
      <MainContainer>
        <ContributeContainer>
          <CardContainer>
            <SloganContainer>
              <Text weight={700} size={3.5}>
                Add New Place
              </Text>
            </SloganContainer>{" "}
            <Marginer direction="vertical" margin={15} />
            <InputField
              id="standard-basic"
              label="Place Name"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  place: { value: false, msg: "" },
                }));
              }}
            />
            <Marginer direction="vertical" margin={12} />
            <InputField
              id="standard-basic"
              label="Writer"
              value={writer}
              onChange={(e) => {
                setWriter(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  writer: { value: false, msg: "" },
                }));
              }}
            />
            <Marginer direction="vertical" margin={12} />
            <InputField
              id="standard-basic"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prevState) => ({
                  ...prevState,
                  email: { value: false, msg: "" },
                }));
              }}
            />
            <Marginer direction="vertical" margin={12} />
            <Fieldset>
              <legend>Place Address</legend>
              <InputField
                id="standard-basic"
                label="City"
                width={1}
                value={adress.city}
                onChange={(e) => {
                  setAdress((prevState) => ({
                    ...prevState,
                    city: e.target.value,
                  }));
                  setErrors((prevState) => ({
                    ...prevState,
                    city: { value: false, msg: "" },
                  }));
                }}
              />
              <Marginer direction="vertical" margin={12} />
              <InputField
                id="standard-basic"
                label="State"
                width={1}
                value={adress.stats}
                onChange={(e) => {
                  setAdress((prevState) => ({
                    ...prevState,
                    stats: e.target.value,
                  }));
                  setErrors((prevState) => ({
                    ...prevState,
                    stats: { value: false, msg: "" },
                  }));
                }}
              />
            </Fieldset>
            <Marginer direction="vertical" margin={12} />
            <Fieldset>
              <legend>Place Coordinates</legend>
              <InputField
                value={coordinates.latitude}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">° N</InputAdornment>
                  ),
                }}
                id="standard-start-adornment"
                label="Latitude"
                type="number"
                width={1}
                onChange={(e) => {
                  setCoordinates((prevState) => ({
                    ...prevState,
                    latitude: e.target.value,
                  }));
                  setErrors((prevState) => ({
                    ...prevState,
                    latitude: { value: false, msg: "" },
                  }));
                }}
              />
              <Marginer direction="vertical" margin={12} />
              <InputField
                value={coordinates.longitude}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">° E</InputAdornment>
                  ),
                }}
                id="standard-start-adornment"
                label="Longitude"
                width={1}
                type="number"
                onChange={(e) => {
                  setCoordinates((prevState) => ({
                    ...prevState,
                    longitude: e.target.value,
                  }));
                  setErrors((prevState) => ({
                    ...prevState,
                    longitude: { value: false, msg: "" },
                  }));
                }}
              />
            </Fieldset>
            <Marginer direction="vertical" margin={25} />
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value={1}>Montain</MenuItem>
              <MenuItem value={2}>Sea</MenuItem>
              <MenuItem value={3}>Forest</MenuItem>
              <MenuItem value={4}>Paradise</MenuItem>
            </Select>
            <Marginer direction="vertical" margin={40} />
            <TextContainer>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
            </TextContainer>
            <Marginer direction="vertical" margin={40} />
            <ButtonContainer>
              <Button
                onClick={handleClick}
                color={"0066FF"}
                shadow={"0 8px 16px 0 rgba(0, 0, 0, 0.2)"}
                width={"50%"}
                padding={"10px 20px"}
                height={"55"}
                textSize={"22"}
              >
                Contribute
              </Button>
            </ButtonContainer>
            <Marginer direction="vertical" margin={10} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </CardContainer>
        </ContributeContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default ContributePage;
