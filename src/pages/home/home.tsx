import {useState} from 'react';

import {Navbar} from '../../components/navbar/navbar';
import {GamesDropdown} from '../../components/gamesDropdown/gamesDropdown';
import {EsportsDropdown} from '../../components/esportsDropdown/exportsDropdown';
import {BannerHero} from '../../components/bannerHero/bannerHero';
import {ExclusiveGames} from '../../components/exclusiveGames/exclusiveGames';
import {Footer} from '../../components/footer/footer';
import {LoginModal} from '../../components/loginModal/loginModal';


const Home = function () {
  const [loginModal, setLoginModal] = useState<boolean>(false);

  const handleLoginModal = function () {
    if (loginModal) {
      document.body.style.overflow = '';
      return setLoginModal(false);
    }

    document.body.style.overflow = 'hidden';
    return setLoginModal(true);
  };

  return (
    <div className='overflow-hidden'>
      <Navbar handleModal={handleLoginModal} />
      <BannerHero />
      <ExclusiveGames />
      <Footer />
      <LoginModal display={loginModal} handleModal={handleLoginModal} />
      <EsportsDropdown />
    </div>
  );
};

export {Home};
