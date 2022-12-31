import {useEffect, useState} from 'react';

import blizzardLogo from '../../assets/logo-blizzard.png';
import moreGames from '../../assets/blizzard-more-games.png'

import battlenetIcon from '../../assets/battlenet-icon.svg';
import nintendoSwitchIcon from '../../assets/nintendo-switch-icon.svg';
import xboxIcon from '../../assets/xbox-icon.svg';
import playstationIcon from '../../assets/playstation-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import plusIconGray from '../../assets/plus-icon-gray.svg';


import axios from 'axios';

interface Games {
  name: string;
  logo: string;
  image: string;
  category: string;
};

const ExclusiveGames = function () {
  const [games, setGames] = useState<Games[]>([]);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    async function getGames () {
      const games = await axios.get('https://api.brchallenges.com/api/blizzard/games');

      return setGames(games.data);
    };

    getGames();
  }, []);

  return (
    <div className='w-full bg-black flex items-center flex-col px-[41px] sm:px-[24px]'>
      <div className='w-full max-w-[1312px] flex justify-between items-end mt-[95px] mb-[87px]'>
        <div className='flex items-end w-full justify-between'>
          <div className='flex'>
            <span className='text-custom-gray text-[15px] font-semibold mr-[171px] md:hidden'>GAMES</span>
            <h2 className='text-white font-bold text-[32px] sm:text-[28px] '>Jogos <br /> exclusivos</h2>
          </div>
          <div className='flex sm:hidden'>
            <button className='mr-[24px]'>
              <img src={battlenetIcon} alt="battle.net icon" />
            </button>
            <button className='mr-[24px]'>
              <img src={nintendoSwitchIcon} alt="nintendo switch icon" />
            </button>
            <button className='mr-[24px]'>
              <img src={xboxIcon} alt="xbox icon" />
            </button>
            <button>
              <img src={playstationIcon} alt="playstation icon" />
            </button>
          </div>
          <button>
            <div className='flex justify-end items-center'>
              <div className='mr-3'>
                <img src={plusIcon} alt="plus icon" />
              </div>
              <span className='text-custom-blue sm:text-[14px]'>Ver todos os jogos</span>
            </div>
          </button>
        </div>
      </div>
      <ul className='max-w-[1312px] w-full grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-4 mb-[107px]'>
        {games.map((game) => {
          return (
            <li key={game.name}>
              <div className='game-card flex flex-col'>
                <div className='relative mb-[25.8px]'>
                  <div className='overflow-hidden'>
                    <img
                    className='game-card-image transition-[transform, translate] ease-in-out delay-75 duration-300 rounded-[4.3px] object-cover bg-center'
                    src={game.image}
                    alt="game image"
                    />
                    <div
                    className='game-card-shadow absolute w-full h-full top-0 left-0 transition-all ease-in-out delay-75 duration-300 '
                    >
                    </div>
                  </div>
                  <div className=' absolute bottom-[10%] left-[22%] w-[60%] h-[auto]'>
                    <img className='w-full' src={game.logo} alt="game logo" />
                  </div>
                </div>
                <span className='text-white font-semibold text-[19.35px] mb-[4.3px]'>{game.name}</span>
                <span className='text-custom-gray font-normal text-[15px]'>{game.category}</span>
              </div>
            </li>
          );
        })}
        <li>
          <div className='flex flex-col'>
            <div className='relative mb-[25.8px]'>
              <div>
                <img className='rounded-[4.3px] object-cover'  src={moreGames} alt="game image"/>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export {ExclusiveGames};
