import battlenetLogo from '../../assets/logo-battle-net.png';
import closeIcon from '../../assets/close-icon.svg';
import googleIcon from '../../assets/google-icon.svg';
import appleIcon from '../../assets/apple-icon-modal.svg';

interface LoginModalProps {
  display?: boolean;
  handleModal?: () => void;
}

const LoginModal = function ({display, handleModal}: LoginModalProps) {
  return (
    <>
    { display &&
    <div className='modal px-[41px]'>
      <div className='modal-dialog max-w-[696px] w-full'>
        <div className='bg-login-modal bg-cover bg-center flex flex-col items-center rounded-[4px]'>
          <button className='self-end mt-[24px] mr-[24px]' onClick={handleModal}>
            <img src={closeIcon} alt="close icon" />
          </button>
          <div className='max-w-[166px] w-full mb-[40px]'>
            <img className='w-full' src={battlenetLogo} alt="battlenet logo" />
          </div>
          <form className='flex flex-col max-w-[426px] w-full mb-[41px]'>
            <input
            className='h-[48px] rounded-[4px] text-custom-black pl-4 active:border-[none] font-medium text-[15px] mb-[16px] focus:outline-none placeholder:text-custom-black'
            type="text"
            name="emailOrPhone"
            id=""
            placeholder='E-mail ou telefone'
            />
            <input
            className='h-[48px] rounded-[4px] text-custom-black pl-4 active:border-[none] font-medium text-[15px] mb-[16px] focus:outline-none placeholder:text-custom-black'
            type="password"
            name="password"
            id=""
            placeholder='Senha'
            />
            <input className='bg-custom-blue hover:bg-custom-blue-two text-white font-semibold rounded-[4px] py-[14px] transition-all duration-500 cursor-pointer' type="submit" value="Conectar-se" />
          </form>
          <div className='flex flex-col items-center mb-[35px]'>
            <span className='text-white font-medium text-[14px] mb-[16px]'>Ou conect-se com</span>
            <div className='flex'>
              <button className='bg-white w-[48px] h-[48px] flex justify-center items-center rounded-[4px] mr-[16px]'>
                <img src={googleIcon} alt="google icon" />
              </button>
              <button className='bg-white w-[48px] h-[48px] flex justify-center items-center rounded-[4px] mr-[16px]'>
                <img src={appleIcon} alt="apple icon" />
              </button>
              <button className='bg-white w-[48px] h-[48px] flex justify-center items-center rounded-[4px]'>
                <img src={googleIcon} alt="google icon" />
              </button>
            </div>
          </div>
          <span className='text-white text-[16px] font-medium'>
            <a href="#" className='text-custom-blue underline'>Crie uma conta </a>
            Battle.net de graça
          </span>
          <a href="#" className='text-custom-blue text-[16px] font-medium underline mb-[66px]'>Não consegue logar?</a>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export {LoginModal}
