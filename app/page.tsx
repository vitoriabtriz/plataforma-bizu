import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploadForm } from "@/components/file-upload-form"
import { UrlInputForm } from "@/components/url-input-form"
import { YoutubeInputForm } from "@/components/youtube-input-form"
import { RecentContent } from "@/components/recent-content"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="container py-8">
      <HeroSection />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Adicionar Novo Conteúdo</h2>
        <Tabs defaultValue="arquivo" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="arquivo"
              className="data-[state=active]:bg-bizuPink-vibrant data-[state=active]:text-white"
            >
              Arquivo
            </TabsTrigger>
            <TabsTrigger value="url" className="data-[state=active]:bg-bizuPink-vibrant data-[state=active]:text-white">
              URL
            </TabsTrigger>
            <TabsTrigger
              value="youtube"
              className="data-[state=active]:bg-bizuPink-vibrant data-[state=active]:text-white"
            >
              YouTube
            </TabsTrigger>
          </TabsList>
          <Card className="border-bizuPink-soft">
            <CardContent className="pt-6">
              <TabsContent value="arquivo" className="mt-0">
                <FileUploadForm />
              </TabsContent>
              <TabsContent value="url" className="mt-0">
                <UrlInputForm />
              </TabsContent>
              <TabsContent value="youtube" className="mt-0">
                <YoutubeInputForm />
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Conteúdos Recentes</h2>
        <RecentContent />
      </div>
    </div>
  )
}

