import { ReactNode } from 'react';

import { useRouter } from 'next/router';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  // button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const router = useRouter();
  return (
    <header className="text-center">
      <img
        src={`${router.basePath}/assets/images/imagen3.jpg`}
        alt="Hotel"
        className="inline"
      />
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-16">{props.description}</div>
      {/* {props.button} */}
    </header>
  );
};

export { HeroOneButton };
