import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    SimpleGrid,
    Stack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { PasswordField } from "components";
  
const LoginForm = () => (
  
      <SimpleGrid column={1} spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </SimpleGrid>
  )

  export default LoginForm;
  