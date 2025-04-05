"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Pause, Play, SkipBack, SkipForward, Share2 } from "lucide-react"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"

export default function PodcastPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 3 minutos em segundos

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const handleSliderChange = (value: number[]) => {
    setCurrentTime(value[0])
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
        <h1 className="text-3xl font-bold text-gray-800">Podcast (Áudio-Resumo)</h1>
      </div>

      <Card className="border-bizuPink-soft mb-8">
        <CardHeader className="bg-bizuPink-light/50 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Introdução à Física Quântica</CardTitle>
            <Badge variant="outline" className="bg-white">
              Podcast
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-bizuPink-vibrant rounded-full flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-bizuPink-dark rounded-full"></div>
              </div>
            </div>

            <div className="w-full space-y-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                onValueChange={handleSliderChange}
                className="w-full"
              />

              <div className="flex justify-center items-center gap-4">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <SkipBack className="h-5 w-5" />
                  <span className="sr-only">Voltar 10 segundos</span>
                </Button>

                <Button
                  onClick={togglePlayPause}
                  className="h-14 w-14 rounded-full bg-bizuPink-dark hover:bg-bizuPink-dark/90"
                >
                  {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white ml-1" />}
                  <span className="sr-only">{isPlaying ? "Pausar" : "Reproduzir"}</span>
                </Button>

                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <SkipForward className="h-5 w-5" />
                  <span className="sr-only">Avançar 10 segundos</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-6 flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Baixar MP3
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Compartilhar
            </Button>
          </div>
          <Button className="bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white">Salvar na Biblioteca</Button>
        </CardFooter>
      </Card>

      <div className="flex justify-center gap-4">
        <Button variant="outline" className="gap-2">
          Ajustar Velocidade
        </Button>
        <Button variant="outline" className="gap-2">
          Escolher Voz
        </Button>
      </div>
    </div>
  )
}

