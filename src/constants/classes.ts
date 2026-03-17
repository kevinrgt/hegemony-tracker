import { Briefcase, Building2, CircleDollarSign, Users, type LucideIcon } from "lucide-react"

type GameClass = {
  name: string
  label: string
  active: boolean
  color: string
  icon: LucideIcon
}

export const classes: GameClass[] = [
  {
    name: "workers",
    label: "Workers",
    active: false,
    color: "#FF1F1F",
    icon: Users,
  },
  {
    name: "middle-class",
    label: "Middle Class",
    active: false,
    color: "#F2D500",
    icon: Briefcase,
  },
  {
    name: "capitalists",
    label: "Capitalists",
    active: true,
    color: "#0E92C5",
    icon: CircleDollarSign,
  },
  {
    name: "state",
    label: "State",
    active: false,
    color: "#A6A6A3",
    icon: Building2,
  },
]