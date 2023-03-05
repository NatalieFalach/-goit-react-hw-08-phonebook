import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form
        className={css.form}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <h2>Welcome to FoneBook</h2>
        <p>
          Don’t have an account? <NavLink to="/register">Sign up</NavLink>
        </p>
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
          Login
        </Button>
      </form>
    </Box>
  );
};
