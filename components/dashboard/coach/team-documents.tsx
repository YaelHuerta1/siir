"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Search, Download, Eye, AlertCircle, Plus, FileUp, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TeamDocumentsProps {
  teamName: string
}

export default function TeamDocuments({ teamName }: TeamDocumentsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("equipo")

  // Datos de ejemplo para documentos del equipo
  const teamDocuments = [
    {
      id: 1,
      nombre: "Reglamento del Equipo",
      tipo: "PDF",
      fechaSubida: "10/04/2025",
      tamaño: "1.2 MB",
      autor: "Roberto Sánchez",
    },
    {
      id: 2,
      nombre: "Calendario de Torneos 2025",
      tipo: "PDF",
      fechaSubida: "15/04/2025",
      tamaño: "0.8 MB",
      autor: "Departamento de Extraescolares",
    },
    {
      id: 3,
      nombre: "Estrategias de Juego",
      tipo: "PDF",
      fechaSubida: "20/04/2025",
      tamaño: "2.5 MB",
      autor: "Roberto Sánchez",
    },
    {
      id: 4,
      nombre: "Formato de Registro de Jugadores",
      tipo: "DOCX",
      fechaSubida: "25/04/2025",
      tamaño: "0.5 MB",
      autor: "Departamento de Extraescolares",
    },
  ]

  // Datos de ejemplo para documentos de los miembros
  const memberDocuments = [
    {
      id: 1,
      nombre: "Angel Ismael Ortega Espinosa",
      documentosCompletos: true,
      documentos: [
        { nombre: "Acta de Nacimiento", estado: "completado" },
        { nombre: "CURP", estado: "completado" },
        { nombre: "Credencial", estado: "completado" },
        { nombre: "Foto", estado: "completado" },
        { nombre: "Kardex", estado: "completado" },
        { nombre: "Horario", estado: "completado" },
      ],
    },
    {
      id: 2,
      nombre: "Carlos Mendoza Ruiz",
      documentosCompletos: true,
      documentos: [
        { nombre: "Acta de Nacimiento", estado: "completado" },
        { nombre: "CURP", estado: "completado" },
        { nombre: "Credencial", estado: "completado" },
        { nombre: "Foto", estado: "completado" },
        { nombre: "Kardex", estado: "completado" },
        { nombre: "Horario", estado: "completado" },
      ],
    },
    {
      id: 3,
      nombre: "Juan Pérez García",
      documentosCompletos: false,
      documentos: [
        { nombre: "Acta de Nacimiento", estado: "completado" },
        { nombre: "CURP", estado: "completado" },
        { nombre: "Credencial", estado: "pendiente" },
        { nombre: "Foto", estado: "completado" },
        { nombre: "Kardex", estado: "pendiente" },
        { nombre: "Horario", estado: "completado" },
      ],
    },
  ]

  // Filtrar documentos según la búsqueda
  const filteredTeamDocuments = teamDocuments.filter((doc) =>
    doc.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredMemberDocuments = memberDocuments.filter((member) =>
    member.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calcular progreso general de documentación
  const totalDocumentos = memberDocuments.reduce((acc, member) => acc + member.documentos.length, 0)
  const documentosCompletados = memberDocuments.reduce(
    (acc, member) => acc + member.documentos.filter((doc) => doc.estado === "completado").length,
    0,
  )
  const porcentajeCompletado = Math.round((documentosCompletados / totalDocumentos) * 100)

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5 text-[#0a2158]" />
              Documentos: {teamName}
            </CardTitle>
            <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
              <Plus className="mr-2 h-4 w-4" />
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

              <Tabs defaultValue="equipo" className="w-full md:w-auto" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="equipo">Documentos del Equipo</TabsTrigger>
                  <TabsTrigger value="miembros">Documentos de Miembros</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <TabsContent value="equipo" className="mt-0">
              <div className="space-y-4">
                {filteredTeamDocuments.length > 0 ? (
                  filteredTeamDocuments.map((doc) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
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

            <TabsContent value="miembros" className="mt-0">
              <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4 text-[#0a2158]" />
                  Estado de Documentación del Equipo
                </h3>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progreso general</span>
                    <span>{porcentajeCompletado}%</span>
                  </div>
                  <Progress value={porcentajeCompletado} className="h-2" />
                </div>
                <p className="text-sm text-gray-600">
                  {memberDocuments.filter((m) => m.documentosCompletos).length} de {memberDocuments.length} miembros
                  tienen todos sus documentos completos.
                </p>
              </div>

              <div className="space-y-6">
                {filteredMemberDocuments.length > 0 ? (
                  filteredMemberDocuments.map((member) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium flex items-center">
                            {member.nombre}
                            {member.documentosCompletos ? (
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
                            <FileUp className="mr-2 h-4 w-4" />
                            Gestionar
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {member.documentos.map((doc, index) => (
                            <div
                              key={index}
                              className={`p-2 rounded-md flex items-center ${
                                doc.estado === "completado" ? "bg-green-50" : "bg-yellow-50"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                                  doc.estado === "completado"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-yellow-100 text-yellow-600"
                                }`}
                              >
                                {doc.estado === "completado" ? "✓" : "!"}
                              </div>
                              <span className="text-sm">{doc.nombre}</span>
                            </div>
                          ))}
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
            </TabsContent>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
