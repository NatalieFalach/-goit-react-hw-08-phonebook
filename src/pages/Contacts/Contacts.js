import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.phonebook}>
        Welcome to the <span className={styles.headerColor}>fone</span>book
      </h2>
      <ContactForm />
      <Filter />
      {isLoading && !error && <div>Loading...</div>}
      <ContactList />
    </div>
  );
}
