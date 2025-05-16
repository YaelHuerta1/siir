import type { Metadata } from "next"
import StudentDashboard from "@/components/dashboard/student-dashboard"

export const metadata: Metadata = {
  title: "Dashboard de Alumno | Equipos Representativos",
  description: "Panel de control para alumnos en equipos representativos",
}

export default function AlumnoDashboardPage() {
  return <StudentDashboard />
}
