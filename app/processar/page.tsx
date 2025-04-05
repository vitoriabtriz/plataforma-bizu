import { ProcessingOptions } from "@/components/processing-options"
import { ExtractedContent } from "@/components/extracted-content"

export default function ProcessarPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Processamento de Conteúdo</h1>
      <p className="text-gray-600 mb-8">O conteúdo foi extraído com sucesso. Escolha como deseja transformá-lo.</p>

      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        <ExtractedContent />
        <ProcessingOptions />
      </div>
    </div>
  )
}

