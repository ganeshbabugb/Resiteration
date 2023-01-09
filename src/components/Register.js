import React from 'react';
import {
    Box,
    Button,
    Heading,
    FormControl,
    Input,
    FormLabel,
    Select,
    RadioGroup,
    Radio,
    Center
} from '@chakra-ui/react';

import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDOB] = useState("")
    const [course, setCourse] = useState("")
    const [department, setDepartment] = useState("")
    const [courseOffered, setCourseOffered] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate();

    const validate = () => {
        let result = true;
        if (id === null || id === '') {
            result = false;
        }
        if (name === null || name === '') {
            result = false;
        }
        if (email === null || email === '') {
            result = false;
        }
        if (dob === null || dob === '') {
            result = false;
        }
        if (course === null || course === '') {
            result = false;
        }
        if (department === null || department === '') {
            result = false;
        }
        if (courseOffered === null || courseOffered === '') {
            result = false;
        }
        if (whatsapp === null || whatsapp === '') {
            result = false;
        }
        if (phone === null || phone === '') {
            result = false;
        }
        return result;
    }

    const createUser = (e) => {
        e.preventDefault()
            if (validate()) {
            let student = { id, email, dob, department, course, courseOffered, whatsapp, phone }
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student)
            }).then((res) => {
                console.log(res)
                navigate('/login');
                console.log("USER CREATED")
            }).catch((err) => {
                console.log(err.message)
            });
        }
        else {
            console.log("Enter login credientials")
        }
    }

    const aidedDept = [
        "B.A.History",
        "B.A.English Literature",
        "B.Sc.Mathematics",
        "B.Sc.Physics",
        "B.Sc.Chemistry",
        "B.Sc.Botany",
        "B.Sc.Zoology",
        "B.Sc.Computer Science",
        "B.Sc.Nutrition & Dietetics",
        "B.Com.Commerce"
    ]

    const unaidedDept = [
        "B.A.Tamil Literature",
        "B.A.English Literature ",
        "B.Sc.Mathematics",
        "B.Sc.Physics",
        "B.Sc.Biochemistry",
        "B.C.A",
        "B.Sc.Computer Science",
        "B.Sc.Information Technology",
        "B.Sc Computer Technology",
        "B.Sc.Computer Science with Data Analytics",
        "B.Sc.Costume Design and Fashion",
        "B.Com",
        "B.Com.Corporate Secretaryship",
        "B.Com.Cooperation",
        "B.Com.Commerce with Computer Applications",
        "B.Com.E-Commerce",
        "B.B.A.(CA)",
        "B.Com.Professional Accounting",
        "B.Com.with Accounting & Finance",
        "B.Com.(Banking & Insurance)",
        "B.Sc.Geography"
    ]

    const adidedCourse = [
        "English - Corporate English",
        "History - History for Competitive Examinations",
        "Mathematics - Mathematics for Data Science",
        "Physics - Physics in Everyday Life",
        "Chemistry - Water Management an Environmental Perspective",
        "Botany - Ornamental Horticulture",
        "Zoology - Wild Life Diversity and Conservation",
        "Nutrition And Dietetics - Basic Cookery",
        "Computer Science - Data Processing through Excel Lab",
        "Commerce - Fundamentals of Accounting"
    ]

    const unadidedCourse = [
        "Tamil - Pechukkalai",
        "English - Corporate English",
        "Mathematics - Mathematics for Data Science",
        "Physics - Physics in Everyday Life",
        "Computer Science - Data Processing through Excel Lab",
        "Computer Applications - Data Processing through Excel Lab",
        "Information Technology - Data Processing through Excel Lab",
        "Computer Technology - Data Processing through Excel Lab",
        "Computer Science with Data Analytics - Data Processing through Excel Lab",
        "Commerce - Fundamentals of Accounting",
        "Commerce [CA] - Occupational Health and Safety Measures",
        "Commerce [E-Commerce] - Brand Management",
        "Commerce [CS] - Modern Retail Techniques",
        "Commerce [PA] - Cyber Law",
        "Commerce [A&F] - Production Management",
        "Commerce [B&I] - Banking Practice",
        "Commerce [Cooperation] - Dynamics of Cooperation",
        "Business Administration [CA] - Soft Skill Development",
        "Biochemistry - Health & Hygiene",
        "Costume Design & Fashion - Fashion Concepts",
        "Geography - Climate Change and Global Warming"
    ]

    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={700}
                p={6}
                m="10px auto"
                as="form">
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Online NME Registeration Form
                </Heading>

                <FormControl mr="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Name :
                    </FormLabel>
                    <Input type='text' value={name} name='name' onChange={e => setName(e.target.value)} />
                </FormControl>

                <FormControl mr="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Register Number :
                    </FormLabel>
                    <Input type='text' value={id} name='id' onChange={e => setId(e.target.value)} />
                </FormControl>

                <FormControl mr="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Email :
                    </FormLabel>
                    <Input type='text' value={email} name='email' onChange={e => setEmail(e.target.value)}></Input>
                </FormControl>

                <FormControl mr="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        DOB :
                    </FormLabel>
                    <Input value={dob} name='dob' onChange={e => setDOB(e.target.value)}></Input>
                </FormControl>

                <Box my="2%">
                    <RadioGroup onChange={setCourse} value={course}>
                        <Center>
                            <Radio colorScheme='green' value='aided' >
                                Aided
                            </Radio>
                            <Radio colorScheme='green' value='unaided' mx={10}>
                                Unaided
                            </Radio>
                        </Center>
                    </RadioGroup>
                </Box>

                <FormControl mt="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Department :
                    </FormLabel>
                    <Select
                        placeholder="Select option"
                        shadow="sm"
                        size="md"
                        w="full"
                        rounded="md"
                        value={department}
                        onChange={e => setDepartment(e.target.value)}>

                        {course === "aided" && aidedDept.map((item) => (
                            <option key={item}>{item}</option>
                        ))}

                        {course === "unaided" && unaidedDept.map((item) => (
                            <option key={item}>{item}</option>
                        ))}

                    </Select>
                </FormControl>

                <FormControl mt="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Name of the course offered :
                    </FormLabel>
                    <Select
                        placeholder="Select option"
                        shadow="sm"
                        size="md"
                        w="full"
                        rounded="md"
                        value={courseOffered}
                        onChange={e => setCourseOffered(e.target.value)}>

                        {course === "aided" && adidedCourse.map((item) => (
                            <option key={item}>{item}</option>
                        ))}

                        {course === "unaided" && unadidedCourse.map((item) => (
                            <option key={item}>{item}</option>
                        ))}

                    </Select>
                </FormControl>

                <FormControl mt="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Phone Number :
                    </FormLabel>
                    <Input type='tel' value={phone} name='phone' onChange={e => setPhone(e.target.value)}></Input>
                </FormControl>

                <FormControl mt="2%">
                    <FormLabel fontWeight={'normal'} mt="2%">
                        Whatsapp Number :
                    </FormLabel>
                    <Input type='tel' value={whatsapp} name='whatsapp' onChange={e => setWhatsapp(e.target.value)} ></Input>

                </FormControl>

                <Center mt="2%">
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        onClick={createUser}>
                        SUBMIT
                    </Button>
                </Center>
            </Box>
        </>
    );
};

export default Register 
