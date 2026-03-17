import { Button, Flex, Input } from "@chakra-ui/react"
import { useEffect, useState } from "react"

type MoneyInputProps = {
  active?: boolean
  value?: number | string
}

export default function MoneyInput({ active, value = 142 }: MoneyInputProps) {
  const [inputValue, setInputValue] = useState(String(value))

  useEffect(() => {
    setInputValue(String(value))
  }, [value])

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

      <Input
        textAlign="center"
        fontSize="1.125rem"
        lineHeight="1.75rem"
        letterSpacing="0.02em"
        w="4rem"
        fontWeight="900"
        color="#dbe8f8"
        value={inputValue}
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={(event) => {
          const numericOnly = event.target.value.replace(/\D/g, "")
          setInputValue(numericOnly)
        }}
        px={0}
        bg="transparent"
        border="none"
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ outline: "none", boxShadow: "none" }}
      />

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
