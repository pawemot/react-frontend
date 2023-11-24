 // src/components/LoginPage.js
 import React, { useState } from 'react';
 import {
   Box,
   FormControl,
   FormLabel,
   Input,
   Button,
   Heading,
   VStack,
 } from '@chakra-ui/react';
import WithSubnavigation from '../components/Navigation';
import { useToast } from '@chakra-ui/react'
import { useNavigate, useNavigation } from 'react-router-dom';
import httpClient from '../utils/httpClient';
 const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const toast = useToast()
   const navigation = useNavigate()
   
   const handleLogin = async () => {
    const {data} = await httpClient.post("/login",{email, password})
     console.log('Logging in with:', { email, password });

     toast({
        title: data.message,
        status: data["ok"] ? 'success' : 'error',
        duration:4000,
        isClosable: true,
     })
     if (data["ok"]){
        navigation("/")
     }


   };
   

 
   return (
    <div>
     <WithSubnavigation/>
     <VStack marginTop={20} spacing={8} align="center">
       <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" width="400px">
         <Heading mb={4}>Login</Heading>
         <FormControl>
           <FormLabel>Email</FormLabel>
           <Input
             type="text"
             placeholder="Podaj adres email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </FormControl>
         <FormControl mt={4}>
           <FormLabel>Password</FormLabel>
           <Input
             type="password"
             placeholder="Enter your password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </FormControl>
         <Button
           colorScheme="teal"
           mt={4}
           onClick={handleLogin}
           isFullWidth
         >
           Login
         </Button>
       </Box>
     </VStack>
     </div>
   );
 };
 
 export default LoginPage;
  