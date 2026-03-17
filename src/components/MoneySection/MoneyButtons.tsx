import MoneyInput from "./MoneyInput"

type MoneyButtonsProps = {
  active?: boolean
}

export default function MoneyButtons({ active }: MoneyButtonsProps) {
  return <MoneyInput active={active} />
}
