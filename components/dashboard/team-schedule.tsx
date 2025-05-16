"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TeamScheduleProps {
  teamName: string
}

export default function TeamSchedule({ teamName }: TeamScheduleProps) {
  // Datos de ejemplo para el calendario y eventos
  const events = [
    {
      id: 1,
      title: "Entrenamiento",
      date: "15 de mayo, 2025",
      time: "16:00 - 18:00",
      location: "Gimnasio Principal",
      type: "training",
    },
    {
      id: 2,
      title: "Partido vs ITESM",
      date: "20 de mayo, 2025",
      time: "17:00 - 19:00",
      location: "Cancha Central",
      type: "match",
    },
    {
      id: 3,
      title: "Entrenamiento",
      date: "22 de mayo, 2025",
      time: "16:00 - 18:00",
      location: "Gimnasio Principal",
      type: "training",
    },
    {
      id: 4,
      title: "Torneo Regional",
      date: "28 de mayo, 2025",
      time: "09:00 - 18:00",
      location: "Polideportivo Municipal",
      type: "tournament",
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-[#0a2158]" />
              Calendario de {teamName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div
                        className={`p-4 text-white flex items-center justify-center sm:w-32 ${
                          event.type === "training"
                            ? "bg-blue-600"
                            : event.type === "match"
                              ? "bg-green-600"
                              : "bg-purple-600"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-sm font-medium">{event.date.split(",")[0]}</div>
                          <div className="text-2xl font-bold">{event.date.split(" ")[0]}</div>
                        </div>
                      </div>
                      <CardContent className="p-4 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{event.title}</h3>
                            <div className="space-y-1 mt-2 text-gray-600">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-[#0a2158]" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="mr-2 h-4 w-4 text-[#0a2158]" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge
                            className={`${
                              event.type === "training"
                                ? "bg-blue-100 text-blue-800"
                                : event.type === "match"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {event.type === "training"
                              ? "Entrenamiento"
                              : event.type === "match"
                                ? "Partido"
                                : "Torneo"}
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
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
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#0a2158]" />
              Miembros del Equipo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0a2158] text-white flex items-center justify-center mr-3">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <p className="font-medium">Estudiante {index + 1}</p>
                    <p className="text-sm text-gray-500">Semestre {Math.floor(Math.random() * 8) + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
