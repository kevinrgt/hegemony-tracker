import { Box, Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react"
import { Gavel } from "lucide-react"

export default function TaxLiabilitySection() {
  return (
    <Box bg="#16202a" borderRadius="lg" border="1px solid rgba(200,50,50,0.25)" overflow="hidden">
      <Flex px={4} py={2} bg="rgba(200,50,50,0.12)" align="center" justify="space-between">
        <Text fontSize="xs" color="#c83232" textTransform="uppercase" letterSpacing="0.2em" fontWeight="900">
          Tax Liability
        </Text>
        <Gavel size={16} color="#c83232" />
      </Flex>

      <VStack align="stretch" gap={4} p={4}>
        <Flex align="center" justify="space-between">
          <Box>
            <Text fontWeight="700">Current Tax Level</Text>
            <Text fontSize="10px" textTransform="uppercase" color="#64748b" fontWeight="800">
              State Policy A
            </Text>
          </Box>
          <HStack bg="#1d2a40" p={1} borderRadius="md">
            <Button size="sm" minW={8} h={8} bg="#2b3a54" _hover={{ bg: "#35486a" }}>
              -
            </Button>
            <Text w={6} textAlign="center" fontWeight="900">
              3
            </Text>
            <Button size="sm" minW={8} h={8} bg="#2b3a54" _hover={{ bg: "#35486a" }}>
              +
            </Button>
          </HStack>
        </Flex>

        <Box h="1px" bg="#24324a" />

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Box textAlign="center">
            <Text fontSize="10px" textTransform="uppercase" color="#64748b" fontWeight="800" mb={1}>
              Corporate Tax
            </Text>
            <Text fontWeight="900" fontSize="2xl">
              $12
            </Text>
          </Box>
          <Box textAlign="center" borderLeft="1px solid #24324a">
            <Text fontSize="10px" textTransform="uppercase" color="#64748b" fontWeight="800" mb={1}>
              Revenue Tax
            </Text>
            <Text fontWeight="900" fontSize="2xl">
              $45
            </Text>
          </Box>
        </Grid>

        <Box bg="rgba(200,50,50,0.08)" border="1px solid rgba(200,50,50,0.24)" p={3} borderRadius="md" textAlign="center">
          <Text fontSize="10px" textTransform="uppercase" color="#94a3b8" fontWeight="800" mb={1}>
            Total Due This Round
          </Text>
          <Text color="#c83232" fontWeight="900" fontSize="3xl">
            $57
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
