import PillButton from "@/components/buttons/PillButton";
import { createMediaQuery } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  padding: 16px 16px 88px;
  border: 1px solid #bbb;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  ${createMediaQuery("xs")} {
    width: 328px;
    padding: 24px 24px 88px;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  line-height: 24px;
  padding: 0 4px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GridCard = ({
  imgSrc,
  text,
  link,
}: {
  imgSrc: string;
  text?: string;
  link?: string;
}) => {
  return (
    <Container>
      <Image width={280} height={210} src={imgSrc} alt="article image" />
      <TextWrapper>{text}</TextWrapper>
      {!!link && (
        <ButtonWrapper>
          <PillButton link={link} text={"Read More"} />
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default GridCard;
