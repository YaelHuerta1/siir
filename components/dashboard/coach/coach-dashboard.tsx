"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { LogOut, Users, Calendar, FileText, MessageSquare, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import TeamOverview from "./team-overview"
import TeamMembers from "./team-members"
import TeamSchedule from "./team-schedule"
import TeamDocuments from "./team-documents"
import TeamAnnouncements from "./team-announcements"

const coachData = {
  nombre: "Roberto Sánchez Méndez",
  equipo: "Basquetbol varonil",
  rol: "Entrenador principal",
  foto: "/placeholder.svg?key=fbvlr",
  experiencia: "8 años",
  proximoEvento: {
    titulo: "Entrenamiento",
    fecha: "15 de mayo, 2025",
    hora: "16:00 - 18:00",
    lugar: "Gimnasio Principal",
  },
  estadisticas: {
    miembros: 15,
    asistenciaPromedio: 85,
    proximoTorneo: "Regional Universitario 2025",
    victorias: 8,
    derrotas: 2,
  },
}

export default function CoachDashboard() {
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
                        <AvatarImage src={coachData.foto || "/placeholder.svg"} alt="Foto del entrenador" />
                        <AvatarFallback className="text-2xl bg-[#0a2158] text-white">
                          {coachData.nombre
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Badge className="absolute bottom-0 right-0 bg-[#0a2158]">{coachData.rol}</Badge>
                    </div>
                    <h2 className="text-xl font-bold text-center">{coachData.nombre}</h2>
                    <p className="text-gray-500 text-center">{coachData.equipo}</p>
                    <p className="text-sm text-gray-400 mt-1">Experiencia: {coachData.experiencia}</p>

                    <div className="w-full mt-6 grid grid-cols-2 gap-2 text-center">
                      <div className="bg-blue-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Victorias</p>
                        <p className="text-xl font-bold text-[#0a2158]">{coachData.estadisticas.victorias}</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Derrotas</p>
                        <p className="text-xl font-bold text-[#0a2158]">{coachData.estadisticas.derrotas}</p>
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
                          <BarChart className="mr-2 h-4 w-4" />
                          Resumen del Equipo
                        </button>
                        <button
                          onClick={() => setActiveTab("miembros")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "miembros"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Miembros del Equipo
                        </button>
                        <button
                          onClick={() => setActiveTab("horarios")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "horarios"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Horarios y Eventos
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
                          Documentos
                        </button>
                        <button
                          onClick={() => setActiveTab("anuncios")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "anuncios"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Anuncios
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
                    <TeamOverview coachData={coachData} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="miembros" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamMembers teamName={coachData.equipo} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="horarios" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamSchedule teamName={coachData.equipo} isCoach={true} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="documentos" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamDocuments teamName={coachData.equipo} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="anuncios" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamAnnouncements teamName={coachData.equipo} />
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
