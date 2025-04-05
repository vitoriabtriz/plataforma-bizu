import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExtractedContent() {
  return (
    <Card className="border-bizuPink-soft">
      <CardHeader className="bg-bizuPink-light/50 pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Introdução à Física Quântica</CardTitle>
          <Badge variant="outline" className="bg-white">
            PDF
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 max-h-[70vh] overflow-y-auto">
        <div className="prose prose-pink max-w-none">
          <h2>Introdução à Física Quântica</h2>

          <p>
            A física quântica, também conhecida como mecânica quântica, é um ramo da física que lida com fenômenos em
            escalas atômicas e subatômicas. Desenvolvida no início do século XX, ela revolucionou nossa compreensão do
            mundo microscópico.
          </p>

          <h3>Princípios Fundamentais</h3>

          <p>Diferentemente da física clássica, a física quântica introduz conceitos como:</p>

          <ul>
            <li>
              <strong>Dualidade onda-partícula:</strong> Entidades quânticas podem se comportar tanto como ondas quanto
              como partículas.
            </li>
            <li>
              <strong>Princípio da incerteza de Heisenberg:</strong> Não é possível conhecer simultaneamente a posição e
              o momento de uma partícula com precisão arbitrária.
            </li>
            <li>
              <strong>Superposição quântica:</strong> Sistemas quânticos podem existir em múltiplos estados
              simultaneamente.
            </li>
            <li>
              <strong>Emaranhamento quântico:</strong> Partículas podem estar correlacionadas de tal forma que o estado
              de uma afeta instantaneamente o estado da outra, independentemente da distância.
            </li>
          </ul>

          <h3>Aplicações Práticas</h3>

          <p>A física quântica não é apenas um campo teórico; ela tem numerosas aplicações práticas:</p>

          <ul>
            <li>Lasers e tecnologia de semicondutores</li>
            <li>Ressonância magnética nuclear (RMN) em medicina</li>
            <li>Computação quântica</li>
            <li>Criptografia quântica</li>
            <li>Microscopia de tunelamento</li>
          </ul>

          <h3>Interpretações da Mecânica Quântica</h3>

          <p>Existem várias interpretações da mecânica quântica, incluindo:</p>

          <ul>
            <li>
              <strong>Interpretação de Copenhague:</strong> A mais tradicional, proposta por Niels Bohr e Werner
              Heisenberg.
            </li>
            <li>
              <strong>Interpretação de muitos mundos:</strong> Proposta por Hugh Everett III, sugere que todas as
              possibilidades quânticas ocorrem em universos paralelos.
            </li>
            <li>
              <strong>Interpretação de Bohm:</strong> Uma teoria de variáveis ocultas que mantém o determinismo.
            </li>
          </ul>

          <p>
            Apesar de seu sucesso empírico, a interpretação filosófica da mecânica quântica continua sendo um campo de
            debate ativo entre físicos e filósofos da ciência.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

