import './Main.css';
import About, { aboutPositionAtom } from './articles/About';
import Service, { servicePositionAtom } from './articles/Service';
import FooterInfo from './articles/FooterInfo';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { createRef, useEffect, useState } from 'react';
import DivideContents from '../../common/DivideContents';
import Contact, { contactPositionAtom } from './articles/Contact';

export const scrollYAtom = atom({ key: 'scrollY', default: 0 });

const Header = () => {
  return (
    <header id="header">
      <img className="header-img" src="/logo512.png" />
      <span>
        <em>DOUBLE K MEDIA</em>
      </span>
    </header>
  );
};

const Navigator = () => {
  const [isTop, setIsTop] = useState(false);
  const [navOffset, setNavOffset] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const scrollY = useRecoilValue(scrollYAtom);
  const nav = createRef<HTMLElement>();
  const aboutPosition = useRecoilValue(aboutPositionAtom);
  const servicePosition = useRecoilValue(servicePositionAtom);
  const contactPosition = useRecoilValue(contactPositionAtom);

  useEffect(() => {
    setNavOffset(nav.current?.offsetTop as number);
    setNavHeight(window.innerWidth > 600 ? (nav.current?.offsetHeight as number) : 0);
  }, []);

  useEffect(() => {
    if (navOffset < scrollY && !isTop) setIsTop(true);
    else if (navOffset > scrollY && isTop) setIsTop(false);
  }, [scrollY]);

  const goScroll = {
    home: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    about: () => window.scrollTo({ top: aboutPosition - navHeight, left: 0, behavior: 'smooth' }),
    service: () => window.scrollTo({ top: servicePosition - navHeight * 2, left: 0, behavior: 'smooth' }),
    contact: () => window.scrollTo({ top: contactPosition - navHeight * 2, left: 0, behavior: 'smooth' }),
  };

  return (
    <nav className={`${isTop ? 'fixed' : ''}`} ref={nav}>
      <button onClick={goScroll.home}>home</button>
      <button onClick={goScroll.about}>about</button>
      <button onClick={goScroll.service}>service</button>
      <button>work</button>
      <button onClick={goScroll.contact}>contact</button>
    </nav>
  );
};

const Footer = () => {
  const [OpenInfo, setOpenInfo] = useState(<></>);

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setOpenInfo(<></>);
  };

  const popTermsOfUse = () => {
    document.body.style.overflow = 'hidden';
    setOpenInfo(FooterInfo.TermsOfUse({ close: closeModal }));
  };

  const popPrivacyPolicy = () => {
    document.body.style.overflow = 'hidden';
    setOpenInfo(FooterInfo.PrivacyPolicy({ close: closeModal }));
  };

  return (
    <footer>
      더블케이미디어
      <br />
      주소 : 경기도 수원시 팔달구 인계동 1035-6 스마트타워 17층 1704호
      <br />
      <br />
      <button className="infomation" onClick={popTermsOfUse}>
        이용약관
      </button>
      <button className="infomation" onClick={popPrivacyPolicy}>
        개인정보처리방침
      </button>
      {OpenInfo}
    </footer>
  );
};

const Main = () => {
  const setScrollY = useSetRecoilState(scrollYAtom);

  useEffect(() => {
    const scrollEvent = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div className="main">
      <div className="background-img" />
      <Header />
      <Navigator />
      <About />
      <DivideContents />
      <Service />
      <DivideContents height={200} />
      <Contact />
      <DivideContents />
      <Footer />
    </div>
  );
};

export default Main;
