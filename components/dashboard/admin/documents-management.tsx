"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Search, Download, Eye, AlertCircle, Plus, Upload, MoreHorizontal } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DocumentsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("institucionales")

  // Datos de ejemplo para documentos institucionales
  const institutionalDocuments = [
    {
      id: 1,
      nombre: "Reglamento General de Equipos Representativos",
      tipo: "PDF",
      fechaSubida: "10/01/2025",
      tamaño: "1.5 MB",
      autor: "Departamento de Extraescolares",
      categoria: "Reglamentos",
    },
    {
      id: 2,
      nombre: "Formato de Registro de Equipos",
      tipo: "DOCX",
      fechaSubida: "15/01/2025",
      tamaño: "0.8 MB",
      autor: "Departamento de Extraescolares",
      categoria: "Formatos",
    },
    {
      id: 3,
      nombre: "Calendario Anual de Torneos 2025",
      tipo: "PDF",
      fechaSubida: "20/01/2025",
      tamaño: "2.2 MB",
      autor: "Departamento de Extraescolares",
      categoria: "Calendarios",
    },
    {
      id: 4,
      nombre: "Guía para Entrenadores",
      tipo: "PDF",
      fechaSubida: "25/01/2025",
      tamaño: "3.5 MB",
      autor: "Departamento de Extraescolares",
      categoria: "Guías",
    },
    {
      id: 5,
      nombre: "Formato de Evaluación de Desempeño",
      tipo: "XLSX",
      fechaSubida: "30/01/2025",
      tamaño: "0.5 MB",
      autor: "Departamento de Extraescolares",
      categoria: "Formatos",
    },
  ]

  // Datos de ejemplo para documentos de equipos
  const teamDocuments = [
    {
      id: 1,
      equipo: "Basquetbol Varonil",
      documentos: [
        { nombre: "Lista de Jugadores", estado: "completado", fecha: "15/02/2025" },
        { nombre: "Horarios de Entrenamiento", estado: "completado", fecha: "16/02/2025" },
        { nombre: "Reporte de Desempeño", estado: "completado", fecha: "20/03/2025" },
      ],
      documentacionCompleta: true,
    },
    {
      id: 2,
      equipo: "Voleibol Femenil",
      documentos: [
        { nombre: "Lista de Jugadores", estado: "completado", fecha: "18/02/2025" },
        { nombre: "Horarios de Entrenamiento", estado: "completado", fecha: "19/02/2025" },
        { nombre: "Reporte de Desempeño", estado: "pendiente", fecha: "-" },
      ],
      documentacionCompleta: false,
    },
    {
      id: 3,
      equipo: "Fútbol Varonil",
      documentos: [
        { nombre: "Lista de Jugadores", estado: "completado", fecha: "12/02/2025" },
        { nombre: "Horarios de Entrenamiento", estado: "completado", fecha: "13/02/2025" },
        { nombre: "Reporte de Desempeño", estado: "pendiente", fecha: "-" },
      ],
      documentacionCompleta: false,
    },
  ]

  // Datos de ejemplo para documentos de estudiantes
  const studentDocuments = {
    totalEstudiantes: 187,
    documentosCompletos: 145,
    documentosPendientes: 42,
    porcentajeCompletado: 77,
    categorias: [
      { nombre: "Acta de Nacimiento", completados: 180, total: 187 },
      { nombre: "CURP", completados: 185, total: 187 },
      { nombre: "Credencial", completados: 170, total: 187 },
      { nombre: "Foto", completados: 175, total: 187 },
      { nombre: "Kardex", completados: 150, total: 187 },
      { nombre: "Horario", completados: 160, total: 187 },
    ],
  }

  // Filtrar documentos según la búsqueda
  const filteredInstitutionalDocuments = institutionalDocuments.filter((doc) =>
    doc.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredTeamDocuments = teamDocuments.filter((team) =>
    team.equipo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5 text-[#0a2158]" />
              Gestión de Documentos
            </CardTitle>
            <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
              <Upload className="mr-2 h-4 w-4" />
              Subir Documento
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar documento..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Tabs
                defaultValue="institucionales"
                className="w-full md:w-auto"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList>
                  <TabsTrigger value="institucionales">Institucionales</TabsTrigger>
                  <TabsTrigger value="equipos">Equipos</TabsTrigger>
                  <TabsTrigger value="estudiantes">Estudiantes</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <TabsContent value="institucionales" className="mt-0">
              <div className="space-y-4">
                {filteredInstitutionalDocuments.length > 0 ? (
                  filteredInstitutionalDocuments.map((doc) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex items-center">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                              doc.tipo === "PDF"
                                ? "bg-red-100 text-red-600"
                                : doc.tipo === "DOCX"
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-green-100 text-green-600"
                            }`}
                          >
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">{doc.nombre}</h3>
                            <div className="text-sm text-gray-500 mt-1">
                              <span className="mr-3">{doc.tipo}</span>
                              <span className="mr-3">{doc.tamaño}</span>
                              <span>Subido: {doc.fechaSubida}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-3 sm:mt-0">
                          <Button variant="outline" size="sm" className="text-blue-600">
                            <Eye className="mr-2 h-4 w-4" />
                            Ver
                          </Button>
                          <Button variant="outline" size="sm" className="text-green-600">
                            <Download className="mr-2 h-4 w-4" />
                            Descargar
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Editar Información</DropdownMenuItem>
                              <DropdownMenuItem>Reemplazar Archivo</DropdownMenuItem>
                              <DropdownMenuItem>Compartir</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                    <p>No se encontraron documentos que coincidan con la búsqueda.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="equipos" className="mt-0">
              <div className="space-y-6">
                {filteredTeamDocuments.length > 0 ? (
                  filteredTeamDocuments.map((team) => (
                    <motion.div
                      key={team.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium flex items-center">
                            {team.equipo}
                            {team.documentacionCompleta ? (
                              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                Completo
                              </span>
                            ) : (
                              <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                Pendiente
                              </span>
                            )}
                          </h3>
                          <Button variant="outline" size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Añadir Documento
                          </Button>
                        </div>

                        <div className="space-y-3">
                          {team.documentos.map((doc, index) => (
                            <div
                              key={index}
                              className={`p-3 rounded-md flex justify-between items-center ${
                                doc.estado === "completado" ? "bg-green-50" : "bg-yellow-50"
                              }`}
                            >
                              <div className="flex items-center">
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                                    doc.estado === "completado"
                                      ? "bg-green-100 text-green-600"
                                      : "bg-yellow-100 text-yellow-600"
                                  }`}
                                >
                                  {doc.estado === "completado" ? "✓" : "!"}
                                </div>
                                <div>
                                  <span className="font-medium">{doc.nombre}</span>
                                  {doc.estado === "completado" && (
                                    <span className="text-xs text-gray-500 ml-2">Actualizado: {doc.fecha}</span>
                                  )}
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {doc.estado === "completado" ? (
                                  <>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                      <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                  </>
                                ) : (
                                  <Button variant="outline" size="sm">
                                    <Upload className="mr-2 h-4 w-4" />
                                    Subir
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                    <p>No se encontraron equipos que coincidan con la búsqueda.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="estudiantes" className="mt-0">
              <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4 text-[#0a2158]" />
                  Estado de Documentación de Estudiantes
                </h3>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progreso general</span>
                    <span>
                      {studentDocuments.documentosCompletos} de {studentDocuments.totalEstudiantes} estudiantes (
                      {studentDocuments.porcentajeCompletado}%)
                    </span>
                  </div>
                  <Progress value={studentDocuments.porcentajeCompletado} className="h-2" />
                </div>
                <p className="text-sm text-gray-600">
                  {studentDocuments.documentosPendientes} estudiantes tienen documentos pendientes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Documentos por Categoría</h3>
                {studentDocuments.categorias.map((categoria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-3 border rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{categoria.nombre}</span>
                      <span className="text-sm">
                        {categoria.completados} de {categoria.total} (
                        {Math.round((categoria.completados / categoria.total) * 100)}%)
                      </span>
                    </div>
                    <Progress value={(categoria.completados / categoria.total) * 100} className="h-2" />
                  </motion.div>
                ))}

                <div className="flex justify-end mt-4">
                  <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
                    <FileText className="mr-2 h-4 w-4" />
                    Generar Reporte Detallado
                  </Button>
                </div>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
