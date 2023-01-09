import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Alert,
    AlertIcon
} from '@chakra-ui/react';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [userNotFound, setUserNotFound] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState(false);

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const validate = () => {
        let result = true;
        if ((username === '' || username === null) && (password === '' || password === null)) {
            result = false;
            setLoginCredentials(true);
            setTimeout(() => setLoginCredentials(false), 2000)
        } else if (username === 'ADMIN' && password === 'ADMIN') {
            result = false;
            sessionStorage.setItem('user', 'ADMIN');
            usenavigate('/admin')
        }
        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:3001/users/" + username)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        setUserNotFound(true);
                        setTimeout(() => setUserNotFound(false), 2000)
                    } else {
                        if (resp.dob === password) {
                            sessionStorage.setItem('username', username);
                            usenavigate('/home')
                        } else {
                            setInvalidPassword(true);
                            setTimeout(() => setInvalidPassword(false), 2000)
                        }
                    }
                })
                .catch((err) => console.log(err.message))
        }
    }

    return (
        <>

            {userNotFound
                ? (
                    <Alert status='error'>
                        <AlertIcon />
                        USER NOT FOUND!
                    </Alert>
                ) : null
            }

            {invalidPassword
                ? (
                    <Alert status='error'>
                        <AlertIcon />
                        PLEASE ENTER VALID DOB.
                    </Alert>
                ) : null
            }

            {loginCredentials
                ? (
                    <Alert status='info'>
                        <AlertIcon />
                        PLEASE ENTER LOGIN CREDENTIAL.
                    </Alert>
                ) : null
            }

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={'gray.50'}>
                <Stack
                    m={'5'}
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={'white'}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <FormControl>
                        <FormLabel>REGISTER NUMBER</FormLabel>
                        <Input
                            type="text"
                            placeholder="(EX : 21CSC018)"
                            _placeholder={{ color: 'gray.500' }}
                            value={username}
                            onChange={e => setUser(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>DATE OF BIRTH</FormLabel>
                        <Input
                            type="text"
                            placeholder="(EX : 01-01-2001)"
                            _placeholder={{ color: 'gray.500' }}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={handleSubmit}>
                            SUBMIT
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </>
    );
};

export default Login 
