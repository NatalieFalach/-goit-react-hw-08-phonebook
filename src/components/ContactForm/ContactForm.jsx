import css from './ContactForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import PhoneMask from 'components/PhoneMask/PhoneMask';

const validationSchema = yup.object().shape({
  name: yup.string().max(30).required(),
  number: yup.string().phone().required(),
});

const ContactForm = ({ editContact, closeEditModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: editContact ? editContact.name : '',
      number: editContact ? editContact.number : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setError('');
      const name = values.name.toLowerCase().trim();
      const isExists = contacts.some(
        item => item.name.toLocaleLowerCase() === name
      );

      if (isExists) {
        setError(`${name} is alredy in your contact list`);
      } else if (editContact) {
        dispatch(operations.updateContact({ id: editContact.id, values }));
        closeEditModal();
        resetForm();
      } else {
        dispatch(operations.addContact(values));
        resetForm();
      }
    },
  });

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="20vh"
      >
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Enter your contact name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ marginTop: '15px' }}
          />
          <TextField
            InputProps={{
              inputComponent: PhoneMask,
            }}
            fullWidth
            id="number"
            name="number"
            label="Enter phone number"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            sx={{ marginTop: '15px' }}
          />
          {error && <div className={css.errorMessage}>{error}</div>}
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ marginTop: '15px' }}
          >
            {editContact ? 'Edit Contact' : 'Add Contact'}
          </Button>
        </form>
      </Box>
    </>
  );
};

ContactForm.propTypes = {
  editContact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  closeEditModal: PropTypes.func,
};

export default ContactForm;
