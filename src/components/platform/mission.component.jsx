import { useEffect, useState } from 'react';
import like from '../../assets/platform/Favourite.svg';
import arrowFlowRight from '../../assets/platform/ellipse-79.svg';
import arrowFlowLeft from '../../assets/platform/ellipse-80.svg';
import { default as any, default as group } from '../../assets/platform/user-group.svg';

function PlatformMissionSection() {
  const [isMobile, setIsMobile] = useState(false);
  const bodySize = window.innerWidth;
  const screenSize = window.innerWidth;
  useEffect(() => {
    if (bodySize <= 768) setIsMobile(true);
  }, [bodySize]);

  return (
    <section className="platform-mission-section">
      <div className="container-mission-card">
        <div className="container-what card-content">
          <span className="container-top-card">
            <div className="container-img-bg-yellow bg-img">
              <img src={group} alt="" />
            </div>
            <h2>O que fazemos?</h2>
          </span>
          <p>
            Conectamos pessoas que encontram animais perdidos ou desejam adotar
            com organizações comprometidas e transparentes (ONG’s), garantindo a
            cada animal a chance de encontrar um lar adequado mantendo a ética e
            proporcionar a alegria e companheirismo às famílias.
          </p>
          <div className="container-img-arrow-flow left-flow">
            {!isMobile && (
              <img className="arrow-flow-right" src={arrowFlowRight} alt="" />
            )}
          </div>
        </div>

        <div className="container-why card-content">
          <span className="container-top-card">
            <div className="container-img-bg-red bg-img">
              {!isMobile && <img src={like} alt="" />}
            </div>
            <h2>Por que fazemos?</h2>
          </span>
          <p>
            Infelizmente, o abandono, perda e a falta de incentivo a adoção
            responsável ainda são problemas significativos. Por isso, combinamos
            a tecnologia com a compaixão pela vida animal para promover a
            conscientização sobre a importância da adoção responsável oferecendo
            uma alternativa confiável com intuito de lutar contra a
            comercialização de animais. Ademais, visamos o combater ao abandono
            e/ou perda de animais de estimação, visto que sabemos como é
            doloroso essa realidade.
          </p>
          <div className="container-img-arrow-flow right-flow">
            {!isMobile && (
              <img className="arrow-flow-left" src={arrowFlowLeft} alt="" />
            )}
          </div>
        </div>

        <div className="container-how card-content">
          <span className="container-top-card">
            <div className="container-img-bg-blue bg-img">
              <img src={any} alt="" />
            </div>
            <h2>Como fazemos?</h2>
          </span>
          <p>
            Buscamos constantemente conhecimento para manter a excelência em
            nossa plataforma, promovendo de forma acessível uma experiência
            agradável a todos os tipos de usuários. Para alcançar esse objetivo,
            adotamos uma abordagem baseada em três pilares fundamentais:
          </p>

          <section className="section-articles">
            <article className="card-article">
              <h2>1. Tecnologia Inovadora </h2>
              <p>
                Utilizamos algoritmos avançados para melhorar a precisão das
                correspondências e adotamos medidas de segurança rigorosas para
                garantir a confiabilidade da plataforma.
              </p>
            </article>
            <article className="card-article">
              <h2>2. Parcerias Estratégicas </h2>
              <p>
                Oferecemos uma lista de ONGs cuidadosamente selecionadas
                garantindo a procedência dos animais para adoção.
              </p>
            </article>
            <article className="card-article">
              <h2>3. Comunidade Engajada </h2>
              <p>
                Construímos uma comunidade engajada e solidária, incentivando a
                troca de informações por meio de recursos interativos, como
                busca filtrada e chat entre os usuários.
              </p>
            </article>
          </section>
        </div>

      </div>
    </section>
  );
}
export default PlatformMissionSection;
