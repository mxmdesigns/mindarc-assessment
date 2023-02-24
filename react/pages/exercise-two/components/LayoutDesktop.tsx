import { colors, createMediaQuery } from "@/styles/theme";
import styled from "styled-components";
import { TabProps } from "..";

const Container = styled.div`
  padding: 16px 0;
  width: 100%;
  display: none;

  ${createMediaQuery("sm")} {
    display: block;
  }
`;
const TabsWrapper = styled.div`
  display: flex;
`;
const Tab = styled.div<{ numberOfTabs: number }>`
  padding: 8px 0;
  text-align: center;
  background-color: ${colors.blue};
  color: white;
  transition: all 0.2s;
  cursor: pointer;
  width: ${({ numberOfTabs }) => 100 / numberOfTabs}%;

  &:hover {
    filter: brightness(1.2);
  }

  &:first-of-type {
    border-top-left-radius: 16px;
  }

  &:last-of-type {
    border-top-right-radius: 16px;
  }
`;

const ContentWrapper = styled.div`
  padding: 24px 32px;
  width: 100%;
  border: 1px solid #aaa;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  min-height: 240px;
`;

const ContentBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  line-height: 32px;
  text-align: center;
  transition: all 0.6s ease-out;
  max-height: ${({ isOpen }) => (isOpen ? 300 : 0)}px;
  overflow: hidden;

  ul {
    max-width: 380px;
    margin: 0 auto;
  }
`;

const LayoutDesktop = ({
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
      <TabsWrapper>
        {tabs.map(({ title }, i) => (
          <Tab
            key={i}
            numberOfTabs={tabs.length}
            onClick={() => setActiveTab(i === activeTab ? -1 : i)}
          >
            {title}
          </Tab>
        ))}
      </TabsWrapper>
      <ContentWrapper>
        {tabs.map(({ content }, i) => (
          <ContentBox
            isOpen={activeTab === i}
            key={i}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default LayoutDesktop;
