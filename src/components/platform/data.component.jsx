import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import line from '../../assets/platform/line.svg';

function PlatformData() {
  const [userCount, setUserCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);
  const [lostCount, setLostCount] = useState(0);
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    let count = 0;
    let userInterval;
    let partnerInterval;
    let lostInterval;

    const startCounting = () => {
      userInterval = setInterval(() => {
        if (count <= 987) {
          setUserCount(count);
          count++;
        } else {
          clearInterval(userInterval);
        }
      }, 10);

      partnerInterval = setInterval(() => {
        if (count <= 187) {
          setPartnerCount(count);
          count++;
        } else {
          clearInterval(partnerInterval);
        }
      }, 15);

      lostInterval = setInterval(() => {
        if (count <= 153) {
          setLostCount(count);
          count++;
        } else {
          clearInterval(lostInterval);
        }
      }, 20);
    };

    const stopCounting = () => {
      clearInterval(userInterval);
      clearInterval(partnerInterval);
      clearInterval(lostInterval);
    };

    if (sectionInView) {
      startCounting();
    } else {
      stopCounting();
    }

    return () => {
      stopCounting();
    };
  }, [sectionInView]);

  return (
    <div className="container-footer-platform">
      <section className="blue-data-container" ref={sectionRef}>
        <h2>Nossos Dados</h2>
        <div className="container-app-data">
          <span>
            +{userCount}
            <p>Usuários ativos</p>
          </span>
          <img src={line} alt="" />
          <span>
            +{partnerCount}
            <p>ONG's parceiras</p>
          </span>
          <img src={line} alt="" />
          <span>
            +{lostCount}
            <p>Perdidos</p>
          </span>
        </div>
      </section>
    </div>
  );
}

export default PlatformData;
