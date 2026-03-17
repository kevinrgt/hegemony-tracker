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
      p={2}
      mt={2}
      gap={3}
    >
      <Button
        size="md"
        minW="52px"
        h="52px"
        borderRadius="md"
        bg="#1d2a40"
        border="1px solid"
        borderColor="#2d3f5f"
        color="#0d7ff2"
        fontWeight="800"
        fontSize="3xl"
        lineHeight="1"
        _hover={{ bg: "#253753" }}
      >
        -
      </Button>

      <Text
        flex="1"
        textAlign="center"
        fontSize="4xl"
        lineHeight="1"
        letterSpacing="0.02em"
        fontWeight="900"
        color="#dbe8f8"
      >
        {value}
      </Text>

      <Button
        size="md"
        minW="52px"
        h="52px"
        borderRadius="md"
        bg={active ? "rgba(13, 127, 242, 0.2)" : "#3a4d6a"}
        border="1px solid"
        borderColor={active ? "rgba(13, 127, 242, 0.45)" : "#556a8a"}
        color={active ? "#0d7ff2" : "#d7e2f0"}
        fontWeight="800"
        fontSize="3xl"
        lineHeight="1"
        _hover={{ bg: active ? "rgba(13, 127, 242, 0.3)" : "#4a5f80" }}
      >
        +
      </Button>
    </Flex>
  )
}
