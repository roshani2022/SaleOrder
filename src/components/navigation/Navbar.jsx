import React from 'react';
import { Flex,Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
  function logoutHandler(){
    localStorage.removeItem('email');
    localStorage.removeItem('isAuthenticated');
     navigate('/login')
  }
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      height="8 px"
      borderBottom="1px solid lightgray"
      p={4}
    >
      <Text fontSize="lg" fontWeight="bold">Welcome</Text>
      <Button colorScheme="teal" size="sm" mb={1} onClick={logoutHandler}>Logout</Button>
    </Flex>
  );
}

export default Navbar;
