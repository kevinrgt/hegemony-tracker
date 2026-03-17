import { Box, Flex, Text } from "@chakra-ui/react"
import MoneyButtons from "./MoneyButtons"

type MoneyCardProps = {
  title: string
  value: string
  icon: string
  accentColor: string
  activeButtons?: boolean
}

export default function MoneyCard({ title, value, icon, accentColor, activeButtons }: MoneyCardProps) {
  return (
    <Box bg="#16202a" borderLeft={`4px solid ${accentColor}`} borderRadius="lg" p={4}>
      <Flex justify="space-between" align="start" mb={2}>
        <Text fontSize="xs" color={accentColor} textTransform="uppercase" letterSpacing="0.16em" fontWeight="800">
          {title}
        </Text>
        <Text color={accentColor} opacity={0.7} fontWeight="700">
          {icon}
        </Text>
      </Flex>
      <Text fontSize="5xl" fontWeight="900" textAlign="center" py={4}>
        {value}
      </Text>
      <MoneyButtons active={activeButtons} />
    </Box>
  )
}
