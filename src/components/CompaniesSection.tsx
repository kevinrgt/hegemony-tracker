import { Badge, Box, Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react"
import { companies } from "./data"

export default function CompaniesSection() {
  return (
    <Box>
      <Flex justify="space-between" align="center" mb={3} px={1}>
        <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" color="#0d7ff2" fontWeight="900">
          Companies
        </Text>
        <Button size="xs" variant="ghost" color="#0d7ff2" textTransform="uppercase" fontWeight="800">
          Build New
        </Button>
      </Flex>

      <VStack gap={3} align="stretch">
        {companies.map((company) => {
          const Icon = company.icon
          return (
            <Box key={company.name} bg="#16202a" borderRadius="lg" p={4} border="1px solid #1f2d43">
              <Flex justify="space-between" align="center" mb={4}>
                <HStack gap={2}>
                  <Icon size={16} color="#94a3b8" />
                  <Text fontWeight="800">{company.name}</Text>
                </HStack>
                <Badge bg="#1d2a40" color="#94a3b8" fontSize="9px" px={2} py={1} borderRadius="md">
                  Service
                </Badge>
              </Flex>

              <VStack align="stretch" gap={4}>
                <Box>
                  <Text fontSize="10px" textTransform="uppercase" color="#64748b" fontWeight="800" mb={2}>
                    Occupancy
                  </Text>
                  <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                    {["MC", "WC", "EMPTY"].map((slot) => (
                      <Button
                        key={slot}
                        w="100%"
                        size="xs"
                        bg={slot === company.occupancy ? "rgba(13,127,242,0.2)" : "#1d2a40"}
                        color={slot === company.occupancy ? "#0d7ff2" : "#c8d5e8"}
                        border="1px solid"
                        borderColor={slot === company.occupancy ? "rgba(13,127,242,0.6)" : "#2d3f5f"}
                        _hover={{ bg: slot === company.occupancy ? "rgba(13,127,242,0.28)" : "#253753" }}
                      >
                        {slot}
                      </Button>
                    ))}
                  </Grid>
                </Box>

                <Box>
                  <Text fontSize="10px" textTransform="uppercase" color="#64748b" fontWeight="800" mb={2}>
                    Salary Level
                  </Text>
                  <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                    {["LOW", "MED", "HIGH"].map((level) => (
                      <Button
                        key={level}
                        w="100%"
                        size="xs"
                        bg={level === company.salary ? "rgba(230,126,34,0.2)" : "#1d2a40"}
                        color={level === company.salary ? "#e67e22" : "#c8d5e8"}
                        border="1px solid"
                        borderColor={level === company.salary ? "rgba(230,126,34,0.5)" : "#2d3f5f"}
                        _hover={{ bg: level === company.salary ? "rgba(230,126,34,0.28)" : "#253753" }}
                      >
                        {level}
                      </Button>
                    ))}
                  </Grid>
                </Box>
              </VStack>
            </Box>
          )
        })}
      </VStack>
    </Box>
  )
}
