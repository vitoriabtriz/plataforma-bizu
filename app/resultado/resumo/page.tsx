import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function ResumoPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/processar">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Resumo</h1>
      </div>

      <Card className="border-bizuPink-soft mb-8">
        <CardHeader className="bg-bizuPink-light/50 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Introdução à Física Quântica</CardTitle>
            <Badge variant="outline" className="bg-white">
              Resumo
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose prose-pink max-w-none">
            <h2>Resumo: Introdução à Física Quântica</h2>

            <p>
              A física quântica é um ramo da física que estuda fenômenos em escalas atômicas e subatômicas, desenvolvida
              no início do século XX. Ela difere fundamentalmente da física clássica ao introduzir conceitos
              revolucionários.
            </p>

            <p>
              <strong>Conceitos fundamentais:</strong>
            </p>

            <ul>
              <li>
                Dualidade onda-partícula: entidades quânticas podem se comportar simultaneamente como ondas e
                partículas.
              </li>
              <li>
                Princípio da incerteza de Heisenberg: impossibilidade de conhecer com precisão absoluta a posição e o
                momento de uma partícula ao mesmo tempo.
              </li>
              <li>Superposição quântica: sistemas quânticos podem existir em múltiplos estados simultaneamente.</li>
              <li>Emaranhamento quântico: correlação entre partículas independentemente da distância que as separa.</li>
            </ul>

            <p>
              <strong>Aplicações práticas:</strong>
            </p>

            <ul>
              <li>Tecnologia: lasers, semicondutores</li>
              <li>Medicina: ressonância magnética nuclear</li>
              <li>Informática: computação quântica, criptografia quântica</li>
              <li>Pesquisa: microscopia de tunelamento</li>
            </ul>

            <p>
              <strong>Interpretações principais:</strong>
            </p>

            <ul>
              <li>Interpretação de Copenhague (Bohr e Heisenberg): a mais tradicional</li>
              <li>Interpretação de muitos mundos (Everett): sugere universos paralelos</li>
              <li>Interpretação de Bohm: teoria de variáveis ocultas</li>
            </ul>

            <p>
              Apesar do sucesso empírico da física quântica, sua interpretação filosófica continua sendo objeto de
              debate entre físicos e filósofos da ciência.
            </p>
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
          Ajustar Nível de Detalhamento
        </Button>
        <Button variant="outline" className="gap-2">
          Personalizar Formato
        </Button>
      </div>
    </div>
  )
}

