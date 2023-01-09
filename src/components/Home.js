import { Button, Center, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
    TableContainer,
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [data, setData] = useState([])
    const [userLogin, setUserLogin] = useState(true)
    const usenavigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username')
        if (username === '' || username === null) usenavigate('/login')
        setTimeout(() => setUserLogin(false), 2000)
        getData()
    }, [usenavigate]);

    const getData = () => {
        fetch("http://localhost:3001/users/" + sessionStorage.getItem('username'))
            .then((res) => res.json())
            .then((resp) => setData(resp))
            .catch((err) => console.log(err.message))
    }

    return (
        <>

            {userLogin
                ? (
                    <Alert status='success'>
                        <AlertIcon />
                        LOGIN SUCCESS!
                    </Alert>
                ) : null
            }

            <TableContainer>
                <Table
                    variant="striped"
                    size="md"
                    maxWidth="60%"
                    mx="auto"
                >
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>DOB</Th>
                            <Th>Email</Th>
                            <Th>Course</Th>
                            <Th>Department</Th>
                            <Th>Course Selected</Th>
                            <Th>Whatsapp</Th>
                            <Th>Phone</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        <Tr>
                            <Td>{data.id}</Td>
                            <Td>{data.name}</Td>
                            <Td>{data.dob}</Td>
                            <Td>{data.email}</Td>
                            <Td>{data.course}</Td>
                            <Td>{data.department}</Td>
                            <Td>{data.courseOffered}</Td>
                            <Td>{data.whatsapp}</Td>
                            <Td>{data.phone}</Td>
                        </Tr>

                    </Tbody>
                </Table>

                <Center my={4}>
                    <Button bg={'blue.400'} color={'white'}onClick={() => usenavigate('/login')}>
                        LOG OUT
                    </Button>
                </Center>

            </TableContainer>
        </>
    );
};

export default Home 
