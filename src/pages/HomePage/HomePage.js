import {
  ImageContainer,
  TextContainer,
  Wrap,
  Section,
  StartBtn,
  Title,
  Content,
  Button,
  Text,
  ImageBlock,
  ImageText,
  Svg,
} from "./HomePage.styled";

import iconArrow from "../../assets/img/sprite.svg";
import iconCheck from "../../assets/img/sprite.svg";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <Header />
        <Wrap>
          <TextContainer>
            <Content>
              <Title>Make Life Easier for the Family:</Title>
              <Text>Find Babysitters Online for All Occasions</Text>
              <Button type="button" onClick={() => navigate("nannies")}>
                Get started
                <Svg>
                  <use href={`${iconCheck}#arrow`} />
                </Svg>
              </Button>
            </Content>
          </TextContainer>
          <ImageContainer>
            <ImageBlock>
              <div className="right-container">
                <span>
                  <svg width={18} height={18}>
                    <use href={`${iconArrow}#check`} />
                  </svg>
                </span>
              </div>
              <ImageText>
                <p className="text">Experienced nannies</p>
                <p className="count">15,000</p>
              </ImageText>
            </ImageBlock>
          </ImageContainer>
        </Wrap>
      </Section>
    </>
  );
};
export default HomePage;
