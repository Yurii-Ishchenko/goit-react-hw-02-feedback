import ContactsItem from './ContactsItem/ContactsItem';

export default function Contacts({ contacts, onDelete }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </>
  );
}
