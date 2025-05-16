"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, MapPin, Users, Plus, MoreHorizontal, Search } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  // Datos de ejemplo para los eventos
  const events = [
    {
      id: 1,
      title: "Torneo Regional Universitario",
      date: "28 de mayo, 2025",
      time: "09:00 - 18:00",
      location: "Polideportivo Municipal",
      type: "tournament",
      equipos: ["Basquetbol Varonil", "Voleibol Femenil", "Fútbol Varonil", "Atletismo", "Natación"],
      description: "Torneo regional con participación de diversas instituciones educativas.",
    },
    {
      id: 2,
      title: "Entrenamiento Basquetbol Varonil",
      date: "15 de mayo, 2025",
      time: "16:00 - 18:00",
      location: "Gimnasio Principal",
      type: "training",
      equipos: ["Basquetbol Varonil"],
      description: "Entrenamiento regular con enfoque en técnicas defensivas.",
    },
    {
      id: 3,
      title: "Partido Amistoso vs ITESM",
      date: "20 de mayo, 2025",
      time: "17:00 - 19:00",
      location: "Cancha Central",
      type: "match",
      equipos: ["Basquetbol Varonil"],
      description: "Partido amistoso contra el equipo del ITESM.",
    },
    {
      id: 4,
      title: "Competencia Estatal de Atletismo",
      date: "10 de junio, 2025",
      time: "08:00 - 17:00",
      location: "Pista Atlética Universitaria",
      type: "tournament",
      equipos: ["Atletismo"],
      description: "Competencia estatal de atletismo con participación de diversas categorías.",
    },
    {
      id: 5,
      title: "Presentación Cultural",
      date: "30 de mayo, 2025",
      time: "19:00 - 21:00",
      location: "Auditorio Principal",
      type: "cultural",
      equipos: ["Danza Folklórica"],
      description: "Presentación cultural de fin de semestre.",
    },
  ]

  // Filtrar eventos según la búsqueda y la pestaña activa
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.equipos.some((equipo) => equipo.toLowerCase().includes(searchTerm.toLowerCase()))

    if (activeTab === "todos") return matchesSearch
    if (activeTab === "torneos") return matchesSearch && event.type === "tournament"
    if (activeTab === "entrenamientos") return matchesSearch && event.type === "training"
    if (activeTab === "partidos") return matchesSearch && event.type === "match"
    if (activeTab === "culturales") return matchesSearch && event.type === "cultural"
    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-[#0a2158]" />
              Calendario de Eventos
            </CardTitle>
            <Button className="bg-[#0a2158] hover:bg-[#0c2a6e]">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Evento
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="space-y-4">
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

                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Buscar evento..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <Tabs defaultValue="todos" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="w-full grid grid-cols-2 mb-2">
                      <TabsTrigger value="todos">Todos</TabsTrigger>
                      <TabsTrigger value="torneos">Torneos</TabsTrigger>
                    </TabsList>
                    <TabsList className="w-full grid grid-cols-3">
                      <TabsTrigger value="entrenamientos">Entrenamientos</TabsTrigger>
                      <TabsTrigger value="partidos">Partidos</TabsTrigger>
                      <TabsTrigger value="culturales">Culturales</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium text-sm text-gray-500">Tipos de Eventos</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm">Torneos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Entrenamientos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Partidos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                        <span className="text-sm">Eventos Culturales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="space-y-4">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
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
                                    : event.type === "tournament"
                                      ? "bg-purple-600"
                                      : "bg-amber-600"
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
                                    <div className="flex items-center">
                                      <Users className="mr-2 h-4 w-4 text-[#0a2158]" />
                                      <span>
                                        {event.equipos.length} equipo{event.equipos.length !== 1 ? "s" : ""}
                                      </span>
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
                                          : event.type === "tournament"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-amber-100 text-amber-800"
                                    }`}
                                  >
                                    {event.type === "training"
                                      ? "Entrenamiento"
                                      : event.type === "match"
                                        ? "Partido"
                                        : event.type === "tournament"
                                          ? "Torneo"
                                          : "Cultural"}
                                  </Badge>

                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="outline" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                                      <DropdownMenuItem>Editar Evento</DropdownMenuItem>
                                      <DropdownMenuItem>Enviar Recordatorio</DropdownMenuItem>
                                      <DropdownMenuItem className="text-red-600">Cancelar Evento</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>

                              {event.equipos.length > 0 && (
                                <div className="mt-4 pt-4 border-t">
                                  <h4 className="text-sm font-medium mb-2">Equipos participantes:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {event.equipos.map((equipo, idx) => (
                                      <Badge key={idx} variant="outline" className="bg-gray-50">
                                        {equipo}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                      <p>No se encontraron eventos que coincidan con la búsqueda.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
