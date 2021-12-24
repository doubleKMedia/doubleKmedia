import './Main.css';
import About from './articles/About';
import Service from './articles/Service';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { createRef, useEffect, useState } from 'react';

const scrollYAtom = atom({ key: 'scrollY', default: 0 });

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
  const scrollY = useRecoilValue(scrollYAtom);
  const nav = createRef<HTMLElement>();

  useEffect(() => {
    setNavOffset(nav.current?.offsetTop as number);
  }, []);

  useEffect(() => {
    if (navOffset < scrollY) setIsTop(true);
    else setIsTop(false);
  }, [scrollY]);

  return (
    <nav className={`${isTop ? 'fixed' : ''}`} ref={nav}>
      <button>home</button>
      <button>service</button>
      <button>about</button>
      <button>work</button>
      <button>center</button>
      <button>contact</button>
    </nav>
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
      <Service />
    </div>
  );
};

export default Main;
