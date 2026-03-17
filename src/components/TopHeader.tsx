import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { classes } from "../constants/classes"

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
        {classes.map((item) => (
          <VStack key={item.label} gap={0.5} flex="1" minW={0}>
            <item.icon size={16} color={item.active ? "#0d7ff2" : "#64748b"} />
            <Text
              color={item.active ? "#0d7ff2" : "#64748b"}
              fontSize="10px"
              fontWeight="900"
              textTransform="uppercase"
              letterSpacing="0.05em"
              textAlign="center"
              whiteSpace="nowrap"
            >
              {item.label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  )
}
