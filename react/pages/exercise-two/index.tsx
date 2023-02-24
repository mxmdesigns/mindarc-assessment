import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import tabs from "./../../../data.json";
import styled from "styled-components";
import { createMediaQuery } from "@/styles/theme";
import { ReactNode, useState } from "react";
import LayoutDesktop from "./components/LayoutDesktop";
import LayoutMobile from "./components/LayoutMobile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 0;
  margin: 0 auto;
  width: calc(100% - 32px);

  h1 {
    font-size: 40px;

    ${createMediaQuery("sm")} {
      font-size: 64px;
    }
  }

  > p {
    padding: 8px 32px;
    text-align: center;
    line-height: 16px;
    font-size: 14px;
    font-style: italic;
  }

  ${createMediaQuery("md")} {
    max-width: 600px;
  }
`;

export type TabProps = {
  title: string;
  content: string;
};

const ExerciseTwo = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <Head>
        <title>Exercise Two</title>
        <meta
          name="description"
          content="Created for MindArc Frontend Assessment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation dark />
      <main>
        <Container>
          <h1>Lorem Ipsum</h1>
          <p>
            Bonus: ('b' + 'a' + + 'a' + 'a').toLowerCase() equates to "banana"
            because with the extra "+", "+ + 'a'" evaluates as "+ NaN". The
            result before ".toLowerCase" is "baNaNa".
          </p>
          <LayoutDesktop
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />
          <LayoutMobile
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />
        </Container>
      </main>
    </>
  );
};

export default ExerciseTwo;
