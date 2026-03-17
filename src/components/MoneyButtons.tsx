import { Button, Grid } from "@chakra-ui/react"
import { decrementValues, incrementValues } from "./data"

type MoneyButtonsProps = {
  active?: boolean
}

export default function MoneyButtons({ active }: MoneyButtonsProps) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={2}>
      {decrementValues.map((value) => (
        <Button
          key={value}
          size="sm"
          borderRadius="md"
          bg="#1d2a40"
          border="1px solid"
          borderColor="#2d3f5f"
          color="#c8d5e8"
          fontWeight="700"
          _hover={{ bg: "#253753" }}
        >
          {value}
        </Button>
      ))}
      {incrementValues.map((value) => (
        <Button
          key={value}
          size="sm"
          borderRadius="md"
          bg={active ? "rgba(13, 127, 242, 0.2)" : "#3a4d6a"}
          border="1px solid"
          borderColor={active ? "rgba(13, 127, 242, 0.45)" : "#556a8a"}
          color={active ? "#0d7ff2" : "#d7e2f0"}
          fontWeight="700"
          _hover={{ bg: active ? "rgba(13, 127, 242, 0.3)" : "#4a5f80" }}
        >
          {value}
        </Button>
      ))}
    </Grid>
  )
}
