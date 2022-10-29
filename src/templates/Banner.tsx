import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Comineza por contactanos y has tu"
      button={
        <Link href="#">
          <a>
            <Button>Reservación</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
