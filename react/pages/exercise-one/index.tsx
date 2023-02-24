import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import Hero from "./components/Hero";
import Grid from "./components/Grid";

const ExerciseOne = () => {
  return (
    <>
      <Head>
        <title>Exercise One</title>
        <meta
          name="description"
          content="Created for MindArc Frontend Assessment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <Hero
          title="Hello Developer!"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imgSrc="/images/1920x650.png"
          imgSrcMobile="/images/600x600.png"
        />
        <Grid />
      </main>
    </>
  );
};

export default ExerciseOne;
