import { Box, Container, Flex,HStack,Heading,Image, Spacer } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import DarkModeSwitch from "./DarkModeSwitch";
import styles from "../styles/Home.module.css";


export default function Navbar() {
    return (
        <Container maxW={"1200px"} py={6} >
            <Flex as='nav' p='10px' alignItems="center">
                <Heading  bgGradient='linear(to-l, #6B46C1,#00A3C4,#0987A0)'
                            bgClip='text'
                            fontSize='3xl'
                            fontWeight='800' 
                            
                >
                V1BIZ
                </Heading>
                <Spacer />
            <HStack spacing="20px">
                <DarkModeSwitch />
                <ConnectWallet
                btnTitle="Enter App"
                className={styles.connectButton } 
                />
                </HStack>
            </Flex>
        </Container>
    )
}

//direction={"row"} justifyContent={"space-between"}>