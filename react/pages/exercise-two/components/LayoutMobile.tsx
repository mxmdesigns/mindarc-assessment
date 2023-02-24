import { colors, createMediaQuery } from "@/styles/theme";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import styled from "styled-components";
import { TabProps } from "..";

const Container = styled.div`
  padding: 16px 0;
  width: 100%;
  display: block;

  ${createMediaQuery("sm")} {
    display: none;
  }
`;

const SectionWrapper = styled.div`
  text-align: center;
  overflow: hidden;

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  button {
    width: 100%;
    padding: 16px 0;
    font-size: 16px;
    border: none;
    background-color: ${colors.blue};
    color: white;
    position: relative;

    svg {
      position: absolute;
      right: 16px;
    }
  }
`;

const Section = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({ isOpen }) => (isOpen ? 32 : 0)}px 16px;
  line-height: 24px;
  border: 1px solid #aaa;
  max-height: ${({ isOpen }) => (isOpen ? 600 : 0)}px;
  transition: all 0.4s ease;

  ul {
    max-width: 200px;
    margin: 0 auto;
  }
`;

const LayoutMobile = ({
  activeTab,
  setActiveTab,
  tabs,
}: {
  activeTab: number;
  setActiveTab: (state: number) => void;
  tabs: TabProps[];
}) => {
  return (
    <Container>
      {tabs.map(({ title, content }, i) => (
        <SectionWrapper
          key={i}
          onClick={() => setActiveTab(i === activeTab ? -1 : i)}
        >
          <button>
            {title}
            {i === activeTab ? <BiDownArrow /> : <BiUpArrow />}
          </button>
          <Section
            isOpen={i === activeTab}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </SectionWrapper>
      ))}
    </Container>
  );
};

export default LayoutMobile;
