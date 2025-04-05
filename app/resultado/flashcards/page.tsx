"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function FlashcardsPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const flashcards = [
    {
      question: "O que é a dualidade onda-partícula?",
      answer:
        "É um conceito da física quântica que afirma que entidades quânticas podem se comportar tanto como ondas quanto como partículas, dependendo do experimento realizado.",
    },
    {
      question: "O que afirma o princípio da incerteza de Heisenberg?",
      answer:
        "Não é possível conhecer simultaneamente a posição e o momento de uma partícula com precisão arbitrária. Quanto mais precisamente se conhece uma dessas grandezas, menos precisamente se pode conhecer a outra.",
    },
    {
      question: "O que é superposição quântica?",
      answer:
        "É um princípio da física quântica que afirma que sistemas quânticos podem existir em múltiplos estados simultaneamente, até que sejam medidos ou observados.",
    },
    {
      question: "O que é emaranhamento quântico?",
      answer:
        "É um fenômeno quântico onde partículas se tornam correlacionadas de tal forma que o estado de uma afeta instantaneamente o estado da outra, independentemente da distância que as separa.",
    },
  ]

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1)
      setShowAnswer(false)
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setShowAnswer(false)
    }
  }

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/processar">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Flashcards</h1>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Introdução à Física Quântica</h2>
        <Badge variant="outline" className="bg-white">
          {currentCard + 1} de {flashcards.length}
        </Badge>
      </div>

      <Card className="border-bizuPink-soft mb-8 h-80 cursor-pointer" onClick={toggleAnswer}>
        <CardContent className="p-0 h-full flex items-center justify-center">
          <div className="text-center p-8 w-full">
            {!showAnswer ? (
              <div className="animate-pulse-slow">
                <h3 className="text-2xl font-bold mb-4">{flashcards[currentCard].question}</h3>
                <p className="text-sm text-gray-500">Clique para ver a resposta</p>
              </div>
            ) : (
              <div className="animate-pulse-slow">
                <p className="text-lg">{flashcards[currentCard].answer}</p>
                <p className="text-sm text-gray-500 mt-4">Clique para ver a pergunta</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mb-8">
        <Button variant="outline" size="icon" onClick={prevCard} disabled={currentCard === 0}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Baixar PDF
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" />
            Compartilhar
          </Button>
        </div>

        <Button variant="outline" size="icon" onClick={nextCard} disabled={currentCard === flashcards.length - 1}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>

      <div className="flex justify-center">
        <Button className="bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white">Salvar na Biblioteca</Button>
      </div>
    </div>
  )
}

