import { Box, Flex, Text, VStack } from "@chakra-ui/react"

const classItems = [
  { label: "Workers", active: false },
  { label: "Middle Class", active: false },
  { label: "Capitalists", active: true },
  { label: "State", active: false },
]

export default function TopHeader() {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={20}
      bg="rgba(8, 18, 34, 0.95)"
      backdropFilter="blur(8px)"
      borderBottom="1px solid #1f2d43"
      px={4}
      py={3}
    >
      <Flex align="center" justify="space-between">
        {classItems.map((item) => (
          <VStack key={item.label} gap={0.5}>
            <Text
              color={item.active ? "#0d7ff2" : "#64748b"}
              fontSize="xs"
              fontWeight="900"
              textTransform="uppercase"
              letterSpacing="0.05em"
            >
              {item.label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  )
}
