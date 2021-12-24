import './Service.css';

const Contents = () => {
  return (
    <>
      <section className="advertising">
        advertising business (광고대행)
        <div className="description">
          네이버, 카카오, 구글&유튜브, 오픈마켓(쿠팡, 11번가, 위메프, 옥션 등) 등의 광고를 집행하는 광고주들의 온/오프라인 광고를 대행하여 진행합니다.
        </div>
        <div className="list">
          키워드 광고 (검색광고)
          <div className="content">배너, 동영상, 스폰서쉽 광고 등 인터넷에서 접할 수 있는 노출형 광고를 통칭합니다.</div>
        </div>
        <div className="list">
          디스플레이 광고
          <div className="content">
            인터넷 검색 사이트에 특정 키워드를 검색한 사람들을 대상으로 광고주의 사이트가 노출되도록 하는 광고 방법입니다.
          </div>
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
            불특정 다수와 온라인 상에서 타인과 소통하거나 관계를 맺을 수 있는 서비스, 관심사나 활동을 공유하는 사람들 사이의 관계망을 구축해주는
            형태를 말합니다.
          </div>
        </div>
      </section>
      <section className="sns"></section>
      <section className="homepage"></section>
      <section className="viral"></section>
      <section className="db"></section>
    </>
  );
};

const Service = () => {
  return (
    <article className="service">
      <div className="background" />
      <span>"더블케이미디어는</span>
      <span>네이버, 카카오, 구글&유튜브, 오픈마켓(쿠팡, 11번가, 위메프, 옥션 등) 등의</span>
      <span>"광고를 집행하는 광고주들의 온/오프라인 광고를 대행하여 진행하는</span>
      <span>
        <em>
          <strong>온라인 광고 대행사</strong>
        </em>
        입니다."
      </span>
      <Contents />
    </article>
  );
};

export default Service;
