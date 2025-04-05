"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileUp, Loader2 } from "lucide-react"

export function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsUploading(true)

    // Simulação de upload
    setTimeout(() => {
      setIsUploading(false)
      window.location.href = "/processar"
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid w-full gap-2">
        <Label htmlFor="file" className="text-base">
          Selecione um arquivo (PDF, DOCX, TXT)
        </Label>
        <div className="border-2 border-dashed border-bizuPink-pastel rounded-lg p-8 text-center">
          <Input id="file" type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleFileChange} />
          {file ? (
            <div className="space-y-2">
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              <Button type="button" variant="outline" size="sm" onClick={() => setFile(null)} className="mt-2">
                Alterar arquivo
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <FileUp className="h-10 w-10 text-bizuPink-dark" />
              <Label htmlFor="file" className="cursor-pointer text-sm font-medium text-bizuPink-dark hover:underline">
                Clique para selecionar ou arraste um arquivo
              </Label>
              <p className="text-xs text-gray-500">Suportamos arquivos PDF, DOCX e TXT até 10MB</p>
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-bizuPink-dark hover:bg-bizuPink-dark/90 text-white"
        disabled={!file || isUploading}
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar e Processar"
        )}
      </Button>
    </form>
  )
}

