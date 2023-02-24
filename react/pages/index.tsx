import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { colors, createMediaQuery } from "@/styles/theme";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 275px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${createMediaQuery("sm")} {
    width: 500px;
    height: 300px;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    grid-template-columns: 200px 2fr;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  grid-column: span 1;

  ${createMediaQuery("sm")} {
    grid-row: span 4;
    height: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${createMediaQuery("sm")} {
    grid-column: 2;
    grid-row: 3;
  }
`;

const TextWrapper = styled.div`
  margin-top: -24px;

  h1 {
    font-size: 88px;
    font-weight: 900;
    margin-left: -4px;
  }

  p {
    margin-top: -16px;
    font-size: 16px;
  }

  ${createMediaQuery("sm")} {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
  }
`;

const LinkStyled = styled(Link)`
  background-color: ${colors.blue};
  width: 275px;
  color: white;
  padding: 16px;
  border-radius: 16px;
  font-weight: 700;
  text-align: center;
  transition: all 0.2s;

  &:last-of-type {
    background-color: ${colors.orange};
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>MindArc Frontend Assessment</title>
        <meta
          name="description"
          content="Created for MindArc Frontend Assessment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Menu>
            <ImageWrapper>
              <Image
                src="/images/Mac x Media Logo1-05.png"
                alt="Logo"
                fill
                objectFit="contain"
              />
            </ImageWrapper>
            <TextWrapper>
              <h1>Hello!</h1>
              <p>I hope this meets all the requirements</p>
            </TextWrapper>
            <LinkWrapper>
              <LinkStyled href={"exercise-one"}>Exercise One</LinkStyled>
              <LinkStyled href={"exercise-two"}>Exercise Two</LinkStyled>
            </LinkWrapper>
          </Menu>
        </Container>
      </main>
    </>
  );
}
