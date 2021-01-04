import { Component } from 'react';
import PokemonError from '../PokemonEror/PokemonError';
import PokemonData from '../PokemonData/PokemonData';
import PokemonPending from '../PokemonPending/PokemonPending';
import fetchPokemon from '../../servises/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetchPokemon(nextName)
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }))
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }
  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <h1>Введите имя покемона</h1>;
    }
    if (status === 'pending') {
      return <PokemonPending />;
    }
    if (status === 'resolved') {
      return <PokemonData pokemon={pokemon} />;
    }
    if (status === 'rejected') {
      return <PokemonError message={error.message} />;
    }

    // {
    //   error && <p>{error.message}</p>;
    // }
    // {
    //   loading && <h2>Загружаем...</h2>;
    // }
    // {
    //   !pokemonName && <h1>Введите имя покемона</h1>;
    // }
    // {
    //   pokemon && (
    //     <div>
    //       <p>{pokemon.name}</p>
    //       <img
    //         src={pokemon.sprites.other['official-artwork'].front_default}
    //         alt={pokemon.name}
    //         width="240"
    //       />
    //     </div>
    //   );
    // }
  }
}
