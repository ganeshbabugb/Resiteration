import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login'
import Admin from './components/Admin';
import Home from './components/Home';
import Register from './components/Register';

const App = () => {
    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Register />}></Route>
                        <Route path='/Home' element={<Home />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/admin' element={<Admin />}></Route>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </>
    )
}

export default App
