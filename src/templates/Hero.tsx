import Link from 'next/link';

import { Background } from '../background/Background';
// import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#nosotros">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="#servicios">
            <a>Servicios</a>
          </Link>
        </li>
        <li>
          <Link href="#galeria">
            <a>Galeria</a>
          </Link>
        </li>
        <li>
          <Link href="#contactenos">
            <a>Contactenos</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    {/* <Section yPadding="pt-20 pb-32"> */}
    <HeroOneButton
      title={
        <>
          {'¿Quieres reservar en los Hoteles de Cuba?\n'}
          <span className="text-primary-900">¡Te ayudamos!</span>
        </>
      }
      description="Nosotros hacemos todas las gestiones necesarias para que usted vaya al hotel deseado."
      // button={
      //   <Link href="https://creativedesignsguru.com/category/nextjs/">
      //     <a>
      //       <Button xl>Download Your Free Theme</Button>
      //     </a>
      //   </Link>
      // }
    />
    {/* </Section> */}
  </Background>
);

export { Hero };
