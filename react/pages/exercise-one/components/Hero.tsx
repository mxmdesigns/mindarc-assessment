import { createMediaQuery } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  ${createMediaQuery("sm")} {
    height: 650px;
  }
`;

const ImageStyled = styled(Image)`
  filter: brightness(0.68) contrast(1.5);

  &.desktop {
    display: none;

    ${createMediaQuery("sm")} {
      display: block;
    }
  }

  &.mobile {
    display: block;

    ${createMediaQuery("sm")} {
      display: none;
    }
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 16px;

  h1 {
    font-size: 48px;
    text-align: center;
    padding: 0 48px;

    ${createMediaQuery("xs")} {
      font-size: 64px;
    }
  }

  p {
    font-size: 24px;
    text-align: center;
    padding: 0 16px;

    ${createMediaQuery("xs")} {
      font-size: 32px;
    }
  }
`;

const Hero = ({
  title,
  subtitle,
  imgSrc,
  imgSrcMobile,
}: {
  title?: string;
  subtitle?: string;
  imgSrc: string;
  imgSrcMobile: string;
}) => {
  return (
    <Container>
      <ImageStyled
        className="desktop"
        src={imgSrc}
        fill
        alt="Hero"
        objectFit="cover"
      />
      <ImageStyled
        className="mobile"
        src={imgSrcMobile}
        fill
        alt="Hero"
        objectFit="cover"
      />
      <TextWrapper>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </TextWrapper>
    </Container>
  );
};

export default Hero;
