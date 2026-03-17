import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { Building2, Landmark, LayoutDashboard, Store } from "lucide-react"

const navItems = [
  { label: "Main", active: true, icon: LayoutDashboard },
  { label: "Companies", active: false, icon: Building2 },
  { label: "Market", active: false, icon: Store },
  { label: "Policy", active: false, icon: Landmark },
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
            <item.icon size={16} color={item.active ? "#0d7ff2" : "#64748b"} />
            <Text color={item.active ? "#0d7ff2" : "#64748b"} fontSize="xs" fontWeight="900">
              {item.label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  )
}
