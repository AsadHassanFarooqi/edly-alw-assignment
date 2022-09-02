import React from "react";
import { Link } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// Card Css
import "./card.css";

const Card = ({ card, cardIndex }) => {
  const rndInt = cardIndex > 4 ? (Math.round(cardIndex / 5) + 1) : (cardIndex + 1);
  return (
    <div className={`card card-${rndInt}`}>
      <div className="card__icon">
        <FontAwesomeIcon icon={faBoltLightning} />
      </div>
      <h2 className="card__title line__clamp">{card.title}</h2>
      <p className="card__body line__clamp">{card.body}</p>
      <p className="card__apply">
        <Link className="card__link" to={`/post/detail/${card.id}/`}>
          View More <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </p>
    </div>
  );
};

export default Card;
