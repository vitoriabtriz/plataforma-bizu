import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function PerguntasPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/processar">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Lista de Perguntas</h1>
      </div>

      <Card className="border-bizuPink-soft mb-8">
        <CardHeader className="bg-bizuPink-light/50 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Introdução à Física Quântica</CardTitle>
            <Badge variant="outline" className="bg-white">
              Perguntas
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                1. Qual dos seguintes NÃO é um conceito fundamental da física quântica?
              </h3>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Dualidade onda-partícula</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Princípio da incerteza de Heisenberg</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="option-3" />
                  <Label htmlFor="option-3">Lei da conservação de energia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-4" id="option-4" />
                  <Label htmlFor="option-4">Emaranhamento quântico</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                2. Quem propôs a interpretação de muitos mundos da mecânica quântica?
              </h3>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="q2-option-1" />
                  <Label htmlFor="q2-option-1">Niels Bohr</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="q2-option-2" />
                  <Label htmlFor="q2-option-2">Werner Heisenberg</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="q2-option-3" />
                  <Label htmlFor="q2-option-3">Hugh Everett III</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-4" id="q2-option-4" />
                  <Label htmlFor="q2-option-4">Albert Einstein</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                3. Qual das seguintes NÃO é uma aplicação prática da física quântica?
              </h3>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="q3-option-1" />
                  <Label htmlFor="q3-option-1">Lasers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="q3-option-2" />
                  <Label htmlFor="q3-option-2">Motores a combustão</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="q3-option-3" />
                  <Label htmlFor="q3-option-3">Computação quântica</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-4" id="q3-option-4" />
                  <Label htmlFor="q3-option-4">Ressonância magnética nuclear</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">4. O que afirma o princípio da incerteza de Heisenberg?</h3>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="q4-option-1" />
                  <Label htmlFor="q4-option-1">
                    Não é possível conhecer simultaneamente a posição e o momento de uma partícula com precisão
                    arbitrária
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="q4-option-2" />
                  <Label htmlFor="q4-option-2">A energia não pode ser criada nem destruída, apenas transformada</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="q4-option-3" />
                  <Label htmlFor="q4-option-3">Partículas quânticas podem estar em dois lugares ao mesmo tempo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-4" id="q4-option-4" />
                  <Label htmlFor="q4-option-4">A luz sempre se comporta como uma onda</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-6 flex justify-between">
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
          <Button className="bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white">Salvar na Biblioteca</Button>
        </CardFooter>
      </Card>

      <div className="flex justify-center gap-4">
        <Button variant="outline" className="gap-2">
          Alterar Tipo de Perguntas
        </Button>
        <Button variant="outline" className="gap-2">
          Gerar Mais Perguntas
        </Button>
      </div>
    </div>
  )
}

