import { useContext } from 'react';
import { ContextType, AppContext } from '../context';

const heros = ['Code', 'Talent', 'Quality', 'Trust'];

const Hero = () => {
  const { currentHero, setCurrentHero } = useContext(AppContext) as ContextType;

  function setHero(item: string): string {
    if (currentHero === item) return 'text-black' && 'text-transition';
    return 'text-gray-300';
  }
  return (
    <div className="flex flex-col">
      <div className="flex px-56 -mt-6">
        <div className="flex flex-col gap-7">
          <p className="font-semibold text-gray-400">
            We are a boutique development studio
          </p>
          {heros.map((item, i) => {
            return (
              <span
                key={i}
                onClick={() => setCurrentHero(item)}
                className={`text-8xl font-bold ${setHero(
                  item
                )} cursor-pointer inline-block`}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div></div>
      </div>
      <div className="flex justify-center mt-32 gap-2">
        <span className="h-full w-4 border-2 flex justify-center rounded-lg">
          <span className="animate-bounce">I</span>
        </span>
        <p>Scroll down</p>
      </div>
    </div>
  );
};

export default Hero;
