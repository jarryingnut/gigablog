import React from 'react'
import PropTypes from 'prop-types'
import {useFormik} from 'formik'
import { BiUserCircle } from 'react-icons/bi'
import {FcLock} from 'react-icons/fc'
import {IoIosPersonAdd} from 'react-icons/io'
import UseAnimations from "react-useanimations";
import satisfied from 'react-useanimations/lib/loading2'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import {
	Input,
	Stack,
	InputGroup,
	InputLeftElement,
	Button,
	FormControl,
	Text,
  Center
} from '@chakra-ui/react';

const RegisterForm = ({handleRegister}) => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      name: ''
    },
    onSubmit: (values, {resetForm}) => {
      if (values.password !== values.confirmPassword) {
        dispatch(
            setNotification({ error: 'Passwords do not watch' }, 5),
          )
          return
      }
      try {
        handleRegister(values.username, values.password, values.name)
        resetForm()
      } catch (err) {
        console.error(err)
      }
    },
  });



  return (
    <form onSubmit={formik.handleSubmit}>
    <Stack spacing={3} bg="gray.200"
    w='350px'
    p={5}
    boxShadow='m'
    rounded='lg'>
      <Center>
				<UseAnimations animation={satisfied}  size={50}  strokeColor="gray"/>
				</Center>
      <FormControl isRequired >
      <InputGroup>
          <InputLeftElement children={<IoIosPersonAdd/>} />
          <Input 
            type='text' name='name' 
            placeholder='Name' 
            area-label='name' 
            onChange={formik.handleChange} 
            value={formik.values.name}
            bg='white'
            />
        </InputGroup>
      </FormControl>
      <FormControl isRequired >
        <InputGroup>
          <InputLeftElement children={<BiUserCircle/>} />
          <Input 
            type='text' name='username' 
            placeholder='username' 
            area-label='username' 
            onChange={formik.handleChange} 
            value={formik.values.username}
            bg='white'
            />
        </InputGroup>
      </FormControl>
      <FormControl isRequired >
        <InputGroup>
          <InputLeftElement children={<FcLock/>} />
          <Input
            type='password'
            placeholder='Password'
            aria-label='Password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            bg='white'
          />
        </InputGroup>
      </FormControl>
        <FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<FcLock />} />
						<Input
							type='password'
							name='confirmPassword'
							placeholder='confirm password'
							aria-label='confirmPassword'
              onChange={formik.handleChange} 
              value={formik.values.confirmPassword}
							bg='white'
						/>
					</InputGroup>
				</FormControl>
      <Button
        type='submit'
        boxShadow='sm'
        _hover={{ boxShadow: 'md' }}
        _active={{ boxShadow: 'lg' }}
        width="100"
        >
        Sign up
      </Button>
      <Text fontSize="sm" textAlign="center" color="gray.400">Created by Jarryingnut 👨‍💻</Text>

      
      
    </Stack>
  </form>
  )
  
}

export default RegisterForm
RegisterForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}
