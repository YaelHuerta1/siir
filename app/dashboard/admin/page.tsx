import type { Metadata } from "next"
import AdminDashboard from "@/components/dashboard/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Dashboard de Administrador | Equipos Representativos",
  description: "Panel de control para administradores de actividades extraescolares",
}

export default function AdminDashboardPage() {
  return <AdminDashboard />
}
