import { Button, Flex, Text } from "@chakra-ui/react"

type MoneyInputProps = {
  active?: boolean
  value?: number | string
}

export default function MoneyInput({ active, value = 142 }: MoneyInputProps) {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="#101b2b"
      border="1px solid"
      borderColor="#22324a"
      borderRadius="md"
      p={1}
      mt={0}
      gap={3}
    >
      <Button
        size="md"
        minW="40px"
        h="40px"
        bg="#1d2a40"
        color="#0d7ff2"
        borderRadius="0.125rem"
        fontSize="3xl"
        lineHeight="1"
        _hover={{ bg: "#253753" }}
      >
        -
      </Button>

      <Text
        flex="1"
        textAlign="center"
        fontSize="1.125rem"
        lineHeight="1.75rem"
        letterSpacing="0.02em"
        fontWeight="900"
        color="#dbe8f8"
      >
        {value}
      </Text>

      <Button
        size="md"
        minW="40px"
        h="40px"
        bg="#1d2a40"
        borderRadius="0.125rem"
        color="#0d7ff2"
        fontSize="3xl"
        lineHeight="1"
        _hover={{ bg: active ? "rgba(13, 127, 242, 0.3)" : "#4a5f80" }}
      >
        +
      </Button>
    </Flex>
  )
}
