import { ImSpinner } from 'react-icons/im';
import s from './PokemonPending.module.css';
import waitImage from '../images/76b8579s-960.jpg';

export default function PokemonPending({ pokemonName }) {
  return (
    <div role="alert">
      <div style={s.spinner}>
        <ImSpinner size="32" className={s.icon_spin} />
        Ожидаем...
      </div>
      <img src={waitImage} alt="zhdun" width="240" />
    </div>
  );
}
