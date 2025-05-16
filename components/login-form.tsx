"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginForm() {
  const [controlNumber, setControlNumber] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Aquí iría la lógica de autenticación
    console.log("Iniciando sesión con:", { controlNumber, password })

    // Simular una petición
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="controlNumber">Número de Control</Label>
            <Input
              id="controlNumber"
              type="text"
              value={controlNumber}
              onChange={(e) => setControlNumber(e.target.value)}
              placeholder="20140956"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <Button type="submit" className="w-full h-12 bg-[#0a2158] hover:bg-[#0c2a6e]" disabled={loading}>
            {loading ? "Procesando..." : "Iniciar sesión"}
          </Button>

          <div className="text-center mt-4">
            <Link href="/recuperacion" className="text-[#0a2158] hover:underline text-sm">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
