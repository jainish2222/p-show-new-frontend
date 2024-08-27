import {Container} from '@/components/Container'
import {Testimonials} from '@/components/Testimonials'
import {SectionTitle} from '@/components/SectionTitle'
import {Faq} from '@/components/Faq'
import {Cta} from '@/components/Cta'
import {Benefits} from '@/components/Benefits'
import { benefitTwo } from "@/components/data";
export default function Home() {
  return (
  <>
       <Container>
       <Benefits imgPos="right" data={benefitTwo} />
       <SectionTitle preTitle="..............................................." title="Our contributor">
      </SectionTitle>
       <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      Find answers to common questions about our platform, its features, and usage. If you have any other inquiries or need further assistance, feel free to reach out to us.
      </SectionTitle>

      <Faq />
      <Cta />
       </Container>
  </>
  );
}
