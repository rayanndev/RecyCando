import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Leaf, MapPin, Search, Recycle, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">EcoDescarte</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Início
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Como Funciona
            </Link>
            <Link
              href="#tipos-residuos"
              className="text-sm font-medium relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Tipos de Resíduos
            </Link>
            <Link
              href="#pontos-coleta"
              className="text-sm font-medium relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Pontos de Coleta
            </Link>
            <Link
              href="#educacao"
              className="text-sm font-medium relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Educação Ambiental
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium relative after:absolute after:bg-green-600 after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Contato
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Descarte Responsável de Resíduos Sólidos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Ajudamos você a encontrar o local correto para descartar seus resíduos e contribuir para um planeta
                  mais limpo.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Pesquisar tipo de resíduo..."
                    className="w-full bg-white pl-8 rounded-full"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Encontrar Ponto de Coleta
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Como Funciona</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Descarte seus resíduos de forma correta em apenas três passos simples.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Search className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Identifique seu resíduo</h3>
                  <p className="text-gray-500">
                    Pesquise o tipo de resíduo que você precisa descartar e aprenda como separá-lo corretamente.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Encontre um ponto de coleta</h3>
                  <p className="text-gray-500">
                    Localize o ponto de coleta mais próximo de você que aceita o tipo de resíduo que você precisa
                    descartar.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Descarte corretamente</h3>
                  <p className="text-gray-500">
                    Leve seu resíduo até o ponto de coleta e faça o descarte seguindo as orientações do local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tipos-residuos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tipos de Resíduos</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Conheça os diferentes tipos de resíduos e como descartá-los corretamente.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  { title: "Eletrônicos", description: "Computadores, celulares, eletrodomésticos" },
                  { title: "Pilhas e Baterias", description: "Pilhas alcalinas, baterias de lítio" },
                  { title: "Óleo de Cozinha", description: "Óleo usado em frituras e preparo de alimentos" },
                  { title: "Medicamentos", description: "Remédios vencidos ou em desuso" },
                  { title: "Lâmpadas", description: "Fluorescentes, LED, incandescentes" },
                  { title: "Vidros", description: "Garrafas, potes, frascos" },
                  { title: "Plásticos", description: "Embalagens, sacolas, utensílios" },
                  { title: "Metais", description: "Latas, alumínio, ferro" },
                ].map((item, index) => (
                  <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full transition-all duration-300 hover:bg-green-50 hover:border-green-500 hover:text-green-600 hover:translate-y-[-2px]"
                      >
                        Saiba mais
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pontos-coleta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pontos de Coleta</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Encontre o ponto de coleta mais próximo de você para descartar seus resíduos.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder="Digite seu CEP ou endereço" className="flex-1" />
                  <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    Buscar
                  </Button>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Mapa de pontos de coleta será exibido aqui</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="educacao" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Educação Ambiental</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Aprenda mais sobre a importância da reciclagem e do descarte correto de resíduos.
                </p>
              </div>
              <div className="w-full max-w-2xl mx-auto">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <CardHeader>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <BookOpen className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="mt-4">Artigos e Guias</CardTitle>
                    <CardDescription>
                      Leia nossos artigos e guias sobre reciclagem, compostagem e redução de resíduos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      <li>
                        <Link href="#" className="text-green-600 hover:underline">
                          Como iniciar a compostagem em casa
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-green-600 hover:underline">
                          10 dicas para reduzir o uso de plástico
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-green-600 hover:underline">
                          Entenda o ciclo de vida dos produtos
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-green-600 hover:underline">
                          Guia completo sobre reciclagem doméstica
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-green-600 hover:underline">
                          Como fazer sua própria horta urbana
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full transition-all duration-300 hover:bg-green-50 hover:border-green-500 hover:text-green-600 group"
                    >
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        Ver todos os artigos
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Entre em Contato</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Tem dúvidas ou sugestões? Entre em contato conosco.
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-sm items-center gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                  >
                    Nome
                  </label>
                  <Input id="name" placeholder="Digite seu nome" />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                  >
                    Email
                  </label>
                  <Input id="email" placeholder="Digite seu email" type="email" />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite sua mensagem"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-500">© 2023 EcoDescarte. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
