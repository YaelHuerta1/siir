import Image from "next/image"
import RecoveryForm from "@/components/recovery-form"

export default function RecoveryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full bg-[#0a2158] py-4 px-6">
        <div className="max-w-screen-xl mx-auto">
          <Image
            src="/logo-tecnm-blanco.png"
            alt="Tecnológico Nacional de México"
            width={200}
            height={60}
            className="h-auto"
          />
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-4">
        <RecoveryForm />
      </div>
    </main>
  )
}
