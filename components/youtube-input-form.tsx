"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Youtube, Loader2 } from "lucide-react"

export function YoutubeInputForm() {
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!youtubeUrl) return

    setIsProcessing(true)

    // Simulação de processamento
    setTimeout(() => {
      setIsProcessing(false)
      window.location.href = "/processar"
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid w-full gap-2">
        <Label htmlFor="youtube" className="text-base">
          Insira o link do vídeo do YouTube
        </Label>
        <div className="flex items-center border-2 border-bizuPink-pastel rounded-lg overflow-hidden">
          <div className="bg-bizuPink-light p-3">
            <Youtube className="h-5 w-5 text-bizuPink-dark" />
          </div>
          <Input
            id="youtube"
            type="url"
            placeholder="https://youtube.com/watch?v=..."
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            required
          />
        </div>
        <p className="text-xs text-gray-500">
          Cole o link de qualquer vídeo do YouTube para extrair e transformar seu conteúdo
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white"
        disabled={!youtubeUrl || isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processando...
          </>
        ) : (
          "Processar Vídeo"
        )}
      </Button>
    </form>
  )
}

