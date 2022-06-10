import './Styles.scss';
import road from '../assets/map.png'

export default function Roadmap() {
  return (
    <div id="map" className="road">
      <p>ROADMAP</p>
      <div className='road__image'>
        <img src={road} alt="/" />
      </div>
    </div>
  );
}
