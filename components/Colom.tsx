import { Container, Flex,Text,Center,Card,Heading,CardHeader,CardBody,Stack,StackDivider,Box,Link } from "@chakra-ui/react";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";


export default function Colom() {
    return (
        <Container maxW={"1200px"} py={6}>
            <Flex p= '10px'>
            </Flex>
            <Card>
  <CardHeader>
    <Heading size='md'>Information</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          V1BIZ Token 
        </Heading>
        <Text pt='2' fontSize='sm'>
        TOKEN CONTRACT : 0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be
        </Text>
        <Link href='https://polygonscan.com/token/0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be' 
        isExternal color='#805AD5'
        >
            View V1BIZ Polygonscan  <ExternalLinkIcon mx='2px' />
          </Link>
        <Link href='https://www.sushi.com/swap?chainId=137&token0=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&token1=0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be' 
        isExternal color='#0BC5EA'
        
        >
         BUY V1BIZ Token <ExternalLinkIcon mx='2px' />
          </Link>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          MBIZ Reward
        </Heading>
        <Text pt='2' fontSize='sm'>
        TOKEN CONTRACT : 0xc0961b7658A7DfC79F431CAB5De4d1A4cd1132BB
        </Text>
        <Link href='https://quickswap.exchange/#/swap?currency0=0xc0961b7658A7DfC79F431CAB5De4d1A4cd1132BB&currency1=0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be&swapIndex=2' 
        isExternal color='#0BC5EA'
        
        >
         Sell MBIZ quickswap  <ExternalLinkIcon mx='2px' />
          </Link>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Exchange
        </Heading>
        <Text pt='2' fontSize='sm'>
          10 MBIZ = 1 V1BIZ
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>


        </Container>
    )
}