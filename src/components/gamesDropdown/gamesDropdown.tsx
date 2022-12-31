import diablo2Icon from '../../assets/dropdown/diablo2-ressurected.png';
import overwatch2Icon from '../../assets/dropdown/overwatch2.png';
import wowIcon from '../../assets/dropdown/wow.png';
import hearthstoneIcon from '../../assets/dropdown/hearthstone.png';
import heroesOfTheStorm from '../../assets/dropdown/heroes-of-the-storm.png';
import warcraft3Reforged from '../../assets/dropdown/warcraft3-reforged.png';
import diablo4 from '../../assets/dropdown/diablo4.png';
import diabloImmortal from '../../assets/dropdown/diablo-immortal.png';
import diablo3 from '../../assets/dropdown/diablo3.png';
import starcraft2 from '../../assets/dropdown/starcraft2.png';
import starcraftRemastered from '../../assets/dropdown/starcraft-remastered.png';
import arcadeBlizzard from '../../assets/dropdown/arcade-blizzard.png';

import squaresIcon from '../../assets/dropdown/squares-icon.svg';
import battlenetIcon from '../../assets/dropdown/battlenet-icon.svg';
import downloadIcon from '../../assets/dropdown/download-icon.svg';
import chatIcon from '../../assets/dropdown/chat-icon.svg';

interface GamesDropdownProps {
  display: boolean;
}

const GamesDropdown = function ({display}: GamesDropdownProps) {
  return (
    <div className={`flex flex-col items-center bg-custom-black-transparent backdrop-blur-[4px] w-full absolute top-[96px] z-30 ${display ? '' : 'hidden'}`}>
      <div className='max-w-[1216px] w-full grid grid-cols-6 gap-[32px] mt-[134px] mb-[55px]'>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={diablo2Icon} alt="diablo 2 ressurected icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Diablo® II ressurected</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={overwatch2Icon} alt="overwatch 2 icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Overwatch® 2</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={wowIcon} alt="wolrd of warcraft icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>World of Warcraft®</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={hearthstoneIcon} alt="hearthstone icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Hearthstone</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={heroesOfTheStorm} alt="heroes of the storm icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Heroes of the storm®</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={warcraft3Reforged} alt="warcraft 3 icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Warcraft® III Reforged</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={diablo4} alt="diablo 4 icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Diablo® IV</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={diabloImmortal} alt="diablo immortal icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Diablo® Immortal</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={diablo3} alt="diablo 3 icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Diablo® III</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={starcraft2} alt="starcraft 2 icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>StarCraft® II</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={starcraftRemastered} alt="starcraft remastered icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>StarCraft® Remastered</span>
        </div>
        <div className='hover:bg-black w-full h-[176px] flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[69.4px] group-hover:scale-125'>
            <img className='w-full' src={arcadeBlizzard} alt="arcade blizzard icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Arcade da Blizzard®</span>
        </div>
      </div>
      <div className='flex justify-center items-center bg-custom-black-two w-full h-[70px]'>
        <div className='flex items-center mr-[64px]'>
          <div className='mr-[10px]'>
            <img src={squaresIcon} alt="squares icon" />
          </div>
          <span className='text-white text-[16px] font-semibold'>Ver todos os jogos</span>
        </div>
        <div className='flex items-center mr-[64px]'>
          <div className='mr-[10px]'>
            <img src={battlenetIcon} alt="battlenet icon" />
          </div>
          <span className='text-white text-[16px] font-semibold'>Aplicativo Battle.net</span>
        </div>
        <div className='flex items-center mr-[64px]'>
          <div className='mr-[10px]'>
            <img src={downloadIcon} alt="download icon" />
          </div>
          <span className='text-white text-[16px] font-semibold'>Downloads</span>
        </div>
        <div className='flex items-center mr-[64px]'>
          <div className='mr-[10px]'>
            <img src={chatIcon} alt="chat icon" />
          </div>
          <span className='text-white text-[16px] font-semibold'>Fóruns dos jogos</span>
        </div>
      </div>
    </div>
  );
};

export {GamesDropdown};
