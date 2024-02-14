import { Card, Flex, Heading, SimpleGrid, Skeleton, Stack, Text,Divider } from "@chakra-ui/react";
import {  useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function StakeToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(STAKE_TOKEN_ADDRESSES);
    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);

    return (

        <Card p={8} borderTop= "8px" borderColor="#B83280">
            <Stack>
                <Heading size='sm' as='h3'>V1BIZ Balance</Heading>
                <Divider />
                <Skeleton h={6} w={"80%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text as="h3" fontSize={"sm"} fontWeight={"bold"} >${tokenBalance?.symbol}</Text>
                </Skeleton>
                
                <Skeleton h={4} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize='sm' fontWeight='500' >{tokenBalance?.displayValue} $</Text>  
                </Skeleton>
                
                <Flex h={"20px"}>
                </Flex>
                <Divider />
            </Stack>
        </Card>
    )
}