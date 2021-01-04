import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import shortId from 'shortid';
// import PokemonForm from './Components/PokemonForm/PokemonForm';
// import PokemonInfo from './Components/PokemonInfo/PokemonInfo';

import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';

import Filter from './Components/Filter/Filter';
// import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
// import Statistics from './Components/Statistics/Statistics';

// import Section from './Components/Section/Section';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // pokemonName: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  DeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  addContact = data => {
    const newContact = {
      id: shortId.generate(),
      name: data.name,
      number: data.number,
    };

    const getContactsName = this.state.contacts.map(contact =>
      contact.name.toLocaleLowerCase(),
    );

    const isAlreadyInContacts = getContactsName.includes(
      data.name.toLocaleLowerCase(),
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts!`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      });
    }
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=19126016-103aa59bb71a26917231b8540&image_type=photo&orientation=horizontal&per_page=12',
  //   )
  //     .then(res => res.json())
  //     .then(console.log);
  // }
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );

    return (
      <div>
        {/* <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} /> */}
        <ToastContainer />

        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={visibleContacts} onDelete={this.DeleteContact} />
      </div>
    );
  }
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleBtnIncrement = e => {
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   }
//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const optionsName = Object.keys(this.state);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionsName}
//             onLeaveFeedback={this.handleBtnIncrement}
//           />
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={
//               this.countPositiveFeedbackPercentage() > 0
//                 ? this.countPositiveFeedbackPercentage()
//                 : 0
//             }
//           />
//         </Section>
//       </>
//     );
//   }
// }
