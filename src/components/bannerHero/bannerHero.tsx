import { useState } from 'react';

import diabloIVbg from '../../assets/banner-hero/games/diablo-bg.png';
import diabloIVicon from '../../assets/banner-hero/icons/game-1.png';
import diabloIVLogo from '../../assets/banner-hero/games/diablo-logo.png';
import diabloIVAnimationCover from '../../assets/banner-hero/games/diablo-animation-cover.png';
import diabloIVAnimation from '../../assets/banner-hero/games/diablo-animation.gif';

import hearthstoneBg from '../../assets/banner-hero/games/hearthstone-bg.png';
import hearthstoneIcon from '../../assets/banner-hero/icons/game-2.png';
import hearthstoneLogo from '../../assets/banner-hero/games/hearthstone-logo.png';
import hearthstoneAnimationCover from '../../assets/banner-hero/games/hearthstone-animation-cover.png';
import hearthstoneAnimation from '../../assets/banner-hero/games/hearthstone-animation.gif';

import wowBg from '../../assets/banner-hero/games/wow-bg.png';
import wowIcon from '../../assets/banner-hero/icons/game-3.png';
import wowLogo from '../../assets/banner-hero/games/wow-logo.png';
import wowAnimationCover from '../../assets/banner-hero/games/wow-animation-cover.png';
import wowAnimation from '../../assets/banner-hero/games/wow-animation.gif';

import diabloImortalIcon from '../../assets/banner-hero/icons/game-4.png';
import starCraftIcon from '../../assets/banner-hero/icons/game-5.png';

import personIcon from '../../assets/person-icon.svg';
import playIcon from '../../assets/play-icon.svg';
import playIconBlue from '../../assets/play-icon-blue.svg';

interface Game {
  bg: string;
  logo: string;
  animationCover: string;
  animation: string;
  primaryTitle: string;
  secondaryTitle: string;
  buttonText: string
}

interface Games {
  [key: string]: Game
}


const BannerHero = function () {
  const [selectedGame, setSelectedGame] = useState<'diabloIV' | 'hearthstone' | 'wow'>('diabloIV');
  const [animation, setAnimation] = useState(false);
  const [games, setGames] = useState<Games>({
    diabloIV: {
      bg: 'bg-diablo',
      logo: diabloIVLogo,
      animationCover: diabloIVAnimationCover,
      animation: diabloIVAnimation,
      primaryTitle: 'Retorne à escuridão com o game Diablo IV',
      secondaryTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
      buttonText: 'Jogue Agora'
    },
    hearthstone: {
      bg: 'bg-hearthstone',
      logo: hearthstoneLogo,
      animationCover: hearthstoneAnimationCover,
      animation: hearthstoneAnimation,
      primaryTitle: 'Novo pacote de expansão de Hearthstone',
      secondaryTitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      buttonText: 'Reserve agora na pré-venda'
    },
    wow: {
      bg: 'bg-wow',
      logo: wowLogo,
      animationCover: wowAnimationCover,
      animation: wowAnimation,
      primaryTitle: 'Desbrave as Terras Sombrias em Shadowlands! ',
      secondaryTitle: 'O que jaz além do mundo que você conhece?',
      buttonText: 'Reserve agora na pré-venda'
    }
  });

  return (
    <div className={`${games[selectedGame]?.bg} bg-cover bg-center w-full bg-[black] h-[736px] sm:h-[622px] flex justify-center items-center transition-all ease-in-out delay-75 duration-700 px-[41px] sm:px-[21px]`}>
      <div className='flex justify-center items-center max-w-[1312px] w-full relative'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex md:flex-wrap sm:mt-[51px] z-10 max-w-[770px] w-full justify-between'>
            <div className='flex flex-col md:flex-row md:order-2 md:justify-center md:items-center md:mr-0'>
              <button className='mb-[20px] md:mb-0 md:mr-[20px]' onClick={() => {setSelectedGame('diabloIV')}}>
                <div>
                  <img className={`${selectedGame === 'diabloIV' ? null : 'grayscale'}`} src={diabloIVicon} alt="diablo 4 icon" />
                </div>
              </button>
              <button className='mb-[20px] md:mb-0 md:mr-[20px]' onClick={() => {setSelectedGame('hearthstone')}}>
                <div>
                  <img className={`${selectedGame === 'hearthstone' ? null : 'grayscale'}`} src={hearthstoneIcon} alt="heart stone icon" />
                </div>
              </button>
              <button className='mb-[20px] md:mb-0 md:mr-[20px]' onClick={() => {setSelectedGame('wow')}}>
                <div>
                  <img className={`${selectedGame === 'wow' ? null : 'grayscale'}`} src={wowIcon} alt="world of warcraft icon" />
                </div>
              </button>
              <button className='mb-[20px] md:mb-0 md:mr-[20px]'>
                <div>
                  <img className='grayscale' src={diabloImortalIcon} alt="diablo immortal icon" />
                </div>
              </button>
              <button>
                <div>
                  <img className='grayscale' src={starCraftIcon} alt="star craft icon" />
                </div>
              </button>
            </div>
            <div className='max-w-[562px] sm:max-w-[283px] w-full md:mb-[53px]'>
              <h1 className='text-white text-[64px] font-bold leading-none mb-4 md:text-[40px]'>{games[selectedGame].primaryTitle}</h1>
              <h2 className='text-white text-[18px] mb-8'>{games[selectedGame].secondaryTitle}</h2>
              <button className='text-white bg-custom-blue hover:bg-custom-blue-two font-bold py-[14px] px-[32px] rounded flex transition-all duration-500'>
                {games[selectedGame].buttonText}
              </button>
            </div>
          </div>
          <div className='flex flex-col items-end h-[500px] justify-between mt-[70px] sm:hidden absolute right-0'>
            <div className=''>
              <img src={games[selectedGame].logo} alt="diablo 4 logo" />
            </div>
            <div>
              <div className='mb-[9px] text-right'>
                <span className='text-white font-semibold text-[13px]'>ASSISTA O TRAILER</span>
              </div>
              <div className='relative w-[280px] h-[173px]' onMouseEnter={() => {setAnimation(true)}} onMouseLeave={() => {setAnimation(false)}}>
                {animation ? (
                  <>
                  <img className='w-full h-full object-cover' src={games[selectedGame].animation} alt="diablo 4 animation" />
                  {
                    /* blue button
                    <div className='flex justify-center items-center rounded-full bg-[#00AEFF] bg-opacity-60 0 border-[5px] border-black border-opacity-30 w-[51px] h-[51px] absolute top-[35%] left-[40%]'>
                      <img src={playIconBlue} alt="play icon" />
                    </div>
                    */
                  }
                  </>
                ) : (
                  <>
                  <img className='w-full h-full object-cover' src={games[selectedGame].animationCover} alt="diablo 4 animation cover" />
                  <div className='flex justify-center items-center rounded-full bg-black bg-opacity-50 w-[51px] h-[51px] absolute top-[35%] left-[40%]'>
                    <img src={playIcon} alt="play icon" />
                  </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {BannerHero};
