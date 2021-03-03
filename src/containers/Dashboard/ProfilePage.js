import React, { useState } from "react";
import styled from "styled-components";
import ImageUser from "../../ressources/agriculture.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const ProfileContainer = styled.div`
  display: flex;
  margin-top: 70px;
  background-color: #f1f4f8;
  padding: ${({ padding }) => (padding ? "30px 8%" : "30px 20%")};
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
const InformationContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const Image = styled(motion.div)`
  width: 120px;
  cursor: pointer;
  height: 120px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const UploadPic = styled(motion.div)`
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: -60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #000;
  opacity: 0.5;
  label {
    padding-top: 5px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
    input[type="file"] {
      display: none;
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  padding: 20px 0px;
  input {
    font-size: 16px;
    font-weight: 500;
    width: 75%;
    height: 50px;
    &:focus {
      outline: none !important;
      border: 1px solid #719ece;
      box-shadow: 0 0 10px #719ece;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  textarea {
    font-size: 16px;
    font-weight: 500;
    width: 75%;
    height: 100px;
    &:focus {
      outline: none !important;
      border: 1px solid #719ece;
      box-shadow: 0 0 10px #719ece;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  label {
    font-size: 18px;
    @media (max-width: 768px) {
      padding-bottom: 10px;
    }
    font-weight: 600;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 0px;
`;
const SaveButton = styled.a`
  padding: 7px 20px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: 3px solid transparent;
  cursor: pointer;
  background: linear-gradient(to left, #0066ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    border: 3px solid #0066ff;
    color: #0066ff;
  }
`;
const titleVariants = {
  hidden: { y: "30px", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
function ProfilePage() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  const [isHovred, setHovred] = useState(false);
  const [image, setImage] = useState("");
  const [isDisbled, setDisbled] = useState(true);
  const [fullname, setFullname] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [imagepath, setImagepath] = useState();
  const [imageName, setImageName] = useState("choose Image");
  const onChange = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
    setImagepath(URL.createObjectURL(e.target.files[0]));
    setImageName(e.target.files[0].name);
  };
  function handleClick(e) {
    if (!isDisbled) {
      if (fullname !== "" && bio !== "" && location !== "")
        setDisbled(!isDisbled);
      else {
      }
    } else {
      setDisbled(!isDisbled);
    }
  }
  return (
    <PageContainer>
      <ProfileContainer padding={isTablet}>
        <Image
          onMouseEnter={() => setHovred(true)}
          onMouseLeave={() => setHovred(false)}
        >
          <img src={imagepath ? imagepath : ImageUser} alt="profile image" />
          {isHovred && !isDisbled && (
            <UploadPic
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              transition={{ duration: 1 }}
            >
              <label>
                <input type="file" onChange={onChange} />
                Upload
              </label>
            </UploadPic>
          )}
        </Image>
        <InformationContainer>
          <InputContainer direction={isMobile}>
            <label>FullName</label>
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              type="text"
              disabled={isDisbled}
            />
          </InputContainer>
          <InputContainer direction={isMobile}>
            <label>Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              type="text"
              disabled={isDisbled}
            />
          </InputContainer>
          <InputContainer direction={isMobile}>
            <label>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio"
              type="text"
              disabled={isDisbled}
            />
          </InputContainer>
          <ButtonsContainer>
            <SaveButton onClick={handleClick}>
              {isDisbled ? "Update" : "Save"}
            </SaveButton>
          </ButtonsContainer>
        </InformationContainer>
      </ProfileContainer>
    </PageContainer>
  );
}

export default ProfilePage;
