export const decrementValues = ["-100", "-20", "-5", "-1"]
export const incrementValues = ["+100", "+20", "+5", "+1"]

export type ResourceCardData = {
  label: string
  value: string
  accent: string
  icon: string
}

export const resourceCards: ResourceCardData[] = [
  { label: "Food", value: "12", accent: "#2d8a4e", icon: "restaurant" },
  { label: "Luxury", value: "04", accent: "#0d7ff2", icon: "diamond" },
  { label: "Health", value: "08", accent: "#c83232", icon: "medical_services" },
  { label: "Education", value: "02", accent: "#e67e22", icon: "school" },
]

export type CompanyData = {
  name: string
  icon: string
  salary: "LOW" | "MED" | "HIGH"
  occupancy: "MC" | "WC" | "EMPTY"
}

export const companies: CompanyData[] = [
  {
    name: "City Clinic",
    icon: "local_hospital",
    salary: "MED",
    occupancy: "MC",
  },
  {
    name: "Elite College",
    icon: "history_edu",
    salary: "HIGH",
    occupancy: "EMPTY",
  },
]
