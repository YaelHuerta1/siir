"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, UserPlus, MoreHorizontal, Mail, Phone } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CoachesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  // Datos de ejemplo para los entrenadores
  const coaches = [
    {
      id: 1,
      nombre: "Roberto Sánchez",
      equipo: "Basquetbol Varonil",
      experiencia: "8 años",
      especialidad: "Deportivo",
      estado: "activo",
      email: "roberto.sanchez@tecnm.mx",
      telefono: "442-123-4567",
      foto: "/placeholder.svg?key=fbvlr",
    },
    {
      id: 2,
      nombre: "Laura Martínez",
      equipo: "Voleibol Femenil",
      experiencia: "6 años",
      especialidad: "Deportivo",
      estado: "activo",
      email: "laura.martinez@tecnm.mx",
      telefono: "442-234-5678",
      foto: "/placeholder.svg?key=2bvlr",
    },
    {
      id: 3,
      nombre: "Carlos Gutiérrez",
      equipo: "Fútbol Varonil",
      experiencia: "10 años",
      especialidad: "Deportivo",
      estado: "activo",
      email: "carlos.gutierrez@tecnm.mx",
      telefono: "442-345-6789",
      foto: "/placeholder.svg?key=3bvlr",
    },
    {
      id: 4,
      nombre: "Ana López",
      equipo: "Atletismo",
      experiencia: "5 años",
      especialidad: "Deportivo",
      estado: "activo",
      email: "ana.lopez@tecnm.mx",
      telefono: "442-456-7890",
      foto: "/placeholder.svg?key=4bvlr",
    },
    {
      id: 5,
      nombre: "Miguel Hernández",
      equipo: "Ajedrez",
      experiencia: "7 años",
      especialidad: "Cultural",
      estado: "inactivo",
      email: "miguel.hernandez@tecnm.mx",
      telefono: "442-567-8901",
      foto: "/placeholder.svg?key=5bvlr",
    },
    {
      id: 6,
      nombre: "Sofía Ramírez",
      equipo: "Danza Folklórica",
      experiencia: "12 años",
      especialidad: "Cultural",
      estado: "activo",
      email: "sofia.ramirez@tecnm.mx",
      telefono: "442-678-9012",
      foto: "/placeholder.svg?key=6bvlr",
    },
  ]

  // Filtrar entrenadores según la búsqueda y la pestaña activa
  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coach.equipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coach.especialidad.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "todos") return matchesSearch
    if (activeTab === "deportivos") return matchesSearch && coach.especialidad === "Deportivo"
    if (activeTab === "culturales") return matchesSearch && coach.especialidad === "Cultural"
    if (activeTab === "activos") return matchesSearch && coach.estado === "activo"
    if (activeTab === "inactivos") return matchesSearch && coach.estado === "inactivo"
    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#0a2158]" />
              Gestión de Entrenadores
            </CardTitle>
            <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
              <UserPlus className="mr-2 h-4 w-4" />
              Nuevo Entrenador
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar entrenador..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Tabs defaultValue="todos" className="w-full md:w-auto" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="deportivos">Deportivos</TabsTrigger>
                  <TabsTrigger value="culturales">Culturales</TabsTrigger>
                  <TabsTrigger value="activos">Activos</TabsTrigger>
                  <TabsTrigger value="inactivos">Inactivos</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-4">
              {filteredCoaches.length > 0 ? (
                filteredCoaches.map((coach) => (
                  <motion.div
                    key={coach.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={coach.foto || "/placeholder.svg"} alt={coach.nombre} />
                          <AvatarFallback className="bg-[#0a2158] text-white">
                            {coach.nombre
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{coach.nombre}</h3>
                            <Badge
                              className={`ml-2 ${
                                coach.estado === "activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {coach.estado === "activo" ? "Activo" : "Inactivo"}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            <span className="mr-3">Equipo: {coach.equipo}</span>
                            <span>Especialidad: {coach.especialidad}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md min-w-[80px]">
                          <span className="text-xs text-gray-500">Experiencia</span>
                          <span className="text-sm font-bold text-[#0a2158]">{coach.experiencia}</span>
                        </div>

                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <span className="hidden md:inline">Contactar</span>
                        </Button>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Users className="mr-2 h-4 w-4" />
                              <span>Ver Equipo</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              <span>Enviar Correo</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Phone className="mr-2 h-4 w-4" />
                              <span>Llamar: {coach.telefono}</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <span>Editar Información</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <span>{coach.estado === "activo" ? "Desactivar" : "Activar"}</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gray-50 border-t text-sm flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{coach.email}</span>
                      <span className="mx-2">•</span>
                      <Phone className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{coach.telefono}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <p>No se encontraron entrenadores que coincidan con la búsqueda.</p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <Users className="text-[#0a2158] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Resumen:</strong> {coaches.filter((c) => c.estado === "activo").length} entrenadores activos,{" "}
                  {coaches.filter((c) => c.estado === "inactivo").length} inactivos.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Distribución: {coaches.filter((c) => c.especialidad === "Deportivo").length} deportivos,{" "}
                  {coaches.filter((c) => c.especialidad === "Cultural").length} culturales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
