import errorImage from '../images/dulya.jpg';

export default function PokemonError({ message }) {
  return (
    <div>
      <img src={errorImage} alt="dulya" width="240" />
      <p>{message}</p>
    </div>
  );
}
