import { Box, Flex, HStack, Text } from "@chakra-ui/react"

export default function TopHeader() {
  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={20}
      px={4}
      py={4}
      align="center"
      justify="space-between"
      bg="rgba(8, 18, 34, 0.95)"
      borderBottom="1px solid"
      borderColor="rgba(13,127,242,0.24)"
      backdropFilter="blur(8px)"
    >
      <HStack gap={3}>
        
      </HStack>
    </Flex>
  )
}
