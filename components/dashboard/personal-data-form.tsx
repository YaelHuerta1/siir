"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PersonalDataFormProps {
  onClose: () => void
}

export default function PersonalDataForm({ onClose }: PersonalDataFormProps) {
  const [loading, setLoading] = useState(false)

  // Datos pre-llenados para el formulario
  const [formData, setFormData] = useState({
    nombre: "Angel Ismael",
    apellidoMaterno: "Ortega",
    apellidoPaterno: "Espinosa",
    telefono: "4427584930",
    numeroControl: "20140956",
    correo: "l20140956@queretaro.tecnm.mx",
    edad: "27",
    carrera: "Ingeniería en Sistemas Computacionales",
    curp: "AAAA012345AAAAR1R",
    tipoSangre: "A+",
    semestre: "9",
    participacionesPrevias: "4",
    fechaNacimiento: "01/02/1996",
    peso: "50",
    altura: "1.70",
    nss: "12345678901234567",
    alergias: "SI O NO",
    descripcionUniformes: "Soy talla chica o mediana",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular envío de datos
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Datos guardados:", formData)
    setLoading(false)
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Datos Personales</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Datos Personales */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Datos Personales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre(s)</Label>
                  <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                  <Input
                    id="apellidoMaterno"
                    name="apellidoMaterno"
                    value={formData.apellidoMaterno}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
                  <Input
                    id="apellidoPaterno"
                    name="apellidoPaterno"
                    value={formData.apellidoPaterno}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Número de Teléfono</Label>
                  <Input id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numeroControl">Número de Control</Label>
                  <Input
                    id="numeroControl"
                    name="numeroControl"
                    value={formData.numeroControl}
                    onChange={handleChange}
                    required
                    readOnly
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="correo">Correo Institucional</Label>
                  <Input
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    readOnly
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edad">Edad</Label>
                  <Input id="edad" name="edad" value={formData.edad} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carrera">Carrera</Label>
                  <Input
                    id="carrera"
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    required
                    readOnly
                    className="bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Datos para Inscripción a Torneos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Datos para Inscripción a Torneos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="curp">CURP</Label>
                  <Input id="curp" name="curp" value={formData.curp} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoSangre">Tipo de Sangre</Label>
                  <Input
                    id="tipoSangre"
                    name="tipoSangre"
                    value={formData.tipoSangre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="semestre">Semestre Actual</Label>
                  <Input id="semestre" name="semestre" value={formData.semestre} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="participacionesPrevias">Participaciones Previas</Label>
                  <div className="relative">
                    <Input
                      id="participacionesPrevias"
                      name="participacionesPrevias"
                      value={formData.participacionesPrevias}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-rose-500">
                      <span className="sr-only">Campo requerido</span>●
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                  <Input
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="peso">Peso (KG)</Label>
                  <Input id="peso" name="peso" value={formData.peso} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="altura">Altura (metros)</Label>
                  <Input id="altura" name="altura" value={formData.altura} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nss">NSS</Label>
                  <div className="relative">
                    <Input id="nss" name="nss" value={formData.nss} onChange={handleChange} required />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-rose-500">
                      <span className="sr-only">Campo requerido</span>●
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="alergias">Alergias</Label>
                  <Input id="alergias" name="alergias" value={formData.alergias} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Información de Uniformes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Información de Uniformes</h3>
              <div className="space-y-2">
                <Label htmlFor="descripcionUniformes">Descripción Uniformes</Label>
                <Input
                  id="descripcionUniformes"
                  name="descripcionUniformes"
                  value={formData.descripcionUniformes}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose} className="px-6">
                Regresar
              </Button>
              <Button type="submit" className="px-6 bg-[#0a2158] hover:bg-[#0c2a6e]" disabled={loading}>
                {loading ? "Guardando..." : "Guardar Cambios"}
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
