import {
    Box,
    Card,
    Flex,
    Heading,
    Input,
    SimpleGrid,
    Skeleton,
    Stack,
    Text,
    useToast,Divider,Button, Avatar, Center,
  } from "@chakra-ui/react";
  import {
    Web3Button,
    useAddress,
    useContract,
    useContractRead,
    useTokenBalance,
  } from "@thirdweb-dev/react";
  import {
    REWARD_TOKEN_ADDRESSES,
    STAKE_CONTRACT_ADDRESSES,
    STAKE_TOKEN_ADDRESSES,
  } from "../constants/addresses";
  import React, { useEffect, useState } from "react";
  import { ethers } from "ethers";
  import { Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";



  
  export default function Stake() {
    const address = useAddress();
  
    const { contract: stakeTokenContract } = useContract(
      STAKE_TOKEN_ADDRESSES,
      "token"
    );
    const { contract: rewardTokenContract } = useContract(
      REWARD_TOKEN_ADDRESSES,
      "token"
    );
    const { contract: stakeContract } = useContract(
      STAKE_CONTRACT_ADDRESSES,
      "custom"
    );
  
    const {
      data: stakeInfo,
      refetch: refetchStakeInfo,
      isLoading: loadingStakeInfo,
    } = useContractRead(stakeContract, "getStakeInfo", [address]);
  
    const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
      useTokenBalance(stakeTokenContract, address);
  
    const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
      useTokenBalance(rewardTokenContract, address);
  
    useEffect(() => {
      setInterval(() => {
        refetchStakeInfo();
      }, 10000);
    }, []);
  
    const [stakeAmount, setStakeAmount] = useState<string>("0");
    const [unstakeAmount, setUnstakeAmount] = useState<string>("0");
  
    function resetValue() {
      setStakeAmount("0");
      setUnstakeAmount("0");
    }
  
    const toast = useToast();
  
    return (
      <Card p={2} mt={10} >
        <Heading fontSize='gl' as='b' >Staking V1BIZ Token </Heading>
        <Text fontSize='sm' fontWeight='400' >staking VBIZ and earn MBIZ </Text>
        <Divider />

        <SimpleGrid columns={2}  minChildWidth="300px">
          <Card p={2} m={2} bg="RGBA(255, 255, 255, 0.04)" borderTop= "8px" borderColor=	"#1A202C">
            <Box textAlign={"center"} mb={5}>
            <Icon as={LockIcon} />
            
              <Text fontSize={"xl"} fontWeight={"bold"}>
              Balance Staking :
              </Text>
              <Flex p="10px">
              
              </Flex>
              
              <Skeleton isLoaded={!loadingStakeInfo && !loadingStakeTokenBalance}>
                {stakeInfo && stakeInfo[0] ? (
                  <Text fontSize={"xl"} fontWeight={"bold"} color = '#3182CE'>
                    {ethers.utils.formatEther(stakeInfo[0])}
                    {" $" + stakeTokenBalance?.symbol}
                  </Text>
                ) : (
                  <Text>0</Text>
                )}
              </Skeleton>
            </Box>
            <SimpleGrid columns={2} spacing={4} >
              <Stack spacing={4}>
                <Input
                  type="number"
                  max={stakeTokenBalance?.displayValue}
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                <Web3Button
                  contractAddress={STAKE_CONTRACT_ADDRESSES}
                  action={async (contract) => {
                    await stakeTokenContract?.erc20.setAllowance(
                      STAKE_CONTRACT_ADDRESSES,
                      stakeAmount
                    );
  
                    await contract.call("stake", [
                      ethers.utils.parseEther(stakeAmount),
                    ]);
                    resetValue();
                  }}
                  onSuccess={() =>
                    toast({
                      title: "Stake Successful",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    })
                  } 
                >
                  Stake
                </Web3Button>
              </Stack>
              <Stack spacing={4}>
                <Input 
                  type="number"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                />
                <Web3Button
                  contractAddress={STAKE_CONTRACT_ADDRESSES}
                  action={async (contract) => {
                    await contract.call("withdraw", [
                      ethers.utils.parseEther(unstakeAmount),
                    ]);
                  }}
                  onSuccess={() =>
                    toast({
                      title: "Unstake Successful",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    })
                  }
                >
                  Unstake
                </Web3Button>
              </Stack>
            </SimpleGrid>
          </Card>
          <Card p={2} m={2}  bg="RGBA(255, 255, 255, 0.04)" borderTop= "8px" borderColor=	"#1A202C">
            <Flex
              h={"100%"}
              justifyContent={"space-between"}
              direction={"column"}
              textAlign={"center"}
            >
              <Center>
              <Icon as={UnlockIcon} />
              </Center>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                MBIZ Reward:
              </Text>
              <Skeleton
                isLoaded={!loadingStakeInfo && !loadingRewardTokenBalance}
              >
                {stakeInfo && stakeInfo[0] ? (
                  <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"} color = '#319795'>
                      {ethers.utils.formatEther(stakeInfo[1])}
                    </Text>
                    <Text fontSize='xl' fontWeight='700' >{" $" + rewardTokenBalance?.symbol}</Text>
                  </Box>
                ) : (
                  <Text>0</Text>
                )}
              </Skeleton>
              <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESSES}
                action={async (contract) => {
                  await contract.call("claimRewards");
                  resetValue();
                }}
                onSuccess={() =>
                  toast({
                    title: "Rewards Claimed",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
              >
                Claim
              </Web3Button>
            </Flex>
          </Card>
        </SimpleGrid>
      </Card>
    );
  }
  