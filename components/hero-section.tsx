import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Headphones, ListChecks } from "lucide-react"

export function HeroSection() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Transforme qualquer conteúdo em material de estudo
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Faça upload de arquivos, insira URLs ou links do YouTube e transforme-os em resumos, podcasts, flashcards e
        muito mais.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-bizuPink-light rounded-full flex items-center justify-center mb-3">
            <FileText className="h-6 w-6 text-bizuPink-dark" />
          </div>
          <span className="font-medium">Resumos</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-bizuPink-light rounded-full flex items-center justify-center mb-3">
            <ListChecks className="h-6 w-6 text-bizuPink-dark" />
          </div>
          <span className="font-medium">Perguntas</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-bizuPink-light rounded-full flex items-center justify-center mb-3">
            <BookOpen className="h-6 w-6 text-bizuPink-dark" />
          </div>
          <span className="font-medium">Flashcards</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-bizuPink-light rounded-full flex items-center justify-center mb-3">
            <Headphones className="h-6 w-6 text-bizuPink-dark" />
          </div>
          <span className="font-medium">Podcasts</span>
        </div>
      </div>

      <Button className="bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white px-8 py-6 text-lg h-auto">
        Comece Agora
      </Button>
    </div>
  )
}

