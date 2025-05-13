"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { LogOut, Calendar, Users, FileText, UserCog } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import StudentInfoCard from "./student-info-card"
import TeamSchedule from "./team-schedule"
import DocumentUpload from "./document-upload"
import PersonalDataForm from "./personal-data-form"

const studentData = {
  nombre: "Angel Ismael Ortega Espinosa",
  carrera: "Ingeniería en Sistemas Computacionales",
  grupoRepresentativo: "Basquetbol varonil",
  semestre: "9no",
  foto: "/diverse-student-profiles.png",
  asistencia: 85,
  proximoEvento: {
    titulo: "Entrenamiento",
    fecha: "15 de mayo, 2025",
    hora: "16:00 - 18:00",
    lugar: "Gimnasio Principal",
  },
}

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("perfil")
  const [showEditForm, setShowEditForm] = useState(false)

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
              className="flex items-center gap-2 text-[#0a2158] border-[#0a2158]"
              onClick={() => setShowEditForm(true)}
            >
              <UserCog size={16} />
              Editar Datos Personales
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
                        <AvatarImage src={studentData.foto || "/placeholder.svg"} alt="Foto del alumno" />
                        <AvatarFallback className="text-2xl bg-[#0a2158] text-white">
                          {studentData.nombre
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Badge className="absolute bottom-0 right-0 bg-[#0a2158]">
                        {studentData.grupoRepresentativo}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-center">{studentData.nombre}</h2>
                    <p className="text-gray-500 text-center">{studentData.carrera}</p>
                    <p className="text-sm text-gray-400 mt-1">Semestre: {studentData.semestre}</p>

                    <div className="w-full mt-6">
                      <p className="text-sm font-medium mb-1 flex justify-between">
                        <span>Asistencia</span>
                        <span>{studentData.asistencia}%</span>
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-[#0a2158] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${studentData.asistencia}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
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
                          onClick={() => setActiveTab("perfil")}
                          className={`flex items-center w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "perfil"
                              ? "bg-[#0a2158] text-white"
                              : "bg-transparent text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Perfil
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
                      </div>
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} className="w-full">
                <TabsContent value="perfil" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <StudentInfoCard studentData={studentData} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="horarios" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamSchedule teamName={studentData.grupoRepresentativo} />
                  </motion.div>
                </TabsContent>

                <TabsContent value="documentos" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DocumentUpload />
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </main>

      {showEditForm && <PersonalDataForm onClose={() => setShowEditForm(false)} />}
    </div>
  )
}
