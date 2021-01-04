export default function ContactsItem({ id, name, number, onDelete }) {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  );
}
