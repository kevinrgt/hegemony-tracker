import { Button, VStack } from "@chakra-ui/react"
import { Landmark, Wallet } from "lucide-react"
import MoneyCard from "./MoneyCard"

export default function MoneySection() {
  return (
    <VStack gap={4} align="stretch">
      <MoneyCard title="Revenue" value="$142" icon={Wallet} accentColor="#0d7ff2" />

      <Button
        h="56px"
        bg="#0d7ff2"
        color="white"
        borderRadius="lg"
        fontWeight="900"
        textTransform="uppercase"
        letterSpacing="-0.01em"
        _hover={{ bg: "#1c8bf8" }}
      >
        Transfer Revenue To Capital
      </Button>

      <MoneyCard title="Capital" value="$580" icon={Landmark} accentColor="#94a3b8" />
    </VStack>
  )
}
