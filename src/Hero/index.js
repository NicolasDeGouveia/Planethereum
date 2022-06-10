import './Styles.scss';
import video from '../assets/video.mp4';

export default function Hero() {
  return (
    <div id='#home' className="hero">
      <div className="hero__container">
        <video src={video} autoPlay loop muted type='video/mp4' />
        <div className='hero__container__content'>
          <p className="hero__container__content__title">
            Let's build something Big
          </p>
          <p className='hero__container__content__subtitle'>
            When Planet and NFT collide
          </p>
        </div>
        <div className='hero__container__arrows'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
