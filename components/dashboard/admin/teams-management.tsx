"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Search, Plus, Users, Calendar, Award, MoreHorizontal, CheckCircle, AlertCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TeamsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  // Datos de ejemplo para los equipos
  const teams = [
    {
      id: 1,
      nombre: "Basquetbol Varonil",
      categoria: "Deportivo",
      entrenador: "Roberto Sánchez",
      miembros: 15,
      estado: "activo",
      proximoEvento: "Torneo Regional - 28 de mayo",
      documentacionCompleta: true,
    },
    {
      id: 2,
      nombre: "Voleibol Femenil",
      categoria: "Deportivo",
      entrenador: "Laura Martínez",
      miembros: 12,
      estado: "activo",
      proximoEvento: "Entrenamiento - 15 de mayo",
      documentacionCompleta: true,
    },
    {
      id: 3,
      nombre: "Fútbol Varonil",
      categoria: "Deportivo",
      entrenador: "Carlos Gutiérrez",
      miembros: 22,
      estado: "activo",
      proximoEvento: "Partido vs ITESM - 20 de mayo",
      documentacionCompleta: false,
    },
    {
      id: 4,
      nombre: "Atletismo",
      categoria: "Deportivo",
      entrenador: "Ana López",
      miembros: 18,
      estado: "activo",
      proximoEvento: "Competencia Estatal - 10 de junio",
      documentacionCompleta: true,
    },
    {
      id: 5,
      nombre: "Ajedrez",
      categoria: "Cultural",
      entrenador: "Miguel Hernández",
      miembros: 8,
      estado: "inactivo",
      proximoEvento: "Torneo Interno - 5 de junio",
      documentacionCompleta: false,
    },
    {
      id: 6,
      nombre: "Danza Folklórica",
      categoria: "Cultural",
      entrenador: "Sofía Ramírez",
      miembros: 16,
      estado: "activo",
      proximoEvento: "Presentación Cultural - 30 de mayo",
      documentacionCompleta: true,
    },
  ]

  // Filtrar equipos según la búsqueda y la pestaña activa
  const filteredTeams = teams.filter((team) => {
    const matchesSearch =
      team.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.entrenador.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.categoria.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "todos") return matchesSearch
    if (activeTab === "deportivos") return matchesSearch && team.categoria === "Deportivo"
    if (activeTab === "culturales") return matchesSearch && team.categoria === "Cultural"
    if (activeTab === "activos") return matchesSearch && team.estado === "activo"
    if (activeTab === "inactivos") return matchesSearch && team.estado === "inactivo"
    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-[#0a2158]" />
              Gestión de Equipos Representativos
            </CardTitle>
            <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Equipo
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar equipo..."
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
              {filteredTeams.length > 0 ? (
                filteredTeams.map((team) => (
                  <motion.div
                    key={team.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                            team.categoria === "Deportivo"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {team.categoria === "Deportivo" ? (
                            <Trophy className="h-6 w-6" />
                          ) : (
                            <Award className="h-6 w-6" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{team.nombre}</h3>
                            <Badge
                              className={`ml-2 ${
                                team.estado === "activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {team.estado === "activo" ? "Activo" : "Inactivo"}
                            </Badge>
                            {!team.documentacionCompleta && (
                              <Badge className="ml-2 bg-amber-100 text-amber-800">Docs. Pendientes</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            <span className="mr-3">Entrenador: {team.entrenador}</span>
                            <span className="mr-3">Categoría: {team.categoria}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md min-w-[80px]">
                          <span className="text-xs text-gray-500">Miembros</span>
                          <span className="text-lg font-bold text-[#0a2158]">{team.miembros}</span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 p-2 rounded-md min-w-[80px]">
                          <span className="text-xs text-gray-500">Documentos</span>
                          {team.documentacionCompleta ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                          )}
                        </div>

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
                              <span>Ver Miembros</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              <span>Ver Calendario</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Trophy className="mr-2 h-4 w-4" />
                              <span>Ver Estadísticas</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <span>Editar Equipo</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <span>Desactivar Equipo</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gray-50 border-t text-sm">
                      <span className="font-medium">Próximo evento:</span> {team.proximoEvento}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Trophy className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <p>No se encontraron equipos que coincidan con la búsqueda.</p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <AlertCircle className="text-[#0a2158] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Resumen:</strong> {teams.filter((t) => t.estado === "activo").length} equipos activos,{" "}
                  {teams.filter((t) => !t.documentacionCompleta).length} con documentos pendientes.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Total de estudiantes participantes:{" "}
                  {teams.reduce((acc, team) => acc + (team.estado === "activo" ? team.miembros : 0), 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
