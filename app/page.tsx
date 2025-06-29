'use client'

import Overview from "./Components/Overview";
import Animation from "./Components/Animation";
import CardsSection from "./Components/Sections/CardsSection";

export default function Home() {
  return (
    <div>
      <Overview />
      <Animation />
      <CardsSection classname="bg-blue-700"/>
    </div>
  );
}
