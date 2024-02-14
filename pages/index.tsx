import { NextPage } from "next";
import { Box, Center, Container, Flex, Heading, SimpleGrid, Card, CardHeader,CardBody,Text,CardFooter,Image,Link, } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";
import Colom from "../components/Colom";
import { ExternalLinkIcon } from '@chakra-ui/icons' 


const Home: NextPage = () => {
  const address = useAddress();

  if (!address) {
    return (
    <Container maxW={"900px"} >
     
      <Flex h={"200px"} justifyContent={"center"} alignItems={"center"}>
      <Image
  src='images/ny2.png'
  alt='a kitten'
 
  />
     </Flex> 
     <Center>
     <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
       bgClip='text'
       fontSize='27px'
       fontWeight='600'
       as="samp" 
       justifyContent={"center"}
       alignItems={"center"}
         >                
         Welcome to staking and earn
     </Heading>
     </Center>
     <Box bg= '20px'  w='100%' p={2}>
  <Center>
    <Text fontSize="xl" as="samp" fontWeight='800' color='#0BC5EA'>
    Pleas Connect your wallet
    </Text>
  </Center>
     </Box>
     <Flex h={"100px"} justifyContent={"center"} alignItems={"center"}>
     
     </Flex>

     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> V1BIZ Token</Heading>
    </CardHeader>
    <CardBody>
      <Text>Value your V1BIZ tokens to earn staking rewards.</Text>
    </CardBody>
    <CardFooter>
     
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> MBIZ Token  </Heading>
    </CardHeader>
    <CardBody>
      <Text>is the reward from staking V1BIZ.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Contract ERC-20 </Heading>
    </CardHeader>
    <CardBody>
      <Text> It is a smart contract that pays bets in seconds.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Buy V1BIZ </Heading>
    </CardHeader>
    <CardBody>
      <Text> SushiSwap : 
      </Text>
          <Link href='https://www.sushi.com/swap?chainId=137&token0=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&token1=0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be' isExternal color='#0BC5EA'>
            Swap Token Now <ExternalLinkIcon mx='2px' />
          </Link>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
</SimpleGrid>

<Flex  h={"300px"} justifyContent={"center"} alignItems={"center"}>
<Box boxSize='220px'>
      <Image src='images/Polygon.png' alt='Dan Abramov'/>
      </Box>
      <Box boxSize='220px' p="10px">
     
      <Image src='images/Sushi.png' alt='Dan Abramov'/>
      </Box>
     </Flex>

      </Container>
      
    )
  }
  //ดึงข้อมูลโทเคนและรีวอท
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4}>
      <StakeToken />
      <RewardToken />
      </SimpleGrid>
      <Stake />
      <Colom />
    </Container>
  );
  
};

export default Home;