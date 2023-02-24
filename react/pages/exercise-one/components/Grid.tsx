import { createMediaQuery } from "@/styles/theme";
import styled from "styled-components";
import GridCard from "./GridCard";

const Container = styled.div`
  width: 100%;
  max-width: 312px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px 0;
  row-gap: 24px;

  ${createMediaQuery("sm")} {
    padding: 32px 16px;
  }

  ${createMediaQuery("md")} {
    max-width: 724px;
  }

  ${createMediaQuery("lg")} {
    max-width: 1064px;
  }
`;

const controlData = [
  {
    imgSrc: "/images/400x300.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/",
  },
  {
    imgSrc: "/images/400x300.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
  },
  {
    imgSrc: "/images/400x300.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    link: "/",
  },
];

const Grid = () => {
  return (
    <Container>
      {controlData.map((card, i) => (
        <GridCard key={i} {...card} />
      ))}
    </Container>
  );
};

export default Grid;
