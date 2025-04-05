"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Headphones, BookOpen, ListChecks, Loader2 } from "lucide-react"

export function ProcessingOptions() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleProcess = (option: string) => {
    setSelectedOption(option)
    setIsProcessing(true)

    // Simulação de processamento
    setTimeout(() => {
      setIsProcessing(false)
      window.location.href = `/resultado/${option}`
    }, 2500)
  }

  return (
    <Card className="border-bizuPink-soft">
      <CardHeader className="bg-bizuPink-light/50">
        <CardTitle className="text-xl font-bold">Opções de Transformação</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-sm text-gray-600 mb-4">Escolha como deseja transformar o conteúdo extraído:</p>

        <Button
          variant="outline"
          className={`w-full justify-start gap-3 p-4 h-auto ${selectedOption === "resumo" ? "border-bizuPink-dark bg-bizuPink-light/50" : ""}`}
          onClick={() => handleProcess("resumo")}
          disabled={isProcessing}
        >
          <div className="w-10 h-10 rounded-full bg-bizuPink-light flex items-center justify-center">
            <FileText className="h-5 w-5 text-bizuPink-dark" />
          </div>
          <div className="text-left">
            <div className="font-medium">Resumo</div>
            <div className="text-xs text-gray-500">Texto condensado com os pontos principais</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className={`w-full justify-start gap-3 p-4 h-auto ${selectedOption === "perguntas" ? "border-bizuPink-dark bg-bizuPink-light/50" : ""}`}
          onClick={() => handleProcess("perguntas")}
          disabled={isProcessing}
        >
          <div className="w-10 h-10 rounded-full bg-bizuPink-light flex items-center justify-center">
            <ListChecks className="h-5 w-5 text-bizuPink-dark" />
          </div>
          <div className="text-left">
            <div className="font-medium">Lista de Perguntas</div>
            <div className="text-xs text-gray-500">Questões para testar seu conhecimento</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className={`w-full justify-start gap-3 p-4 h-auto ${selectedOption === "flashcards" ? "border-bizuPink-dark bg-bizuPink-light/50" : ""}`}
          onClick={() => handleProcess("flashcards")}
          disabled={isProcessing}
        >
          <div className="w-10 h-10 rounded-full bg-bizuPink-light flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-bizuPink-dark" />
          </div>
          <div className="text-left">
            <div className="font-medium">Flashcards</div>
            <div className="text-xs text-gray-500">Cartões para memorização ativa</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className={`w-full justify-start gap-3 p-4 h-auto ${selectedOption === "podcast" ? "border-bizuPink-dark bg-bizuPink-light/50" : ""}`}
          onClick={() => handleProcess("podcast")}
          disabled={isProcessing}
        >
          <div className="w-10 h-10 rounded-full bg-bizuPink-light flex items-center justify-center">
            <Headphones className="h-5 w-5 text-bizuPink-dark" />
          </div>
          <div className="text-left">
            <div className="font-medium">Podcast (Áudio-Resumo)</div>
            <div className="text-xs text-gray-500">Versão narrada do conteúdo</div>
          </div>
        </Button>
      </CardContent>
      <CardFooter className="bg-gray-50 p-6">
        {isProcessing && (
          <div className="w-full flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-bizuPink-dark" />
            <span className="text-sm">Processando {selectedOption}...</span>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

