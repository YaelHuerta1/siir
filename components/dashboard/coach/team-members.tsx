"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, UserPlus, CheckCircle, AlertCircle } from "lucide-react"

interface TeamMembersProps {
  teamName: string
}

export default function TeamMembers({ teamName }: TeamMembersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  // Datos de ejemplo para los miembros del equipo
  const teamMembers = [
    {
      id: 1,
      nombre: "Angel Ismael Ortega Espinosa",
      numeroControl: "20140956",
      semestre: "9no",
      carrera: "Ingeniería en Sistemas Computacionales",
      asistencia: 95,
      documentosCompletos: true,
      estado: "activo",
      foto: "/diverse-student-profiles.png",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza Ruiz",
      numeroControl: "20150123",
      semestre: "7mo",
      carrera: "Ingeniería Industrial",
      asistencia: 88,
      documentosCompletos: true,
      estado: "activo",
      foto: "/diverse-student-profiles.png",
    },
    {
      id: 3,
      nombre: "Juan Pérez García",
      numeroControl: "20160789",
      semestre: "5to",
      carrera: "Ingeniería Mecánica",
      asistencia: 75,
      documentosCompletos: false,
      estado: "activo",
      foto: "/diverse-student-profiles-3.png",
    },
    {
      id: 4,
      nombre: "Miguel Ángel Ruiz Sánchez",
      numeroControl: "20170456",
      semestre: "3ro",
      carrera: "Ingeniería Electrónica",
      asistencia: 92,
      documentosCompletos: true,
      estado: "activo",
      foto: "/diverse-students-studying.png",
    },
    {
      id: 5,
      nombre: "Luis Fernando Torres Vega",
      numeroControl: "20180321",
      semestre: "5to",
      carrera: "Ingeniería en Sistemas Computacionales",
      asistencia: 65,
      documentosCompletos: false,
      estado: "inactivo",
      foto: "/diverse-student-profiles.png",
    },
  ]

  // Filtrar miembros según la búsqueda y la pestaña activa
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.numeroControl.includes(searchTerm) ||
      member.carrera.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "todos") return matchesSearch
    if (activeTab === "activos") return matchesSearch && member.estado === "activo"
    if (activeTab === "inactivos") return matchesSearch && member.estado === "inactivo"
    if (activeTab === "documentos") return matchesSearch && !member.documentosCompletos
    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#0a2158]" />
              Miembros del Equipo: {teamName}
            </CardTitle>
            <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
              <UserPlus className="mr-2 h-4 w-4" />
              Añadir Miembro
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar miembro..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Tabs defaultValue="todos" className="w-full md:w-auto" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="activos">Activos</TabsTrigger>
                  <TabsTrigger value="inactivos">Inactivos</TabsTrigger>
                  <TabsTrigger value="documentos">Pendientes</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-4">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={member.foto || "/placeholder.svg"} alt={member.nombre} />
                          <AvatarFallback className="bg-[#0a2158] text-white">
                            {member.nombre
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{member.nombre}</h3>
                            <Badge
                              className={`ml-2 ${
                                member.estado === "activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {member.estado === "activo" ? "Activo" : "Inactivo"}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            <span className="mr-3">#{member.numeroControl}</span>
                            <span className="mr-3">{member.carrera}</span>
                            <span>Semestre: {member.semestre}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md min-w-[80px]">
                          <span className="text-xs text-gray-500">Asistencia</span>
                          <span
                            className={`text-lg font-bold ${
                              member.asistencia >= 80
                                ? "text-green-600"
                                : member.asistencia >= 70
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          >
                            {member.asistencia}%
                          </span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md min-w-[80px]">
                          <span className="text-xs text-gray-500">Documentos</span>
                          {member.documentosCompletos ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
                          )}
                        </div>

                        <Button variant="outline" size="sm" className="ml-2">
                          Ver Detalles
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <p>No se encontraron miembros que coincidan con la búsqueda.</p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <AlertCircle className="text-[#0a2158] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Resumen:</strong> {teamMembers.filter((m) => m.estado === "activo").length} miembros activos,{" "}
                  {teamMembers.filter((m) => !m.documentosCompletos).length} con documentos pendientes.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Asistencia promedio:{" "}
                  {Math.round(teamMembers.reduce((acc, member) => acc + member.asistencia, 0) / teamMembers.length)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
