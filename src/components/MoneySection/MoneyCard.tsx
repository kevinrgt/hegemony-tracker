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
    <Box bg="#16202a" borderRadius="lg" overflow="hidden" border={`1px solid ${accentColor}`} p={4}>
      <Flex justify="space-between" align="start" mb={6}>
        <Text fontSize="0.75rem" lineHeight="1rem" color={accentColor} textTransform="uppercase" letterSpacing="0.16em" fontWeight="800">
          {title}
        </Text>
        <Icon size={18} color={accentColor} style={{ opacity: 0.8 }} />
      </Flex>

      <HStack justifyContent="space-between"> 
        <Text fontSize="2.25rem" lineHeight="2.5rem" fontWeight="900" textAlign="center">
          {value}
        </Text>
        <MoneyInput value={value} />
      </HStack>
    </Box>
  )
}
