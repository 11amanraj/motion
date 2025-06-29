'use client'

import CardsSection from "./Components/Sections/CardsSection";
import FormSection from "./Components/Sections/FormSection";
import ScrollReveal from "./Components/Sections/ScrollReveal";
import TextAnimation from "./Components/Sections/TextAnimation";

export default function Home() {
  return (
    <div>
      <CardsSection classname="bg-blue-700"/>
      <ScrollReveal />
      <TextAnimation />
      <FormSection />
    </div>
  );
}
