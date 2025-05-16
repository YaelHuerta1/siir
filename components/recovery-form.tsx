"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecoveryForm() {
  const [controlNumber, setControlNumber] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    // Aquí iría la lógica de recuperación de contraseña
    console.log("Recuperando cuenta con:", { controlNumber, email })

    // Simular una petición
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setMessage("Se ha enviado un enlace de recuperación a tu correo electrónico.")
    setLoading(false)
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Recuperación de Cuenta</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-6 text-gray-600">
          Escribe tu dirección de correo electrónico Institucional asociado a al SIIR
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="controlNumber">Número de Control</Label>
            <Input
              id="controlNumber"
              type="text"
              value={controlNumber}
              onChange={(e) => setControlNumber(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>

          {message && <div className="p-3 bg-green-50 text-green-700 rounded-md text-center">{message}</div>}

          <div className="flex justify-center">
            <Button type="submit" className="px-8 h-12 bg-[#0a2158] hover:bg-[#0c2a6e]" disabled={loading}>
              {loading ? "Procesando..." : "Restaurar contraseña"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
