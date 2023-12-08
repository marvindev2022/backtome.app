import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../Service/api';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const CardStack = () => {
  const [cards, setCards] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  useEffect(() => {
    async function featchApi() {
      const token = localStorage.getItem('token');
      const { data } = await api.get('testimonial/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCards(data);
    }
    featchApi();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div>
      {cards.map((card, index) => (
        <div
          className="container-card"
          key={index}
          style={{
            top: index === visibleIndex ? '100px' : `${10 * index + 100}px`,
            width: index === visibleIndex ? '665px' : `${665 - 20 * index}px`,
            background: index === visibleIndex ? '#1A1B1F' : 'black',
            zIndex: cards.length - Math.abs(index - visibleIndex),
            opacity: index === visibleIndex ? 1 : 0.6,
            marginLeft: index === visibleIndex ? 0 : `${10 * index}px`,
            marginRight: index === visibleIndex ? 0 : `${10 * index}px`,
            transition: 'opacity 1s, width 1s, background 1s',
          }}
        >
          <div className="card">
            <img
              className="img-card-coment"
              src={card.user.photo}
              alt="Imagem do cartão"
            />
            <span className="container-title-card-comment">
              <h2>{card.user.name}</h2>
              <div className="rating  mr-[-50px] flex">
                {Array.from({ length: 5 }, (_, index) => {
                  const starValue = index + 1;
                  let starIcon;
                  if (starValue <= parseInt(card.assessment)) {
                    starIcon = <FaStar color="#FFD700" />;
                  } else if (starValue - 0.5 === parseFloat(card.assessment)) {
                    starIcon = <FaStarHalfAlt color="#FFD700" />;
                  } else {
                    starIcon = <FaRegStar />;
                  }

                  return <span key={index}>{starIcon}</span>;
                })}
              </div>
            </span>
          </div>
          <p
            style={{ color: index === visibleIndex ? 'white' : 'black' }}
            className="container-comment"
          >
            {card.testimony +
              ' foi uma  incrivel  experiencia, o suporte e apoio da equipe.'}{' '}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
