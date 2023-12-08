import toys from '../../assets/platform/Toys.svg';
import catTree from '../../assets/platform/Cat tree.svg';

function PlatformHeroSection() {
  const screenSize = window.innerWidth;

  return (
    <section className="platform-hero-section">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '50%',
          padding: '95px 0 0 135px',
        }}
      >
        {screenSize > 767 && (
          <img className="hero-img-left" src={catTree} alt="" />
        )}
      </div>
      <div className="container-text-description-hero">
        <div className="container-text">
          <strong className="yellow-strong">BackToMe</strong>
          <h1 className="title-platform-hero">
            A solução para ações conscientes e responsáveis
          </h1>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          marginTop:'-150px'
        }}
      >
        {screenSize > 767 && (
          <img className="hero-img-right" src={toys} alt="" />
        )}
      </div>
    </section>
  );
}

export default PlatformHeroSection;
