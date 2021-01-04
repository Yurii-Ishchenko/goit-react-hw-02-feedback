import { ImSearch } from 'react-icons/im';
import { Component } from 'react';
import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    // console.log(e.currentTarget.value.toLowerCase());
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      //   alert('Введите имя покемона');
      toast.error('Введите имя покемона');

      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.pokemonName}
            name="pokemonName"
            onChange={this.handleNameChange}
          />
          <button type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            Найти
          </button>
        </form>
      </>
    );
  }
}
