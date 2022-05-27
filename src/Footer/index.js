import './Styles.scss';
import styled from 'styled-components';
import {FaDiscord, FaTwitter} from 'react-icons/fa'
import opensea from '../assets/opensea.svg';

const Twitter = styled(FaTwitter)`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #fff;
`;
const Discord = styled(FaDiscord)`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #fff;
`;

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__top">
          <div className="footer__container__top__thing">
            <p>SOMETHING TO DO HERE</p>
          </div>
            <div className="footer__container__top__info">
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Discord />  
            </a>
            <a href="/"><img src={opensea} alt="icone opensea" /></a>
            </div>
        </div>
        <div className="footer__container__bottom">
          <p>© 2022 NDG</p>

        </div>
      </div>
    </div>
  );
}
