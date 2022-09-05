import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  // button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  return (
    <header className="text-center relative">
      <div className="md:absolute top-1/4 sm:left-52 left-0">
        <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          {props.title}
        </h1>
        <div className="text-2xl mt-4 mb-4 md:bg-white md:px-4 xl:bg-transparent xl:text-white rounded-2xl">
          {props.description}
        </div>
        <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero md:bg-zinc-50 md:m-1 md:px-4 xl:bg-transparent rounded-2xl inline-block">
          Contactanos
        </h1>
      </div>

      <img
        src={`https://i.postimg.cc/wBTxJnFL/imagen3.jpg`}
        alt="Hotel"
        className="inline"
      />
      {/* {props.button} */}
    </header>
  );
};

export { HeroOneButton };
