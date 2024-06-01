import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { handleSubmit, control } = useForm();
 
  const toast = useToast();
  const navigate = useNavigate();
   
  const onSubmit = data => {
    if (data.username && data.password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('email', data.username);
      navigate('/home');
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid username or password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  
  return (
    <Box width="500px" margin="auto" padding="20px" boxShadow="xl" borderRadius="md" marginTop="100px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input type="password" {...field} />}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
