"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { LogOut, LayoutDashboard, Users, Trophy, Calendar, FileText, Settings, Bell, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import AdminOverview from "./admin-overview"
import TeamsManagement from "./teams-management"
import CoachesManagement from "./coaches-management"
import EventsCalendar from "./events-calendar"
import DocumentsManagement from "./documents-management"
import SettingsPanel from "./settings-panel"
import NotificationsPanel from "./notifications-panel"

const adminData = {
  nombre: "María Fernanda Rodríguez",
  cargo: "Jefa de Actividades Extraescolares",
  departamento: "Departamento de Actividades Extraescolares",
  foto: "/admin-portrait.png",
  notificaciones: 5,
  estadisticas: {
    equipos: 12,
    estudiantes: 187,
    entrenadores: 15,
    torneos: 8,
  },
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("resumen")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo-tecnm.png"
              alt="Tecnológico Nacional de México"
              width={180}
              height={50}
              className="h-auto"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative" onClick={() => setActiveTab("notificaciones")}>
              <Bell className="h-5 w-5" />
              {adminData.notificaciones > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {adminData.notificaciones}
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0a2158]"
              onClick={() => console.log("Cerrar sesión")}
            >
              <LogOut size={16} />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Profile Card */}
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                        <AvatarImage src={adminData.foto || "/placeholder.svg"} alt="Foto del administrador" />
                        <AvatarFallback className="text-2xl bg-[#0a2158] text-white">
                          {adminData.nombre
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Badge className="absolute bottom-0 right-0 bg-[#0a2158]">Admin</Badge>
                    </div>
                    <h2 className="text-xl font-bold text-center">{adminData.nombre}</h2>
                    <p className="text-gray-500 text-center">{adminData.cargo}</p>
                    <p className="text-sm text-gray-400 mt-1">{adminData.departamento}</p>

                    <div className="w-full mt-6 grid grid-cols-2 gap-2 text-center">
                      <div className="bg-blue-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Equipos</p>
                        <p className="text-xl font-bold text-[#0a2158]">{adminData.estadisticas.equipos}</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Estudiantes</p>
                        <p className="text-xl font-bold text-[#0a2158]">{adminData.estadisticas.estudiantes}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation */}
                <Card>
                  <CardContent className="p-4">
                    <nav className="space-y-1">
                      <div className="flex flex-col w-full h-auto space-y-1">
                        <button
                          onClick={() => setActiveTab("resumen")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "resumen"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Resumen General
                        </button>
                        <button
                          onClick={() => setActiveTab("equipos")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "equipos"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Trophy className="mr-2 h-4 w-4" />
                          Equipos Representativos
                        </button>
                        <button
                          onClick={() => setActiveTab("entrenadores")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "entrenadores"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Entrenadores
                        </button>
                        <button
                          onClick={() => setActiveTab("calendario")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "calendario"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Calendario de Eventos
                        </button>
                        <button
                          onClick={() => setActiveTab("documentos")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "documentos"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Documentación
                        </button>
                        <button
                          onClick={() => setActiveTab("reportes")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "reportes"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <BarChart className="mr-2 h-4 w-4" />
                          Reportes y Estadísticas
                        </button>
                        <button
                          onClick={() => setActiveTab("configuracion")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "configuracion"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          Configuración
                        </button>
                      </div>
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} className="w-full">
                <TabsContent value="resumen" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AdminOverview adminData={adminData} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="equipos" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamsManagement />
                  </motion.div>
                </TabsContent>

                <TabsContent value="entrenadores" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CoachesManagement />
                  </motion.div>
                </TabsContent>

                <TabsContent value="calendario" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <EventsCalendar />
                  </motion.div>
                </TabsContent>

                <TabsContent value="documentos" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DocumentsManagement />
                  </motion.div>
                </TabsContent>

                <TabsContent value="reportes" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AdminOverview adminData={adminData} showDetailedReports={true} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="configuracion" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <SettingsPanel />
                  </motion.div>
                </TabsContent>

                <TabsContent value="notificaciones" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <NotificationsPanel />
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
