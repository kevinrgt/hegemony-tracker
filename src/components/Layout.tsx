import { Box, VStack } from "@chakra-ui/react"
import BottomNav from "./BottomNav"
import CompaniesSection from "./CompaniesSection"
import MoneySection from "./MoneySection/MoneySection"
import ResourcesSection from "./ResourcesSection"
import TaxLiabilitySection from "./TaxLiabilitySection"
import TopHeader from "./TopHeader"

export default function Layout() {
  return (
    <Box
      w="100%"
      minH="100dvh"
      display="flex"
      justifyContent="center"
      bg="radial-gradient(circle at 20% 0%,#0b1f35 0%, #081627 50%, #061120 100%)"
    >
      <Box
        w="100%"
        maxW="430px"
        minH="100dvh"
        mx="auto"
        boxShadow={{ base: "none", md: "0 0 0 1px rgba(35,58,94,0.5), 0 30px 80px rgba(0,0,0,0.45)" }}
        overflow="hidden"
        boxSizing="border-box"
        color="#eaf2fb"
        bg="linear-gradient(180deg, rgba(14, 38, 64, 0.7) 0%, rgba(7, 20, 36, 0.85) 100%)"
      >
        <TopHeader />

        <Box px={4} py={5} pb={28}>
          <VStack gap={6} align="stretch">
            <MoneySection />
            <ResourcesSection />
            <CompaniesSection />
            <TaxLiabilitySection />
          </VStack>
        </Box>
        <BottomNav />
      </Box>
    </Box>
  )
}