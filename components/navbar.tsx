import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, User } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-bizuPink-dark" />
          <Link href="/" className="text-xl font-bold text-bizuPink-dark">
            Bizu
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:text-bizuPink-dark">
            Dashboard
          </Link>
          <Link href="/biblioteca" className="text-sm font-medium hover:text-bizuPink-dark">
            Minha Biblioteca
          </Link>
          <Link href="/descobrir" className="text-sm font-medium hover:text-bizuPink-dark">
            Descobrir
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Search className="h-5 w-5" />
            <span className="sr-only">Pesquisar</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <User className="h-5 w-5" />
            <span className="sr-only">Perfil</span>
          </Button>
          <Button className="hidden md:flex bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white">
            Adicionar Conteúdo
          </Button>
        </div>
      </div>
    </header>
  )
}

