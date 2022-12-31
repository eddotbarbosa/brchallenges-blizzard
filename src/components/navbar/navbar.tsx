import { useState } from 'react';

import { GamesDropdown } from '../gamesDropdown/gamesDropdown';
import { EsportsDropdown } from '../esportsDropdown/exportsDropdown';

import blizzardLogo from '../../assets/logo-blizzard.png';
import diablo2Icon from '../../assets/dropdown/diablo2-ressurected.png';

import arrowDowm from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import personIcon from '../../assets/person-icon.svg';
import menuIcon from '../../assets/menu-icon.svg';


interface NavbarProps {
  handleModal: () => void;
}

const Navbar = function ({handleModal}: NavbarProps) {
  const [gamesDropdown, setGamesDropdown] = useState(false);
  const [esportsDropdown, setEsportsDropdown] = useState(false);

  const handleGamesDropdown = function () {
    if (esportsDropdown) {
      setEsportsDropdown(false);
    }

    setGamesDropdown(gamesDropdown ? false : true);
  };

  const handleEsportsDropdown = function () {
    if (gamesDropdown) {
      setGamesDropdown(false);
    }

    setEsportsDropdown(esportsDropdown ? false : true);
  };

  return (
    <div className={`flex justify-center items-center w-full h-[96px] absolute top-0 border-b-[1.5px] border-custom-gray${(gamesDropdown || esportsDropdown) ? ' bg-custom-black-transparent' : ''}`}>
      <div className='max-w-[1312px] w-full flex justify-between items-center px-[45px] sm:px-[21px]'>
        <div className='flex items-center'>
          <div className='mr-[112.3px] md:mr-0'>
            <img src={blizzardLogo} alt="blizzard logo" />
          </div>
          <div className='md:hidden'>
            <ul className='flex'>
              <li>
                <button className='text-white font-medium mr-[34px] flex items-center hover:text-custom-blue' onClick={handleGamesDropdown}>
                  Jogos
                  <div className='ml-[16px]'>
                    {gamesDropdown ? (
                      <>
                        <img src={arrowUp} alt="arrow up icon" />
                      </>
                    ) : (
                      <>
                        <img src={arrowDowm} alt="arrow down icon" />
                      </>
                    )}
                  </div>
                </button>
              </li>
              <li>
                <button className='text-white font-medium mr-[34px] flex items-center hover:text-custom-blue' onClick={handleEsportsDropdown}>
                  Esportes
                  <div className='ml-[16px]'>
                    <img src={arrowDowm} alt="arrow down icon" />
                  </div>
                </button>
              </li>
              <li>
                <a className='text-white font-medium mr-[34px] hover:text-custom-blue' href="#">Loja</a>
              </li>
              <li>
                <a className='text-white font-medium mr-[34px] hover:text-custom-blue' href="#">Noticias</a>
              </li>
              <li>
                <a className='text-white font-medium mr-[34px] hover:text-custom-blue' href="#">Suporte</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex sm:hidden'>
          <button className='text-white text-[14px] font-medium mr-[16px] w-[115.69px] h-[41px] border border-gray-300 rounded-[3.2px]'>Criar conta</button>
          <button
          onClick={handleModal}
          className='text-white text-[14px] font-medium w-[115.69px] h-[41px] bg-custom-blue hover:bg-custom-blue-two rounded-[3.2px] flex justify-center items-center transition-all duration-500'
          >
            <div className='mr-[6.3px]'>
              <img src={personIcon} alt="person icon" />
            </div>
            Logar
          </button>
        </div>
        <button className='hidden md:block ml-[41px] sm:ml-0'>
          <img src={menuIcon} alt="menuIcon" />
        </button>
      </div>
      <GamesDropdown display={gamesDropdown} />
      <EsportsDropdown display={esportsDropdown} />
    </div>
  );
};

export {Navbar};
