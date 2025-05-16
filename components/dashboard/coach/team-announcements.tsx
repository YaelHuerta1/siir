"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, AlertCircle, Bell, Calendar, Info, Edit, Trash2 } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface TeamAnnouncementsProps {
  teamName: string
}

export default function TeamAnnouncements({ teamName }: TeamAnnouncementsProps) {
  const [newMessage, setNewMessage] = useState("")
  const [newTitle, setNewTitle] = useState("")

  // Datos de ejemplo para los anuncios
  const announcements = [
    {
      id: 1,
      title: "Cambio de horario de entrenamiento",
      message:
        "Se les informa que a partir de la próxima semana, los entrenamientos de los miércoles se realizarán de 17:00 a 19:00 horas debido a mantenimiento del gimnasio.",
      author: "Roberto Sánchez",
      authorRole: "Entrenador principal",
      date: new Date(2025, 4, 8), // 8 de mayo de 2025
      type: "info",
      authorAvatar: "/placeholder.svg?key=j6b4x",
    },
    {
      id: 2,
      title: "Próximo torneo regional",
      message:
        "Les recordamos que el torneo regional se llevará a cabo el 28 de mayo. Es obligatorio asistir a todos los entrenamientos previos para poder participar. Favor de confirmar su asistencia.",
      author: "Roberto Sánchez",
      authorRole: "Entrenador principal",
      date: new Date(2025, 4, 5), // 5 de mayo de 2025
      type: "important",
      authorAvatar: "/placeholder.svg?key=1ys7l",
    },
    {
      id: 3,
      title: "Entrega de uniformes",
      message:
        "Los nuevos uniformes ya están disponibles. Pueden pasar a recogerlos en la oficina de actividades extraescolares de lunes a viernes de 10:00 a 14:00 horas.",
      author: "Departamento de Extraescolares",
      authorRole: "Administración",
      date: new Date(2025, 4, 1), // 1 de mayo de 2025
      type: "general",
      authorAvatar: "/admin-portrait.png",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enviando anuncio:", { title: newTitle, message: newMessage })
    // Aquí iría la lógica para enviar el anuncio
    setNewTitle("")
    setNewMessage("")
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-[#0a2158]" />
              Anuncios para {teamName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="mb-8 space-y-4 border p-4 rounded-lg bg-gray-50">
              <div className="space-y-2">
                <Label htmlFor="title">Título del anuncio</Label>
                <Input
                  id="title"
                  placeholder="Escribe un título para el anuncio"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu anuncio aquí..."
                  rows={4}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-[#0a2158] hover:bg-[#0c2a6e]">
                  <Send className="mr-2 h-4 w-4" />
                  Publicar Anuncio
                </Button>
              </div>
            </form>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`border rounded-lg overflow-hidden ${
                    announcement.type === "important"
                      ? "border-red-300 bg-red-50"
                      : announcement.type === "info"
                        ? "border-blue-300 bg-blue-50"
                        : "border-gray-200"
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage
                            src={announcement.authorAvatar || "/placeholder.svg"}
                            alt={announcement.author}
                          />
                          <AvatarFallback className="bg-[#0a2158] text-white">
                            {announcement.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg flex items-center">
                            {announcement.title}
                            {announcement.type === "important" && <AlertCircle className="ml-2 h-4 w-4 text-red-500" />}
                            {announcement.type === "info" && <Info className="ml-2 h-4 w-4 text-blue-500" />}
                          </h3>
                          <div className="text-sm text-gray-500 mt-1 flex items-center">
                            <span className="font-medium mr-1">{announcement.author}</span>
                            <span className="text-gray-400 mr-1">•</span>
                            <span>{announcement.authorRole}</span>
                            <span className="text-gray-400 mx-1">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{format(announcement.date, "d 'de' MMMM, yyyy", { locale: es })}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-3 text-gray-700">{announcement.message}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <Bell className="text-[#0a2158] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Los anuncios se enviarán automáticamente por correo electrónico a todos los
                  miembros del equipo.
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Utiliza la etiqueta "Importante" solo para comunicaciones urgentes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
