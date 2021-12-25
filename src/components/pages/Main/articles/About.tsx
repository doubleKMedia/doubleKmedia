import './About.css';
import { scrollYAtom } from '../Main';
import { useRecoilValue } from 'recoil';
import { createRef, useEffect, useState } from 'react';

const About = () => {
  const [isPop, setIsPop] = useState([false, false]);
  const scrollY = useRecoilValue(scrollYAtom);
  const abouts = [createRef<HTMLElement>(), createRef<HTMLElement>()];

  useEffect(() => {
    setIsPop(
      abouts.map((about) => {
        const point = window.innerHeight / 1.1;

        if ((about.current?.getBoundingClientRect().top as number) > point) return false;
        else return true;
      })
    );
  }, [scrollY]);

  return (
    <article className="about">
      <section className={`about-1 ${isPop[0] ? 'pop' : 'hide'}`} ref={abouts[0]}>
        <div className="background" />
        <span>DOUBLE K MEDIA는</span>
        <span>온라인과 오프라인의</span>
        <span>경계를 뛰어넘는</span>
        <span>최고의 광고 컨설팅을</span>
        <span>약속합니다.</span>
      </section>
      <section className={`about-2 ${isPop[1] ? 'pop' : 'hide'}`} ref={abouts[1]}>
        <div className="background" />
        <span>DOUBLE K MEDIA는</span>
        <span>'광고주의 입장'에서</span>
        <span>생각하고 행동합니다.</span>
      </section>
    </article>
  );
};

export default About;
