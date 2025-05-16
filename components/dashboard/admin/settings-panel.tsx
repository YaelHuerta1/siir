"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings, Save } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("general")
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    // Simular guardado
    setTimeout(() => {
      setSaving(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Settings className="mr-2 h-5 w-5 text-[#0a2158]" />
              Configuración del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
                <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
                <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution-name">Nombre de la Institución</Label>
                    <Input id="institution-name" defaultValue="Tecnológico Nacional de México - Campus Querétaro" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department-name">Nombre del Departamento</Label>
                    <Input id="department-name" defaultValue="Departamento de Actividades Extraescolares" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Correo de Contacto</Label>
                    <Input id="contact-email" type="email" defaultValue="extraescolares@queretaro.tecnm.mx" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Teléfono de Contacto</Label>
                    <Input id="contact-phone" defaultValue="442-123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="welcome-message">Mensaje de Bienvenida</Label>
                    <Textarea
                      id="welcome-message"
                      rows={4}
                      defaultValue="Bienvenido al Sistema de Gestión de Equipos Representativos del Tecnológico Nacional de México - Campus Querétaro."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenance-mode">Modo de Mantenimiento</Label>
                      <p className="text-sm text-gray-500">
                        Activa el modo de mantenimiento para realizar actualizaciones
                      </p>
                    </div>
                    <Switch id="maintenance-mode" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notificaciones" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Notificaciones por Correo</Label>
                      <p className="text-sm text-gray-500">
                        Enviar notificaciones por correo electrónico a los usuarios
                      </p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="event-reminders">Recordatorios de Eventos</Label>
                      <p className="text-sm text-gray-500">
                        Enviar recordatorios de eventos próximos a los participantes
                      </p>
                    </div>
                    <Switch id="event-reminders" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="document-alerts">Alertas de Documentos</Label>
                      <p className="text-sm text-gray-500">
                        Notificar cuando los documentos estén pendientes o próximos a vencer
                      </p>
                    </div>
                    <Switch id="document-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="admin-notifications">Notificaciones para Administradores</Label>
                      <p className="text-sm text-gray-500">
                        Recibir notificaciones sobre cambios importantes en el sistema
                      </p>
                    </div>
                    <Switch id="admin-notifications" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notification-frequency">Frecuencia de Notificaciones</Label>
                    <select
                      id="notification-frequency"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="immediate">Inmediata</option>
                      <option value="daily">Diaria (Resumen)</option>
                      <option value="weekly">Semanal (Resumen)</option>
                    </select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="seguridad" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Autenticación de Dos Factores</Label>
                      <p className="text-sm text-gray-500">
                        Requerir autenticación de dos factores para administradores
                      </p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Tiempo de Sesión</Label>
                      <p className="text-sm text-gray-500">
                        Cerrar sesión automáticamente después de un período de inactividad
                      </p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeout-duration">Duración de la Sesión (minutos)</Label>
                    <Input id="timeout-duration" type="number" defaultValue="30" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-policy">Política de Contraseñas</Label>
                    <select
                      id="password-policy"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="standard">Estándar (8 caracteres mínimo)</option>
                      <option value="strong">Fuerte (8 caracteres, mayúsculas, números)</option>
                      <option value="very-strong">Muy Fuerte (12 caracteres, mayúsculas, números, símbolos)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Expiración de Contraseñas</Label>
                    <select
                      id="password-expiry"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="never">Nunca</option>
                      <option value="30">30 días</option>
                      <option value="60">60 días</option>
                      <option value="90">90 días</option>
                    </select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="avanzado" className="mt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Frecuencia de Respaldo</Label>
                    <select
                      id="backup-frequency"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="daily">Diario</option>
                      <option value="weekly">Semanal</option>
                      <option value="monthly">Mensual</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backup-time">Hora de Respaldo</Label>
                    <Input id="backup-time" type="time" defaultValue="03:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="log-retention">Retención de Registros</Label>
                      <p className="text-sm text-gray-500">Mantener registros de actividad del sistema</p>
                    </div>
                    <Switch id="log-retention" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="log-retention-period">Período de Retención (días)</Label>
                    <Input id="log-retention-period" type="number" defaultValue="90" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="debug-mode">Modo de Depuración</Label>
                      <p className="text-sm text-gray-500">Activar registro detallado para solución de problemas</p>
                    </div>
                    <Switch id="debug-mode" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-key">Clave API (Solo para Integración)</Label>
                    <div className="flex">
                      <Input
                        id="api-key"
                        type="password"
                        defaultValue="sk_live_51NXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        className="rounded-r-none"
                      />
                      <Button variant="outline" className="rounded-l-none">
                        Regenerar
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Esta clave es para integraciones con sistemas externos. Manténgala segura.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end mt-6 pt-6 border-t">
              <Button onClick={handleSave} disabled={saving} className="bg-[#0a2158] hover:bg-[#0c2a6e]">
                {saving ? (
                  <>
                    <span className="animate-spin mr-2">⟳</span>
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Configuración
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
