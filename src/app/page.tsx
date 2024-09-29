import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import {Sidebar } from "@/components/Sidebar";
import { Appbar } from "@/components/Appbar";


import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="P-Show Benefits"
        title=" Why should you use this Platform?"
      >
       Use P-show to showcase your projects, gain recognition, connect with peers,
        and attract opportunities for collaboration and
         career growth.
      </SectionTitle>

      <Benefits data={benefitOne} />
      {/*about us: <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how our platform works"
      >
       P-show fosters a space where students connect, learn, and support each other. By sharing projects, 
       they gain fresh perspectives, spark creativity, and form meaningful relationships.
      </SectionTitle>

      <Video videoId="52WkpKsIQFo?si=wTlR4uuURQcojoGQ" />

      <SectionTitle
        preTitle="Projects"
        title="Discover the Creativity Behind Our Students' Projects on P-show!">
        
      </SectionTitle>
    </Container>
  );
}
