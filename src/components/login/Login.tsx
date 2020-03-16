import React, { useState, FunctionComponent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Toaster from '../shared/toaster/Toaster';

const Login: FunctionComponent<any> = ({ onSignInWithProvider }) => {
  const [showToaster, setShowToaster] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const handleToggleToast = () => {
    setShowToaster(!showToaster);
  };

  const handleCloseToast = () => {
    setShowToaster(false);
  };

  const handleSignInWithProvider = (providerName: string) => {
    onSignInWithProvider(providerName);
  };

  return (
    <div className="form-wrapper">
      <Toaster onClose={handleCloseToast} visible={showToaster} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setFormData(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit} className="Form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
              />
              <span className="text-error">{errors.email}</span>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
              <span className="text-error">{errors.password}</span>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me!" />
            </Form.Group>
            <button className="button" disabled={!isValid} type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>

      <div className="form-data-wrapper">
        <pre>{JSON.stringify(formData)}</pre>
        <button className="button" onClick={handleToggleToast}>
          Toggle toast
        </button>
        <button className="button" onClick={() => handleSignInWithProvider('google')}>
          Sign In with Google
        </button>
        <button className="button" onClick={() => handleSignInWithProvider('facebook')}>
          Sign In with Facebook
        </button>
        <button className="button" onClick={() => handleSignInWithProvider('github')}>
          Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
