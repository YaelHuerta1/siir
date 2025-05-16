import type { Metadata } from "next"
import CoachDashboard from "@/components/dashboard/coach/coach-dashboard"

export const metadata: Metadata = {
  title: "Dashboard de Entrenador | Equipos Representativos",
  description: "Panel de control para entrenadores y capitanes de equipos representativos",
}

export default function EntrenadorDashboardPage() {
  return <CoachDashboard />
}
