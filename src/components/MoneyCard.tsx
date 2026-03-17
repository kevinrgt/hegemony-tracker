import { Box, Flex, Text } from "@chakra-ui/react"
import { type LucideIcon } from "lucide-react"
import MoneyButtons from "./MoneyButtons"

type MoneyCardProps = {
  title: string
  value: string
  icon: LucideIcon
  accentColor: string
  activeButtons?: boolean
}

export default function MoneyCard({ title, value, icon, accentColor, activeButtons }: MoneyCardProps) {
  const Icon = icon

  return (
    <Box bg="#16202a" borderLeft={`4px solid ${accentColor}`} borderRadius="lg" p={4}>
      <Flex justify="space-between" align="start" mb={2}>
        <Text fontSize="xs" color={accentColor} textTransform="uppercase" letterSpacing="0.16em" fontWeight="800">
          {title}
        </Text>
        <Icon size={18} color={accentColor} style={{ opacity: 0.8 }} />
      </Flex>
      <Text fontSize="5xl" fontWeight="900" textAlign="center" py={4}>
        {value}
      </Text>
      <MoneyButtons active={activeButtons} />
    </Box>
  )
}
