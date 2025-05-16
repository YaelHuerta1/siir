"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, MapPin, Clock, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import PersonalDataForm from "./personal-data-form"

interface StudentInfoCardProps {
  studentData: {
    nombre: string
    carrera: string
    grupoRepresentativo: string
    semestre: string
    proximoEvento: {
      titulo: string
      fecha: string
      hora: string
      lugar: string
    }
  }
}

export default function StudentInfoCard({ studentData }: StudentInfoCardProps) {
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-[#0a2158]" />
              Información Personal
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-[#0a2158] border-[#0a2158]"
              onClick={() => setShowEditForm(true)}
            >
              <Edit className="h-4 w-4" />
              Editar Datos
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-500">Nombre Completo</h3>
                <p className="text-lg">Angel Ismael Ortega Espinosa</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Carrera</h3>
                <p className="text-lg">{studentData.carrera}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Número de Control</h3>
                <p className="text-lg">20140956</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Semestre</h3>
                <p className="text-lg">{studentData.semestre}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Correo Institucional</h3>
                <p className="text-lg">l20140956@queretaro.tecnm.mx</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Teléfono</h3>
                <p className="text-lg">4427584930</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-[#0a2158]" />
              Información del Equipo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-500">Equipo Representativo</h3>
                <p className="text-lg">{studentData.grupoRepresentativo}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Entrenador</h3>
                <p className="text-lg">Lic. Roberto Sánchez</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Días de Entrenamiento</h3>
                <p className="text-lg">Lunes, Miércoles y Viernes</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Horario</h3>
                <p className="text-lg">16:00 - 18:00 hrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-[#0a2158]" />
              Próximo Evento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-2">{studentData.proximoEvento.titulo}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-[#0a2158]" />
                  <span>{studentData.proximoEvento.fecha}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-[#0a2158]" />
                  <span>{studentData.proximoEvento.hora}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-[#0a2158]" />
                  <span>{studentData.proximoEvento.lugar}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Estadísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-gray-500 text-sm">Partidos Jugados</p>
                <p className="text-3xl font-bold text-[#0a2158]">12</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-gray-500 text-sm">Asistencia</p>
                <p className="text-3xl font-bold text-[#0a2158]">85%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-gray-500 text-sm">Puntos Anotados</p>
                <p className="text-3xl font-bold text-[#0a2158]">68</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {showEditForm && <PersonalDataForm onClose={() => setShowEditForm(false)} />}
    </div>
  )
}
