'use client'

import Overview from "./Components/Overview";
import Animation from "./Components/Animation";
import Section1 from "./Components/Sections/Section1";

export default function Home() {
  return (
    <div>
      <Overview />
      <Animation />
      <Section1 classname="bg-blue-700" />
      <Section1 classname="bg-yellow-700" />
    </div>
  );
}
