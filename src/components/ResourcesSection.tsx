import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react"
import { resourceCards, type ResourceCardData } from "./data"

function ResourceCard({ label, value, accent, icon }: ResourceCardData) {
  const Icon = icon

  return (
    <Box bg="#16202a" borderRadius="lg" p={3} border="1px solid" borderColor={`${accent}66`}>
      <HStack mb={2} gap={2}>
        <Icon size={18} color={accent} />
        <Text fontSize="10px" color={accent} textTransform="uppercase" fontWeight="700" letterSpacing="0.08em">
          {label}
        </Text>
      </HStack>
      <Text fontSize="3xl" fontWeight="900" color="white" mb={3}>
        {value}
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        <Button size="xs" bg={`${accent}20`} color={accent} fontWeight="700" _hover={{ bg: `${accent}35` }}>
          -5
        </Button>
        <Button size="xs" bg={`${accent}20`} color={accent} fontWeight="700" _hover={{ bg: `${accent}35` }}>
          -1
        </Button>
        <Button size="xs" bg={`${accent}30`} color={accent} fontWeight="700" _hover={{ bg: `${accent}45` }}>
          +5
        </Button>
        <Button size="xs" bg={`${accent}30`} color={accent} fontWeight="700" _hover={{ bg: `${accent}45` }}>
          +1
        </Button>
      </Grid>
    </Box>
  )
}

export default function ResourcesSection() {
  return (
    <Box>
      <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" color="#0d7ff2" fontWeight="900" mb={3} px={1}>
        Resources Inventory
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {resourceCards.map((card) => (
          <ResourceCard key={card.label} {...card} />
        ))}
      </Grid>
    </Box>
  )
}
