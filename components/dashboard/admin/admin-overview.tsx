"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Trophy,
  Users,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Award,
  BarChart2,
  FileText,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface AdminOverviewProps {
  adminData: {
    nombre: string
    cargo: string
    departamento: string
    estadisticas: {
      equipos: number
      estudiantes: number
      entrenadores: number
      torneos: number
    }
  }
  showDetailedReports?: boolean
}

export default function AdminOverview({ adminData, showDetailedReports = false }: AdminOverviewProps) {
  // Datos de ejemplo para las estadísticas
  const stats = {
    participacionEstudiantil: 12.5, // Porcentaje de estudiantes en equipos representativos
    asistenciaPromedio: 85,
    documentacionCompleta: 78,
    proximosTorneos: 3,
    solicitudesPendientes: 8,
    equiposActivos: adminData.estadisticas.equipos,
    estudiantesRegistrados: adminData.estadisticas.estudiantes,
    entrenadores: adminData.estadisticas.entrenadores,
  }

  // Datos de ejemplo para los equipos destacados
  const topTeams = [
    { id: 1, nombre: "Basquetbol Varonil", victorias: 8, derrotas: 2, participantes: 15 },
    { id: 2, nombre: "Voleibol Femenil", victorias: 7, derrotas: 3, participantes: 12 },
    { id: 3, nombre: "Fútbol Varonil", victorias: 6, derrotas: 2, participantes: 22 },
  ]

  // Datos de ejemplo para los próximos eventos
  const upcomingEvents = [
    {
      id: 1,
      title: "Torneo Regional Universitario",
      date: "28 de mayo, 2025",
      equipos: 5,
      location: "Polideportivo Municipal",
    },
    {
      id: 2,
      title: "Competencia Estatal de Atletismo",
      date: "10 de junio, 2025",
      equipos: 2,
      location: "Pista Atlética Universitaria",
    },
    {
      id: 3,
      title: "Encuentro Amistoso de Voleibol",
      date: "15 de junio, 2025",
      equipos: 1,
      location: "Gimnasio Principal",
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <BarChart2 className="mr-2 h-5 w-5 text-[#0a2158]" />
              Resumen General de Actividades Extraescolares
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center">
                <Trophy className="h-8 w-8 text-[#0a2158] mb-2" />
                <p className="text-sm text-gray-500">Equipos Activos</p>
                <p className="text-3xl font-bold text-[#0a2158]">{stats.equiposActivos}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center">
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <p className="text-sm text-gray-500">Estudiantes</p>
                <p className="text-3xl font-bold text-green-600">{stats.estudiantesRegistrados}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center">
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <p className="text-sm text-gray-500">Entrenadores</p>
                <p className="text-3xl font-bold text-purple-600">{stats.entrenadores}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center">
                <Calendar className="h-8 w-8 text-amber-600 mb-2" />
                <p className="text-sm text-gray-500">Próximos Torneos</p>
                <p className="text-3xl font-bold text-amber-600">{stats.proximosTorneos}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Indicadores Generales</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Participación Estudiantil</span>
                      <span className="text-sm font-medium">{stats.participacionEstudiantil}%</span>
                    </div>
                    <Progress value={stats.participacionEstudiantil} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      Porcentaje de estudiantes que participan en equipos representativos
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Asistencia Promedio</span>
                      <span className="text-sm font-medium">{stats.asistenciaPromedio}%</span>
                    </div>
                    <Progress value={stats.asistenciaPromedio} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Documentación Completa</span>
                      <span className="text-sm font-medium">{stats.documentacionCompleta}%</span>
                    </div>
                    <Progress value={stats.documentacionCompleta} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Equipos Destacados</h3>
                <div className="space-y-3">
                  {topTeams.map((team) => (
                    <div key={team.id} className="flex items-center p-2 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-[#0a2158] text-white flex items-center justify-center mr-3">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{team.nombre}</p>
                        <div className="flex text-xs text-gray-500 mt-1">
                          <span className="mr-3">
                            Récord: {team.victorias}-{team.derrotas}
                          </span>
                          <span>Participantes: {team.participantes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Próximos Eventos</h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex text-sm text-gray-500 mt-1 items-center">
                        <Calendar className="h-4 w-4 mr-1 text-[#0a2158]" />
                        <span className="mr-3">{event.date}</span>
                        <Users className="h-4 w-4 mr-1 text-[#0a2158]" />
                        <span>{event.equipos} equipos</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Acciones Pendientes</h3>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                    <h4 className="font-medium">Solicitudes por Revisar</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Tienes <span className="font-bold">{stats.solicitudesPendientes}</span> solicitudes pendientes de
                    revisión.
                  </p>
                  <Button className="w-full bg-[#0a2158] hover:bg-[#0c2a6e]">Ver Solicitudes</Button>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-4">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-[#0a2158] mr-2" />
                    <h4 className="font-medium">Estado del Sistema</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Último respaldo:</span>
                      <span className="font-medium">Hoy, 08:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Próximo torneo:</span>
                      <span className="font-medium">En 15 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reportes pendientes:</span>
                      <span className="font-medium">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {showDetailedReports && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-[#0a2158]" />
                Reportes Detallados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="mr-2 h-5 w-5 text-[#0a2158]" />
                      Participación por Carrera
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Ing. en Sistemas</span>
                          <span className="text-sm font-medium">32%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Ing. Industrial</span>
                          <span className="text-sm font-medium">28%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Ing. Mecánica</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Otras carreras</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Ver Reporte Completo
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-[#0a2158]" />
                      Rendimiento por Equipo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Basquetbol Varonil</span>
                          <span className="text-sm font-medium">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Voleibol Femenil</span>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Fútbol Varonil</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Atletismo</span>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Ver Reporte Completo
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-[#0a2158]" />
                      Asistencia Mensual
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Enero</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Febrero</span>
                          <span className="text-sm font-medium">82%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Marzo</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Abril</span>
                          <span className="text-sm font-medium">88%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Ver Reporte Completo
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
                  <FileText className="mr-2 h-4 w-4" />
                  Generar Reporte Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
