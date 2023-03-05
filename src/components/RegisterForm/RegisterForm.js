import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

const validationSchema = yup.object().shape({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form
        className={css.form}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <h2>Create your account</h2>
        <p>
          Already have an account? <NavLink to="/login">Log in</NavLink>
        </p>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginTop: '15px' }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginTop: '15px' }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ marginTop: '15px' }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ marginTop: '15px' }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};
