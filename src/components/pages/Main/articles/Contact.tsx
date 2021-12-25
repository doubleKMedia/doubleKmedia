import { createRef, useEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import './Contact.css';

export const contactPositionAtom = atom({ key: 'contactPosition', default: 0 });

const Contact = () => {
  const setContactPosition = useSetRecoilState(contactPositionAtom);
  const contactRef = createRef<HTMLElement>();

  const mapSetting = () => {
    const location = {
      x: 37.26737769181738,
      y: 127.03060404322764,
    };

    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(location.x, location.y),
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    const mark = new naver.maps.Marker({
      position: new naver.maps.LatLng(location.x, location.y),
      map: map,
      title: '더블케이미디어',
      icon: {
        url: '../img/marker.png',
      },
    });
  };

  useEffect(() => {
    setContactPosition(contactRef.current?.offsetTop as number);
    mapSetting();
  }, []);

  return (
    <article className="contact" ref={contactRef}>
      <div id="map" />
      <span className="way-info">
        <strong className="title">&lt;오시는길&gt;</strong>
        <br />
        지하철: (수인분당선) 수원시청역 8번 출구에서 751m로 KBS 수원 드라마 제작센터 맞은편에 위치하고 있습니다.
        <br />
        주차: 스마트타워 건물 B1 ~ B5 층에 주차 가능합니다.
      </span>
    </article>
  );
};

export default Contact;
