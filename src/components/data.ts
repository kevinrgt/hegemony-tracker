import {
  Gem,
  GraduationCap,
  HeartPulse,
  type LucideIcon,
  School,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react"

export const decrementValues = ["-100", "-20", "-5", "-1"]
export const incrementValues = ["+100", "+20", "+5", "+1"]

export type ResourceCardData = {
  label: string
  value: string
  accent: string
  icon: LucideIcon
}

export const resourceCards: ResourceCardData[] = [
  { label: "Food", value: "12", accent: "#2d8a4e", icon: UtensilsCrossed },
  { label: "Luxury", value: "04", accent: "#0d7ff2", icon: Gem },
  { label: "Health", value: "08", accent: "#c83232", icon: HeartPulse },
  { label: "Education", value: "02", accent: "#e67e22", icon: GraduationCap },
]

export type CompanyData = {
  name: string
  icon: LucideIcon
  salary: "LOW" | "MED" | "HIGH"
  occupancy: "MC" | "WC" | "EMPTY"
}

export const companies: CompanyData[] = [
  {
    name: "City Clinic",
    icon: Stethoscope,
    salary: "MED",
    occupancy: "MC",
  },
  {
    name: "Elite College",
    icon: School,
    salary: "HIGH",
    occupancy: "EMPTY",
  },
]
