import './Styles.scss'
import angelus from '../assets/team/angelus.jpg'
import bored from "../assets/team/bored.avif"
import azuki from "../assets/team/azuki.avif"

export default function Team() {
  return (
    <div id="squad" className="team">
      <div className='team__container'>
        <div className='team__title'>
          <h1>
            Team
          </h1>
        </div>
        <div className='team__card'>
          <div className='team__card__container'>
            <div className='team__card__container__image'>
              <img src={bored} alt="/" />
            </div>
            <div className='team__card__container__title'>
              <h2>DarkCrypto_eth</h2>
              <hr />
            </div>
            <p className='team__card__container__description'>Product Owner & Développeur</p>
          </div>

          <div className='team__card__container'>
            <div className='team__card__container__image'>
              <img src={angelus} alt="/" />
            </div>
            <div className='team__card__container__title'>
              <h2>Angelus</h2>
              <hr />
            </div>
            <p className='team__card__container__description'>Artiste</p>
          </div>

          <div className='team__card__container'>
            <div className='team__card__container__image'>
              <img src={azuki} alt="/" />
            </div>
            <div className='team__card__container__title'>
              <h2>JohnDoe</h2>
              <hr />
            </div>
            <p className='team__card__container__description'>Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
}
