import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, HeroSection, LeaderBoardSection } from "@/components";
import { FAQSection } from "@/components/faq/faq.section";
import { JoinNowSection } from "@/components/join/join.section";

export default function Home() {
  return (
    <>
      <Head>
        <title>MemeLoard</title>
        <meta name="description" content="loremipsm-----------" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500;9..40,700&family=Inter:wght@100;200;300;400;500;600;700&family=Manrope:wght@500;600&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <HeroSection />
        <JoinNowSection />
        <LeaderBoardSection />
        <FAQSection />
      </Container>
    </>
  );
}