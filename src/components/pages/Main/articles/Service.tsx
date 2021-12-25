import { createRef, useEffect, useState } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import './Service.css';

const Advertising = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <section className={`advertising ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="title">advertising business (광고대행)</div>
      <div className="description">
        네이버, 카카오, 구글&유튜브, 오픈마켓(쿠팡, 11번가, 위메프, 옥션 등) 등의 광고를 집행하는 광고주들의 온/오프라인 광고를 대행하여 진행합니다.
      </div>
      <div className="list">
        키워드 광고 (검색광고)
        <div className="content">배너, 동영상, 스폰서쉽 광고 등 인터넷에서 접할 수 있는 노출형 광고를 통칭합니다.</div>
      </div>
      <div className="list">
        디스플레이 광고
        <div className="content">인터넷 검색 사이트에 특정 키워드를 검색한 사람들을 대상으로 광고주의 사이트가 노출되도록 하는 광고 방법입니다.</div>
      </div>
      <div className="list">
        바이럴 광고
        <div className="content">
          바이러스가 전염되듯이 소비자들 사이에 소문을 타고 물건에 대한 홍보성 정보가 끊임없이 전달되도록 하는 광고 방법입니다.
        </div>
      </div>
      <div className="list">
        SNS 광고
        <div className="content">
          불특정 다수와 온라인 상에서 타인과 소통하거나 관계를 맺을 수 있는 서비스, 관심사나 활동을 공유하는 사람들 사이의 관계망을 구축해주는 형태를
          말합니다.
        </div>
      </div>
    </section>
  );
};

const SNSmarketing = () => {
  return (
    <section className="sns-marketing">
      <div className="title">SNS 마케팅</div>
      <div className="description">
        페이스북, 인스타그램, 유튜브, 카카오스토리, 트위터 등 가장 선호하는 소셜 미디어로 정밀한 광고 방법을 통해 효과를 볼 수 있는 마케팅입니다.
      </div>
      <div className="description">
        <em>브랜드 페이지 관리, 콘텐츠 제작 및 배포, 광고 운영, SNS 바이럴 영상 제작 등 SNS 채널을 활용한 통합 마케팅 플랜</em>으로 브랜드인지도 상승
        및 판매 촉진 효과를 얻을 수 있습니다.
      </div>
      <div className="description">
        유저의 관심사를 기반으로 광고를 송출하며, 각 채널 별 피드 광고를 비롯한 유료 광고를 통하여 정밀한 타겟팅 서비스를 제공 받으실 수 있습니다.
      </div>
    </section>
  );
};

const OnlineHomepage = () => {
  return (
    <section className="online-homepage">
      <div className="title">홈페이지 제작</div>
      <div className="description">온라인 시장에서 가장 중요한 것은 홈페이지입니다.</div>
      <div className="description">무엇을 사거나 정보를 얻기 위해서 모바일이나 인터넷을 통해 검색을 시도합니다.</div>
      <div className="description">그리고 원하는 홈페이지에 들어가서 가격대를 비교해보고 구매를 하거나 정보를 얻습니다.</div>
      <div className="description">
        <strong>홈페이지 제작은 이제 선택이 아닌 필수</strong>입니다.
      </div>
    </section>
  );
};

const ViralMarketing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <section className={`viral-marketing ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="title">바이럴 마케팅</div>
      <div className="description">
        바이럴 마케팅은 바이러스가 전염되듯이 소비자들 사이에서 소문을 타고, 물건 또는 브랜드에 대한 홍보성 정보가 끊임없이 전달되는 마케팅
        기법입니다.
      </div>
      <div className="description">
        소비자들의 자발적인 행동과 홍보를 통해 기업의 브랜드 또는 제품에 대한 부분을 자연스럽게 홍보할 수 있는 방법이 바이럴 마케팅입니다.
      </div>
      <div className="list">
        블로그 마케팅
        <div className="content">
          광고주의 상품에 대한 콘텐츠를 블로그에 친근하고 재미있게 표현하여 블로그에 게재함으로써 다수의 이용자들과 소통하는 방식으로, 자연스럽게 기업
          홈페이지 방문을 유도하여 적은 비용의 광고비로 효과적인 매출 상승에 기여합니다.
        </div>
        <div className="content">
          업종 카테고리별 분야에서 영향력이 높은 블로그를 통하여 노출하고자 하는 키워드를 분석하여 소비자들에게 발 빠르게 노출시켜 제품 및 브랜드
          인지도를 높여드립니다.
        </div>
        <div className="content">
          또한, 블로그 배포작업 등 매월 꾸준히 블로그를 관리하여 채널 운영 관리를 통한 홍보 마케팅 서비스도 제공해드립니다.
        </div>
      </div>
      <div className="list">
        카페 마케팅
        <div className="content">
          카페 마케팅은 관심사가 비슷한 영역을 체크하여, 타겟팅을 좀 더 명확하게 찾아 광고를 진행할 수 있는 장점이 있습니다.
        </div>
        <div className="content">
          친밀한 유대 관계 및 신뢰감을 형성하여 직접적인 성과를 유도하는 홍보 수단 및 양방향 소통 공간으로 잠재 고객에게 효과적으로 접근할 수
          있습니다.
        </div>
        <div className="content">자연스러운 바이럴 마케팅이 가능하며, 정밀한 타겟팅 설정으로 통해 전화율을 높일 수 있는 방법입니다.</div>
      </div>
    </section>
  );
};

const CPAandDBmarketing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <section className={`cpa-db-marketing ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="title">CPA & DB 마케팅</div>
      <div className="description">CPA 마케팅이란 목표 타겟(Target)이 광고주가 원하는 행동을 할 때만 광고비를 지급하는 마케팅 방식입니다.</div>
      <div className="description">
        DB 마케팅이란 개인 별 맞춤화 된 서비스를 제공하기 위한 마케팅을 목적으로 정보를 수집하고 그 데이터를 기반으로 진행하는 마케팅 전략입니다.
        <br />
        고객에 대한 자료를 바탕으로 고객 중심, 매출 중심의 신속하고도 정확한 마케팅 전략을 구사하여 시장 경쟁력을 높입니다.
      </div>
      <div className="list">
        CPA 마케팅
        <div className="content">1. 광고주가 제공하고자 하는 제품/서비스에 대한 관심이 있는 잠재 고객에게 광고를 통해 홍보</div>
        <div className="content">2. 타겟에 맞는 광고 집행을 통해 잠재 고객들이 자발적으로 개인정보를 기입하거나 방문, 상품을 구매</div>
        <div className="content">3. 콜 직원 또는 콜 조직을 통해 판매 / 방문 유도 / 매출 증대 등의 목적을 달성</div>
      </div>
      <div className="list">
        DB 마케팅
        <div className="content">
          Local Marketing DB 구축 → 데이터 유지 관리 Data Quality 향상 → 데이터 분석, 고객정보 분석, 고객만족 및 요구사항 파악 → 마케팅 실행업무
          프로세스 확립 각 채널 별 발송처리
        </div>
      </div>
    </section>
  );
};

const Contents = () => {
  return (
    <>
      <Advertising />
      <SNSmarketing />
      <OnlineHomepage />
      <ViralMarketing />
      <CPAandDBmarketing />
    </>
  );
};

export const servicePositionAtom = atom({ key: 'servicePosition', default: 0 });

const Service = () => {
  const setServicePosition = useSetRecoilState(servicePositionAtom);
  const serviceRef = createRef<HTMLElement>();

  useEffect(() => {
    setServicePosition(serviceRef.current?.offsetTop as number);
  }, []);

  return (
    <article className="service" ref={serviceRef}>
      <div className="background" />
      <div className="ment">
        <span>"더블케이미디어는</span>
        <span>네이버, 카카오, 구글&유튜브, 오픈마켓(쿠팡, 11번가, 위메프, 옥션 등) 등의</span>
        <span>"광고를 집행하는 광고주들의 온/오프라인 광고를 대행하여 진행하는</span>
        <span>
          <em>
            <strong>온라인 광고 대행사</strong>
          </em>
          입니다."
        </span>
      </div>
      <Contents />
    </article>
  );
};

export default Service;
