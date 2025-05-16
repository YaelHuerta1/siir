"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Check, AlertCircle, Eye, Download, X, ChevronDown } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Document {
  id: number
  nombre: string
  estado: string
  archivo?: File | null
}

export default function DocumentUpload() {
  // Lista de documentos requeridos basada en la imagen
  const [documents, setDocuments] = useState<Document[]>([
    { id: 1, nombre: "Acta de Nacimiento", estado: "pendiente", archivo: null },
    { id: 2, nombre: "CURP", estado: "pendiente", archivo: null },
    { id: 3, nombre: "Credencial", estado: "pendiente", archivo: null },
    { id: 4, nombre: "Foto", estado: "pendiente", archivo: null },
    { id: 5, nombre: "Kardex", estado: "pendiente", archivo: null },
    { id: 6, nombre: "Horario", estado: "pendiente", archivo: null },
  ])

  const [uploadingDoc, setUploadingDoc] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeDocId, setActiveDocId] = useState<number | null>(null)

  const handleFileSelect = (docId: number) => {
    setActiveDocId(docId)
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && activeDocId) {
      handleUpload(activeDocId, file)
    }
  }

  const handleUpload = (docId: number, file: File) => {
    setUploadingDoc(docId)
    setProgress(0)

    // Actualizar el estado del documento con el archivo
    setDocuments((prevDocs) => prevDocs.map((doc) => (doc.id === docId ? { ...doc, archivo: file } : doc)))

    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setUploadingDoc(null)
            setDocuments((prevDocs) =>
              prevDocs.map((doc) => (doc.id === docId ? { ...doc, estado: "completado" } : doc)),
            )
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const handleViewDocument = (docId: number) => {
    const doc = documents.find((d) => d.id === docId)
    if (doc?.archivo) {
      const url = URL.createObjectURL(doc.archivo)
      window.open(url, "_blank")
    } else {
      alert("No hay documento para visualizar")
    }
  }

  const handleDeleteDocument = (docId: number) => {
    if (confirm("¿Estás seguro de que deseas eliminar este documento?")) {
      setDocuments((prevDocs) =>
        prevDocs.map((doc) => (doc.id === docId ? { ...doc, estado: "pendiente", archivo: null } : doc)),
      )
    }
  }

  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar los cambios en el servidor
    alert("Documentos guardados correctamente")
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5 text-[#0a2158]" />
              Documentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc) => {
                const isUploading = uploadingDoc === doc.id
                const isUploaded = doc.estado === "completado"

                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                            isUploaded ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {isUploaded ? <Check className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-medium">{doc.nombre}</p>
                          <p className="text-sm text-gray-500">
                            {isUploaded ? `Documento cargado: ${doc.archivo?.name || ""}` : "Pendiente de cargar"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isUploaded ? (
                          <>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                              onClick={() => handleViewDocument(doc.id)}
                              title="Ver"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
                              title="Descargar"
                            >
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Descargar</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                              onClick={() => handleDeleteDocument(doc.id)}
                              title="Eliminar"
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Eliminar</span>
                            </Button>
                          </>
                        ) : (
                          <div className="flex items-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="mr-2 border-gray-300 text-gray-700"
                                  disabled={isUploading}
                                >
                                  <ChevronDown className="h-4 w-4 mr-1" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleFileSelect(doc.id)}>
                                  Seleccionar archivo
                                </DropdownMenuItem>
                                <DropdownMenuItem>Tomar foto</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>

                            <Button
                              onClick={() => handleFileSelect(doc.id)}
                              disabled={isUploading}
                              className="bg-[#0a2158] hover:bg-[#0c2a6e]"
                            >
                              <Upload className="mr-2 h-4 w-4" />
                              Cargar
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {isUploading && (
                      <div className="px-4 pb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Subiendo documento...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <AlertCircle className="text-[#0a2158] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> Todos los documentos deben ser cargados en formato PDF y no deben exceder
                  los 5MB.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Los documentos serán revisados por el departamento de actividades extraescolares.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" className="px-6">
                Regresar
              </Button>
              <Button className="px-6 bg-[#0a2158] hover:bg-[#0c2a6e]" onClick={handleSaveChanges}>
                Guardar Cambios
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Input oculto para seleccionar archivos */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
      />
    </div>
  )
}
