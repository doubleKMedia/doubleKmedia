import './About.css';
import { scrollYAtom } from '../Main';
import { useRecoilValue } from 'recoil';
import { createRef, useEffect, useState } from 'react';

const About = () => {
  const [isPop, setIsPop] = useState([false, false]);
  const [isHistory, setIsHistory] = useState(false);
  const [isOrganization, setIsOrganization] = useState(false);
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

  const clickAbout = {
    goHistory: () => {
      if (isHistory) setIsHistory(false);
      else setIsHistory(true);
    },
    goOrganization: () => {
      if (isOrganization) setIsOrganization(false);
      else setIsOrganization(true);
    },
  };

  return (
    <article className="about">
      <section className={`about-1 ${isPop[0] ? 'pop' : 'hide'} ${isHistory ? 'history' : ''}`} ref={abouts[0]} onClick={clickAbout.goHistory}>
        <div className="background" />
        <span>DOUBLE K MEDIA는</span>
        <span>온라인과 오프라인의</span>
        <span>경계를 뛰어넘는</span>
        <span>최고의 광고 컨설팅을</span>
        <span>약속합니다.</span>
        <div className="history">
          <span className="title">history</span>
          <span className="since">
            <strong>2021. 10. 15.</strong>DOUBLE K MEDIA 설립
          </span>
        </div>
      </section>
      <section
        className={`about-2 ${isPop[1] ? 'pop' : 'hide'} ${isOrganization ? 'organization' : ''}`}
        ref={abouts[1]}
        onClick={clickAbout.goOrganization}
      >
        <div className="background" />
        <span>DOUBLE K MEDIA는</span>
        <span>'광고주의 입장'에서</span>
        <span>생각하고 행동합니다.</span>
        <div className="organization">
          <span className="title">organization</span>
          <span className="content">
            저희 DOUBLE K MEDIA는 다양한 매체를 진행하는 광고주분들을 서포트하기 위해 조직단위로 활동하며 영상, 디자인, 기획, 영업&총괄팀으로 함께
            움직이고 있습니다.
          </span>
          <img src="Main/organization.png" />
        </div>
      </section>
    </article>
  );
};

export default About;
