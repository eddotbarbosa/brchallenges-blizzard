import hearthstoneMasters from '../../assets/dropdown/hearthstone-masters.png';
import wowArenaWorldChampionship from '../../assets/dropdown/wow-arena-world-championship.png';
import starcraftWcs from '../../assets/dropdown/starcraft-wcs.png';
import overWatchWorldChampionship from '../../assets/dropdown/overwatch-world-cup.png';
import overwatchLeague from '../../assets/dropdown/overwatch-league.png';

import trophyIcon from '../../assets/dropdown/trophy-icon.svg';

interface EsportsDropdownProps {
  display?: boolean;
}

const EsportsDropdown = function ({display}: EsportsDropdownProps) {
  return (
    <div className={`flex flex-col items-center bg-custom-black-transparent backdrop-blur-[4px] w-full absolute top-[96px] z-30 ${display ? '' : 'hidden'}`}>
      <div className='max-w-[1126px] w-full grid grid-cols-5 gap-[32px] mt-[134px] mb-[55px]'>
        <div className='w-full h-full flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[174px] group-hover:scale-125 mb-[23px]'>
            <img className='w-full' src={hearthstoneMasters} alt="hearthstone masters icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Hearthstone® masters</span>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[174px] group-hover:scale-125 mb-[23px]'>
            <img className='w-full' src={wowArenaWorldChampionship} alt="wow arena world championship icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Campeonato Mundial de Arena WoW®</span>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[174px] group-hover:scale-125 mb-[23px]'>
            <img className='w-full' src={starcraftWcs} alt="starcraft wcs icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>StarCraft® II WCS</span>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[174px] group-hover:scale-125 mb-[23px]'>
            <img className='w-full' src={overWatchWorldChampionship} alt="overwatch world cup icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Copa Mundial de Overwatch®</span>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center rounded-[4px] group'>
          <div className='w-full max-w-[174px] group-hover:scale-125 mb-[23px]'>
            <img className='w-full' src={overwatchLeague} alt="overwatch league cup icon" />
          </div>
          <span className='w-full max-w-[105px] text-center font-medium text-custom-gray group-hover:text-white'>Liga de Overwatch®</span>
        </div>
      </div>
      <div className='flex justify-center items-center bg-custom-black-two w-full h-[70px]'>
        <div className='flex items-center mr-[64px]'>
          <div className='mr-[10px]'>
            <img src={trophyIcon} alt="trophy icon" />
          </div>
          <span className='text-white text-[16px] font-semibold'>Ver todos os jogos</span>
        </div>
      </div>
    </div>
  );
};

export {EsportsDropdown};
