import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import Loading from '../Loading';

import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const MyProfile = ({
  history,
  match: {
    params: { id }
  }
}) => {
  //UI delay for loading component
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //Message to be returned if a user successfully updates information
  const [message, setMessage] = useState('');
  const changeInfo = e => {
    axiosWithAuth()
      .put(`/accounts/${id}`, e.value)
      .then(res => {
        setMessage(res.data.message);
        setTimeout(() => {
          setMessage('');
        }, 3000);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  const deleteAccount = () => {
    var answer = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (answer) {
      axiosWithAuth().delete(`/accounts/${id}`);
      localStorage.removeItem('token');
      history.push('/');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {/* EDIT */}
      <Box
        responsive={true}
        width={{ max: '700px' }}
        margin={{ horizontal: 'auto' }}
        pad={{ horizontal: '20px', vertical: '10px' }}
        alignContent="center"
        border="horizontal"
      >
        <Heading
          level="2"
          margin={{ bottom: '10px', top: '0px' }}
          alignSelf="center"
        >
          Change Your Info
        </Heading>
        <Form onSubmit={changeInfo}>
          <FormField type="text" name="name" label="Name" />
          <FormField type="email" name="email" label="Email" />
          <FormField type="password" name="password" label="Password" />
          <Box direction="row-responsive" align="center" justify="between">
            <Button type="submit" label="Submit" />
            {message && (
              <p style={{ margin: '0px', color: 'green' }}>{message}</p>
            )}
          </Box>
        </Form>
      </Box>
      {/* LOGOUT */}
      <Box
        responsive={true}
        width={{ max: '700px' }}
        margin={{ horizontal: 'auto' }}
        pad={{ horizontal: '20px', vertical: '10px' }}
        alignContent="center"
        border="horizontal"
      >
        <Button type="button" label="Log Out" margin="small" onClick={logOut} />
        <Button
          type="button"
          label="Delete My Account"
          margin="small"
          onClick={deleteAccount}
        />
      </Box>
    </div>
  );
};

export default MyProfile;
