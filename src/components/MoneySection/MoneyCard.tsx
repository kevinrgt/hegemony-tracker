import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { type LucideIcon } from "lucide-react"
import MoneyInput from "./MoneyInput"

type MoneyCardProps = {
  title: string
  value: string
  icon: LucideIcon
  accentColor: string
}

export default function MoneyCard({ title, value, icon, accentColor }: MoneyCardProps) {
  const Icon = icon

  return (
    <Box bg="#16202a" borderLeft={`4px solid ${accentColor}`} borderRadius="lg" p={4}>
      <Flex justify="space-between" align="start" mb={2}>
        <Text fontSize="xs" color={accentColor} textTransform="uppercase" letterSpacing="0.16em" fontWeight="800">
          {title}
        </Text>
        <Icon size={18} color={accentColor} style={{ opacity: 0.8 }} />
      </Flex>

    <HStack> 
      <Text fontSize="2.25rem" lineHeight="2.5rem" fontWeight="900" textAlign="center" py={4}>
        {value}
      </Text>
      <MoneyInput value={value} />
      </HStack>
    </Box>
  )
}
