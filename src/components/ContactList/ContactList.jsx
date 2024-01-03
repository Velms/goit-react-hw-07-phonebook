import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

import { useGetContactsApiQuery } from 'redux/contactsApi';

const getFilterValue = () => {
  return 'yourFilterValue';
};

const ContactList = () => {
  const { data, isLoading } = useGetContactsApiQuery();
  const filter = getFilterValue();

  console.log(data);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  const filterEl = filteredContacts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {
        <ul className={s.list}>
          {!isLoading && data && filterEl.length > 0 ? (
            filterEl.map(({ id, name, phone }) => (
              <ContactItem
                key={id}
                data={filterEl}
                id={id}
                name={name}
                phone={phone}
              />
            ))
          ) : (
            <p className={s.text}>No contacts</p>
          )}
        </ul>
      }
    </>
  );
};

export default ContactList;
