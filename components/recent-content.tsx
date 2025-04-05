import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Headphones, ListChecks, MoreHorizontal } from "lucide-react"

export function RecentContent() {
  const recentItems = [
    {
      id: 1,
      title: "Introdução à Física Quântica",
      type: "PDF",
      date: "Hoje, 14:30",
      processed: true,
    },
    {
      id: 2,
      title: "História do Brasil - Período Colonial",
      type: "URL",
      date: "Ontem, 10:15",
      processed: true,
    },
    {
      id: 3,
      title: "Aula de Cálculo Diferencial",
      type: "YouTube",
      date: "23/03/2023",
      processed: true,
    },
    {
      id: 4,
      title: "Biologia Celular - Capítulo 3",
      type: "DOCX",
      date: "20/03/2023",
      processed: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recentItems.map((item) => (
        <Card key={item.id} className="overflow-hidden border-bizuPink-soft hover:shadow-md transition-shadow">
          <CardHeader className="bg-bizuPink-light/50 pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Opções</span>
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="bg-white text-xs">
                {item.type}
              </Badge>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
                <FileText className="h-3.5 w-3.5" />
                Resumo
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
                <ListChecks className="h-3.5 w-3.5" />
                Perguntas
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
                <BookOpen className="h-3.5 w-3.5" />
                Flashcards
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
                <Headphones className="h-3.5 w-3.5" />
                Podcast
              </Button>
            </div>
          </CardContent>
          <CardFooter className="pt-0 pb-4">
            <Button
              className="w-full mt-2 bg-bizuPink-vibrant hover:bg-bizuPink-dark text-white"
              disabled={!item.processed}
            >
              {item.processed ? "Visualizar Conteúdo" : "Processando..."}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

