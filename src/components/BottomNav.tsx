import { Box, Flex, Text, VStack } from "@chakra-ui/react"

const navItems = [
  { label: "Main", active: true },
  { label: "Companies", active: false },
  { label: "Market", active: false },
  { label: "Policy", active: false },
]

export default function BottomNav() {
  return (
    <Box
      position="sticky"
      bottom={0}
      zIndex={20}
      bg="rgba(8, 18, 34, 0.95)"
      backdropFilter="blur(8px)"
      borderTop="1px solid #1f2d43"
      px={6}
      pt={2}
      pb={6}
    >
      <Flex align="center" justify="space-between">
        {navItems.map((item) => (
          <VStack key={item.label} gap={0.5}>
            <Text color={item.active ? "#0d7ff2" : "#64748b"} fontSize="xs" fontWeight="900">
              {item.label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  )
}
