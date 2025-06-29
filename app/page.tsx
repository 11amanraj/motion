'use client'

import Overview from "./Components/Overview";
import Animation from "./Components/Animation";
import CardsSection from "./Components/Sections/CardsSection";
import ScrollReveal from "./Components/Sections/ScrollReveal";
import TextAnimation from "./Components/Sections/TextAnimation";

export default function Home() {
  return (
    <div>
      <Overview />
      <Animation />
      <CardsSection classname="bg-blue-700"/>
      <ScrollReveal />
      <TextAnimation />
    </div>
  );
}
