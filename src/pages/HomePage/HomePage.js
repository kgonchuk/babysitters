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

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <Section>
        <Wrap>
          <TextContainer>
            <Content>
              <Title>Make Life Easier for the Family:</Title>
              <Text>Find Babysitters Online for All Occasions</Text>
              <Button>
                <StartBtn to="/">
                  Get started
                  <span>
                    <Svg width={18} height={18}>
                      <use href={`${iconCheck}#arrow`} />
                    </Svg>
                  </span>
                </StartBtn>
              </Button>
            </Content>
          </TextContainer>
          <ImageContainer>
            <ImageBlock>
              <div className="red-container">
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
{
  /* <HeroContainer>
<TextContainer>
  <h1>Make Life Easier for the Family:</h1>
  <p>Find Babysitters Online for All Occasions</p>
  <button>
    Get started
    <span>
      <svg width={18} height={18}>
        <use href={`${iconArrow}#arrow`} />
      </svg>
    </span>
  </button>
</TextContainer>
</HeroContainer> */
}
