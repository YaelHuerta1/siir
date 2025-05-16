"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, MapPin, Clock, Users, BarChart2, TrendingUp, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TeamOverviewProps {
  coachData: {
    nombre: string
    equipo: string
    rol: string
    proximoEvento: {
      titulo: string
      fecha: string
      hora: string
      lugar: string
    }
    estadisticas: {
      miembros: number
      asistenciaPromedio: number
      proximoTorneo: string
      victorias: number
      derrotas: number
    }
  }
}

export default function TeamOverview({ coachData }: TeamOverviewProps) {
  // Datos de ejemplo para las estadísticas
  const teamStats = {
    asistenciaPromedio: coachData.estadisticas.asistenciaPromedio,
    rendimientoFisico: 78,
    documentosCompletos: 92,
    puntosAnotados: 450,
    puntosRecibidos: 380,
  }

  // Datos de ejemplo para los jugadores destacados
  const topPlayers = [
    { id: 1, nombre: "Carlos Mendoza", puntos: 120, asistencia: 95 },
    { id: 2, nombre: "Juan Pérez", puntos: 105, asistencia: 90 },
    { id: 3, nombre: "Miguel Ángel Ruiz", puntos: 98, asistencia: 88 },
  ]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-[#0a2158]" />
              Resumen del Equipo: {coachData.equipo}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center">
                <Users className="h-8 w-8 text-[#0a2158] mb-2" />
                <p className="text-sm text-gray-500">Miembros Activos</p>
                <p className="text-3xl font-bold text-[#0a2158]">{coachData.estadisticas.miembros}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center">
                <Trophy className="h-8 w-8 text-green-600 mb-2" />
                <p className="text-sm text-gray-500">Victorias / Derrotas</p>
                <p className="text-3xl font-bold text-green-600">
                  {coachData.estadisticas.victorias} - {coachData.estadisticas.derrotas}
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center">
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <p className="text-sm text-gray-500">Próximo Torneo</p>
                <p className="text-lg font-bold text-purple-600 text-center">{coachData.estadisticas.proximoTorneo}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
              <h3 className="font-bold text-lg mb-2">Próximo Evento</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-[#0a2158]" />
                  <span>{coachData.proximoEvento.fecha}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-[#0a2158]" />
                  <span>{coachData.proximoEvento.hora}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-[#0a2158]" />
                  <span>{coachData.proximoEvento.lugar}</span>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3">Estadísticas del Equipo</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Asistencia Promedio</span>
                  <span className="text-sm font-medium">{teamStats.asistenciaPromedio}%</span>
                </div>
                <Progress value={teamStats.asistenciaPromedio} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Rendimiento Físico</span>
                  <span className="text-sm font-medium">{teamStats.rendimientoFisico}%</span>
                </div>
                <Progress value={teamStats.rendimientoFisico} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Documentos Completos</span>
                  <span className="text-sm font-medium">{teamStats.documentosCompletos}%</span>
                </div>
                <Progress value={teamStats.documentosCompletos} className="h-2" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-[#0a2158]" />
                Rendimiento Ofensivo/Defensivo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Puntos Anotados</span>
                    <span className="text-sm font-medium">{teamStats.puntosAnotados}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(teamStats.puntosAnotados / 500) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Puntos Recibidos</span>
                    <span className="text-sm font-medium">{teamStats.puntosRecibidos}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${(teamStats.puntosRecibidos / 500) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Diferencia:{" "}
                    <span className="font-bold text-green-600">
                      +{teamStats.puntosAnotados - teamStats.puntosRecibidos}
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-[#0a2158]" />
                Jugadores Destacados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPlayers.map((player, index) => (
                  <div key={player.id} className="flex items-center p-2 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[#0a2158] text-white flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{player.nombre}</p>
                      <div className="flex text-xs text-gray-500 mt-1">
                        <span className="mr-3">Puntos: {player.puntos}</span>
                        <span>Asistencia: {player.asistencia}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
