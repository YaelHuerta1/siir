"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, MapPin, Users, Plus, Edit, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

interface TeamScheduleProps {
  teamName: string
  isCoach?: boolean
}

export default function TeamSchedule({ teamName, isCoach = false }: TeamScheduleProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Datos de ejemplo para el calendario y eventos
  const events = [
    {
      id: 1,
      title: "Entrenamiento",
      date: "15 de mayo, 2025",
      time: "16:00 - 18:00",
      location: "Gimnasio Principal",
      type: "training",
      description: "Entrenamiento regular con enfoque en técnicas defensivas",
    },
    {
      id: 2,
      title: "Partido vs ITESM",
      date: "20 de mayo, 2025",
      time: "17:00 - 19:00",
      location: "Cancha Central",
      type: "match",
      description: "Partido amistoso contra el equipo del ITESM",
    },
    {
      id: 3,
      title: "Entrenamiento",
      date: "22 de mayo, 2025",
      time: "16:00 - 18:00",
      location: "Gimnasio Principal",
      type: "training",
      description: "Entrenamiento regular con enfoque en jugadas ofensivas",
    },
    {
      id: 4,
      title: "Torneo Regional",
      date: "28 de mayo, 2025",
      time: "09:00 - 18:00",
      location: "Polideportivo Municipal",
      type: "tournament",
      description: "Participación en el torneo regional universitario",
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-[#0a2158]" />
              Calendario de {teamName}
            </CardTitle>
            {isCoach && (
              <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Evento
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={es}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>

                <div className="mt-6 space-y-2">
                  <h3 className="font-medium text-sm text-gray-500">Tipos de Eventos</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Entrenamiento</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Partido</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Torneo</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium mb-2">Próximos Eventos</h3>
                  <p className="text-sm text-gray-600">
                    Tienes <span className="font-bold">{events.length}</span> eventos programados para este mes.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
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
                                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
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
                              <div className="flex flex-col items-end gap-2">
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

                                {isCoach && (
                                  <div className="flex gap-1 mt-2">
                                    <Button variant="outline" size="icon" className="h-8 w-8">
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-8 w-8 text-red-500">
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>

                            {isCoach && (
                              <div className="mt-4 pt-4 border-t">
                                <Button variant="outline" size="sm" className="text-[#0a2158]">
                                  <Users className="mr-2 h-4 w-4" />
                                  Tomar Asistencia
                                </Button>
                              </div>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
