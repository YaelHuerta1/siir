"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CheckCircle, AlertCircle, Calendar, FileText, Users, Clock, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function NotificationsPanel() {
  const [activeTab, setActiveTab] = useState("todas")

  // Datos de ejemplo para las notificaciones
  const notifications = [
    {
      id: 1,
      title: "Documentos pendientes",
      message: "Hay 8 estudiantes con documentos pendientes de entrega.",
      type: "warning",
      date: "Hace 2 horas",
      read: false,
      icon: FileText,
      action: "Ver Documentos",
    },
    {
      id: 2,
      title: "Nuevo entrenador registrado",
      message: "El entrenador Carlos Gutiérrez ha sido registrado en el sistema.",
      type: "info",
      date: "Hace 5 horas",
      read: false,
      icon: Users,
      action: "Ver Perfil",
    },
    {
      id: 3,
      title: "Próximo torneo",
      message: "El Torneo Regional Universitario comenzará en 15 días.",
      type: "event",
      date: "Hace 1 día",
      read: true,
      icon: Calendar,
      action: "Ver Detalles",
    },
    {
      id: 4,
      title: "Respaldo completado",
      message: "El respaldo diario del sistema se ha completado correctamente.",
      type: "success",
      date: "Hace 1 día",
      read: true,
      icon: CheckCircle,
      action: "Ver Registro",
    },
    {
      id: 5,
      title: "Solicitud de nuevo equipo",
      message: "Se ha recibido una solicitud para crear un nuevo equipo de Tenis.",
      type: "info",
      date: "Hace 2 días",
      read: true,
      icon: Users,
      action: "Revisar Solicitud",
    },
  ]

  // Filtrar notificaciones según la pestaña activa
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "todas") return true
    if (activeTab === "noLeidas") return !notification.read
    if (activeTab === "alertas") return notification.type === "warning"
    if (activeTab === "eventos") return notification.type === "event"
    return true
  })

  const markAllAsRead = () => {
    console.log("Marcar todas como leídas")
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <Bell className="mr-2 h-5 w-5 text-[#0a2158]" />
              Notificaciones
            </CardTitle>
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCircle className="mr-2 h-4 w-4" />
              Marcar todas como leídas
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <Tabs defaultValue="todas" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="todas">
                    Todas <Badge className="ml-2 bg-gray-100 text-gray-800">{notifications.length}</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="noLeidas">
                    No leídas{" "}
                    <Badge className="ml-2 bg-blue-100 text-blue-800">
                      {notifications.filter((n) => !n.read).length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="alertas">
                    Alertas{" "}
                    <Badge className="ml-2 bg-red-100 text-red-800">
                      {notifications.filter((n) => n.type === "warning").length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="eventos">
                    Eventos{" "}
                    <Badge className="ml-2 bg-purple-100 text-purple-800">
                      {notifications.filter((n) => n.type === "event").length}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-4">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border rounded-lg overflow-hidden ${
                      !notification.read ? "border-blue-300 bg-blue-50" : ""
                    }`}
                  >
                    <div className="p-4 flex items-start justify-between">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback
                            className={`${
                              notification.type === "warning"
                                ? "bg-red-100 text-red-600"
                                : notification.type === "info"
                                  ? "bg-blue-100 text-blue-600"
                                  : notification.type === "event"
                                    ? "bg-purple-100 text-purple-600"
                                    : "bg-green-100 text-green-600"
                            }`}
                          >
                            <notification.icon className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium flex items-center">
                            {notification.title}
                            {!notification.read && <span className="ml-2 w-2 h-2 rounded-full bg-blue-500"></span>}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{notification.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Button variant="outline" size="sm">
                          {notification.action}
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Bell className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <p>No hay notificaciones que mostrar.</p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
              <AlertCircle className="text-[#0a2158] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Configuración de Notificaciones:</strong> Puedes personalizar qué notificaciones recibes y
                  cómo se muestran en la sección de Configuración.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
