import {UAParser} from 'ua-parser-js';

import battlenetLogo from '../../assets/logo-battle-net.png';
import app from '../../assets/ilustrations/app.png';
import appMini from '../../assets/ilustrations/app-mini.png';

import checkMarkIcon from '../../assets/checkmark-icon.svg';
import circlesIcon from '../../assets/circles-icon.svg';
import buyIcon from '../../assets/buy-icon.svg';
import windowsIcon from '../../assets/windows-icon.svg';
import appleIcon from '../../assets/apple-icon.svg';
import linuxIcon from '../../assets/linux-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';

const Footer = function () {
  const useragent = UAParser(window.navigator.userAgent);

  console.log(useragent.os);

  return (
    <div className='bg-[url("/src/assets/footer-background.png")] bg-cover bg-center w-full flex justify-center relative px-[41px] sm:px-[21px]'>
      <div className='w-full flex justify-center sm:flex-col'>
        <div className='mt-[132px] min-w-[359.72px] sm:min-w-[0]'>
          <div className='mb-[32px]'>
            <img src={battlenetLogo} alt="battle net logo" />
          </div>
          <div className='mb-[30px]'>
            <span className='text-white text-[32px] font-bold'>Baixe agora o battle.net</span>
          </div>
          <div className='flex mb-[24px]'>
            <div className='mr-4'>
              <img src={checkMarkIcon} alt="checkmark icon" />
            </div>
            <span className='text-custom-gray font-normal text-[18px]'>Seus Jogos em um só lugar</span>
          </div>
          <div className='flex mb-[24px]'>
            <div className='mr-4'>
              <img src={circlesIcon} alt="circles icon" />
            </div>
            <span className='text-custom-gray font-normal text-[18px]'>Conecte-se aos seus amigos</span>
          </div>
          <div className='flex mb-[39px]'>
            <div className='mr-4'>
              <img src={buyIcon} alt="buy icon" />
            </div>
            <span className='text-custom-gray font-normal text-[18px]'>Compre jogos e itens digitais</span>
          </div>
          <button className='text-white flex items-center font-semibold bg-custom-blue hover:bg-custom-blue-two px-[42px] py-[14px] rounded-[4px] mb-[47px] transition-all duration-500'>
            {useragent.os.name === 'Windows' ? (
              <>
                <div className='mr-[8px]'>
                  <img src={windowsIcon} alt="apple icon" />
                </div>
                Baixar para o Windows
              </>
            ) : (
              <>
                {useragent.os.name === 'Mac OS' ? (
                  <>
                    <div className='mr-[8px]'>
                      <img src={appleIcon} alt="apple icon" />
                    </div>
                    Baixar para o MacOS
                  </>
                ) : (
                  <>
                    <div className='mr-[8px]'>
                      <img src={linuxIcon} alt="apple icon" />
                    </div>
                    Baixar para o Linux
                  </>
                )}
              </>
            )}
          </button>
          <div className='flex items-center'>
            <div className='mr-[18.67px]'>
              <img src={phoneIcon} alt="phone icon" />
            </div>
            <span className='text-white text-[14px] font-semibold'>Também disponível como <br /> <a href="#" className='underline'>aplicativo móvel</a></span>
          </div>
        </div>
        <div className='relative overflow-hidden sm:w-full'>
          <img className='min-w-[1065px] overflow-hidden' src={app} alt="app image" />
          <img className='absolute bottom-0 left-[25%] min-w-[647px] overflow-hidden' src={appMini} alt="app mini image" />
        </div>
      </div>
    </div>
  );
};

export {Footer};
