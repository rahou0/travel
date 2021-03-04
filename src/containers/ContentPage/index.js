import styled from "styled-components";
import React, { useState } from "react";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import Carousel from "../../components/Carousel";
import LikeIcon from "../../images/like.svg";
import { RiShareLine } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f1f4f8;
`;
const PresentationContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  padding: ${({ padding }) => (padding ? "20px 0%" : "20px 8%")};
  padding-top: 130px;
  display: flex;
  justify-content: center;
  background-color: #f1f4f8;
`;
const CardContainer = styled.div`
  height: 100%;
  min-width: 90%;
  max-width: 90%;
  border-radius: 5px;
  background-color: #fff;
  border: 1.5px solid #e0e0e0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
  flex-direction: column;
  display: flex;
  padding-bottom: 50px;
`;

const ProfilContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  color: #000;
  max-width: 100%;
  padding: ${({ padding }) => (padding ? "0 10px" : "0 30px")};
  flex-wrap: wrap;
`;
const PlaceDescriptionContainer = styled.div`
  max-width: 100%;
  justify-content: space-between;
  padding: 15px 10px;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? "column" : "row")};
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
`;
const SubTitileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubTitle = styled.a`
  color: ${({ color }) => (color ? "#" + color : "000")};
  font-size: 16px;
  font-weight: ${({ weight }) => (weight ? weight : "700")};
  &:hover {
    color: #000;
  }
`;
const Text = styled.a`
  color: #000;
  font-size: 20px;
  padding: 0 30px;
  padding-top: 30px;
  text-align: justify;
  text-justify: inter-word;
  &::first-letter {
    margin-left: 30px;
  }
`;
const Separator = styled.h2`
  background-color: grey;
  width: 100%;
  height: 1px;
  opacity: 0.6;
  margin: 0;
`;
const SocialMediaContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const LikeContainer = styled.div`
  height: 35px;
  width: 35px;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
const ShareButton = styled(RiShareLine)`
  width: 35px;
  cursor: pointer;
  color: ${({ color }) => (color ? "#0066ff" : "#000")};
  height: 35px;
  &:hover {
    color: #0066ff;
  }
`;
const ProfileLink = styled.a`
  color: #008329;
  font-size: 13px;
  text-align: justify;
  text-justify: inter-word;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconProfile = styled.div`
  height: 50px;
  width: 50px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const VisibiltyIcon = styled(MdVisibility)`
  width: 15px;
  cursor: pointer;
  height: 15px;
  color: #008329;
`;
const ViewrProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AdressContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? "column" : "row")};
  width: 65%;
  justify-content: space-between;
`;
function ContentPage() {
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [isliked, setLike] = useState(false);
  function handleLikeAction(e) {
    setLike(!isliked);
  }
  const Data = [
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Algiers-Algeria-1024x683.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Ahaggar-National-Park-768x384.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Tamanrasset-1024x682.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Oran-Algeria-1024x768.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Annaba-Algeria-1024x680.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Constantine-Algeria-1024x647.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Ghardaia-1024x768.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Tlemcen-Old-Town-1024x768.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/Setif-Algeria-1024x768.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2016/03/El-Oued-768x576.jpg",
  ];
  const Article = [
    "The largest country in the continent of Africa, Algeria has a diverse landscape and lots to offer travellers. The journey from Europe is only a short one but the difference between the two continents is immediately noticeable and provides a sense of adventure and intrigue for tourists.  Algeria has many charming cities with winding streets and stunning architecture, Mediterranean coast, lush landscapes and roman ruins to rival anywhere in the world.",
    "The main attraction in the country however is the Saharan region where the never-ending sand and the mysterious and lively cities are enough to indulge even the most seasoned traveller’s imagination.",
    "Despite advise about the country not being safe to travel and certain regions being off limits. Most Algerians greet tourists with warm welcomes and are happy to share their way of life with any guests to their country. All the same, any trip to this beautiful country should be well researched to ensure that all travel rules are adhered with. Let’s have a look at the best places to visit in Algeria!",
    "1. Algiers    ",
    "Algiers is the capital city in Algeria and has an estimated population of around 3,500,000. The city was founded by the Ottomans and is rife with history and beautiful architecture. The ancient Casbah is a winding urban maze, with streets flowing through the old town like streams. Also worth exploring is the Dar Hassan Pacha, which was once the city’s most decedent mansion. The interior of the house has been under renovation since 2005 and is unfortunately closed to the public. The city of Algiers offers visitors from the west a stark and beautiful contrast and an intriguing glimpse into the past, present and future of Algeria.    ",
    "2. Atakor",
    "Although difficult to reach without your own transport, the Atakor Plateau, situated in the Ahaggar National Park, is worth any of the effort or inconvenience. The landscape is a red-brown dry landscaped dotted with harsh sheer peaks. The terrain is like something straight out of a sci-fi flick and is a sight that will stick with you for a long time. The highlight of the plateau is the Assekrem Peak. Assekrem in the Tuareg language means “the end of the world” which is a fitting way to describe the view from the peak and the rugged harshness of the landscape.",
    "3. Tamanrasset",
    ,
    "Tamanrasset, sometimes referred to as ‘Tam’ is a modern and lively town that you will find if you travel south through Algeria towards Niger. Tam has everything you might expect from a modern town including a number of shops, restaurants, banks and travel amenities. The town is a great base for exploring the Ahaggar National Park whilst retaining comforts of a well equipped town. For various reasons, the town is considered unsafe to visit at present and it is only possible to visit as part of a fully guided tour. Proof of a guided tour must be provided upon arrival in the town. Although this is currently a requirement it is not necessarily a bad things as it improves the safety of visitors and several fun excursions such a 4×4 tours are often included.",
    "4. Oran",
    "Oran is the second city of Algeria, it is a lively port city with heaps of character and beauty. Oran is an attraction in its own right and has historical buildings a plenty to explore including beautiful mosques, the Casbah and Le Theatre. The range of beautiful architecture is possibly the best of any city in Algeria. Oran is also a great place for scuba diving, sampling Algerian cuisine and listening to lively Rai music which has its origins in the city. Despite many positive reasons to visit the city there are also many signs of the country’s political troubles in the 90s are visible in Oran. The city filled novelist Albert Camus with so much dread that he based his novel ‘The Plague’ here.",
    ,
    "5. Annaba",
    "There were many geographical reasons for the Phoenicians to found Annaba that are still apparent today and are the reason for the cities relative prosperity. The city has a natural port which handles many of the country’s exports but for travellers, the city’s history and culture, especially Hippo Regius, is the main attraction. The ruins of Hippo Regius are surrounded by olive trees on one side and the sea on the other. The ruins include mosaics, bronze trophies and ruins of villas and temples.",
    ,
    "6. Constantine",
    "Constantine is a natural marvel that has transformed over the years into a stunning spot for tourists. The city was the Capital of Numidia and after that Roman Numidia and it goes without saying that politics and power have always played a part here. The majority of buildings in the city can only be reached by crossing the bridge across a large canyon. This gives the city a feeling of fantasy that has been retained since the time of the Romans. Despite the unique way the city looks, and its astonishing history, there is not much to see here in terms of attraction and tourists may find that a couple of days here is enough.",
    "7. Ghardaia",
    "Ghardaia is part of a five town cluster right on the edge of the Sahara Desert but is also the name often used to refer to the entire cluster. Ghardaia is almost a country in its own right with its own dress, religion and social traditions. Guides are required in order to access the beautiful old town or the Sidi Brahim mosque. Food and accommodation here, as in most Algerian cities, varies immensely in price and quality. If you choose to visit Ghardaia whilst in Algeria you may leave feeling like you have visited more than one country.",
    "8. Tlemcen",
    "For stunning Moorish buildings in Algeria there is only one option: Tlemcen. The buildings here can compete in beauty with those in Southern Spain or Morocco. The town was important for the Romans but sadly not much evidence has survived from those times. Sights include the Great Mosque, the Eiffel Bridge and waterfalls in the nearby National Park of Tlemcen. Tlemcen has its sights firmly set on the future and is currently in the process of building what will be the largest university campus in the country.",
    "9. Setif",
    "Another of Algeria’s cities which was founded by the Romans, Setif is situated in the Little Kabylie region of Algeria and is over 1,100 meters above sea level. The roman ruins here are well worth taking time to study. In addition to the Romans, the French have also left their mark on the city. Sights in the city include the main square with its Roman sculptures. Tourists are a fairly rare sight in this city which for some may be a reason to visit and see the ‘real Algeria’ far from the beaten track but it does have its disadvantages and western tourists should exercise caution.",
    "10. El Oued",
    "Intriguingly nicknamed ‘the city of a thousand domes’, El Oued is an oasis of a city in what seems to be an endless sea of sand. The reason for the nickname comes from the many domed roofs on buildings in the city. The reason for the domes is protection from the intense heat from the sun in summer. One of the main reasons tourists visit El Oued is to shop, the city is arguably the best place for shoppers in the country. Popular items include carpets and affanes (traditional Algerian slippers). Do not even think about entering the market unless you intend to barter like a local to get the best bargain. The souqs can get busy especially on a Friday.",
  ];
  return (
    <PageContainer>
      <PresentationContainer padding={isTablet}>
        <CardContainer>
          <Title>10 Best Places to Visit in Algeria</Title>
          <Separator></Separator>
          <PlaceDescriptionContainer align={isTablet} direction={isMobile}>
            <ProfilContainer>
              <IconProfile>
                <img src={Data[0]} alt="profile pic" />
              </IconProfile>
              <Marginer direction="horizontal" margin={10} />
              <ProfileInfo>
                <SubTitle>Abderahim Hamani</SubTitle>
                <ViewrProfileContainer>
                  <VisibiltyIcon />
                  <Marginer
                    direction={isTablet ? "vertical" : "horizontal"}
                    margin={1}
                  />
                  <ProfileLink>View Profile</ProfileLink>
                </ViewrProfileContainer>
                <ViewrProfileContainer>
                  <SubTitle weight={400}>Date:&nbsp;</SubTitle>
                  <SubTitle>20/12/2021</SubTitle>
                </ViewrProfileContainer>
              </ProfileInfo>
            </ProfilContainer>
            {isTablet && <Marginer direction="vertical" margin={10} />}
            <AdressContainer direction={isTablet}>
              <SubTitileContainer>
                <SubTitle weight={400}>Location: </SubTitle>
                <Marginer direction="horizontal" margin={5} />
                <SubTitle color={"808080"}>Setif, Algeria</SubTitle>
              </SubTitileContainer>
              {isTablet && <Marginer direction="vertical" margin={10} />}
              <SubTitileContainer>
                <SubTitle weight={400}>Coordinates : </SubTitle>
                <Marginer direction="horizontal" margin={5} />
                <SubTitle color={"808080"}>36.1898</SubTitle>
                <SubTitle weight={400}>° N, </SubTitle>
                <Marginer direction="horizontal" margin={5} />
                <SubTitle color={"808080"}>5.4108</SubTitle>
                <SubTitle weight={400}>° E</SubTitle>
              </SubTitileContainer>
            </AdressContainer>
            {isTablet && <Marginer direction="vertical" margin={10} />}
            <SocialMediaContainer>
              <LikeContainer>
                <img alt="like" src={LikeIcon} />
              </LikeContainer>
              <Marginer direction="horizontal" margin={10} />
              <ShareButton onClick={handleLikeAction} color={isliked} />
            </SocialMediaContainer>
          </PlaceDescriptionContainer>
          <Separator></Separator>
          <Carousel data={Data} />
          <Separator></Separator>
          {Article.map((text, index) => {
            return <Text key={index}>{text}</Text>;
          })}
        </CardContainer>
      </PresentationContainer>
    </PageContainer>
  );
}

export default ContentPage;
