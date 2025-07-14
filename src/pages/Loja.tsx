import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import artCoffeeShop from '@/assets/art-coffee-shop.jpg';

const coffeeProducts = [
  {
    name: "Café Etíope Yirgacheffe",
    origin: "Etiópia",
    design: "Padrão Kente Africano",
    description: "Notas florais e cítricas em embalagem inspirada nos tecidos tradicionais etíopes.",
    price: "R$ 45",
    weight: "250g",
    process: "Natural",
    artist: "Colaboração com artistas de Addis Abeba"
  },
  {
    name: "Espresso Napolitano",
    origin: "Itália",
    design: "Cerâmica Majólica",
    description: "Blend intenso em embalagem que celebra a arte cerâmica italiana.",
    price: "R$ 42",
    weight: "250g", 
    process: "Tradicional",
    artist: "Inspirado em Vietri sul Mare"
  },
  {
    name: "Single Origin Geisha",
    origin: "Japão",
    design: "Arte Urbana Japonesa",
    description: "Variedade rara com embalagem que mescla tradição e modernidade nipônica.",
    price: "R$ 85",
    weight: "200g",
    process: "Lavado",
    artist: "Arte de Takashi Murakami"
  },
  {
    name: "Café Turco Especial",
    origin: "Turquia",
    design: "Tapeçaria Otomana",
    description: "Moído fino tradicional em embalagem com padrões de tapetes persas.",
    price: "R$ 38",
    weight: "200g",
    process: "Médio",
    artist: "Padrões de Istambul"
  },
  {
    name: "Bourbon Santos",
    origin: "Brasil",
    design: "Arte Popular Brasileira",
    description: "Café premium com embalagem inspirada no folclore e arte popular.",
    price: "R$ 35",
    weight: "250g",
    process: "Pulped Natural",
    artist: "Xilogravura nordestina"
  },
  {
    name: "Huila Supremo",
    origin: "Colômbia",
    design: "Mola Wayuu",
    description: "Café de altitude com arte indígena colombiana na embalagem.",
    price: "R$ 48",
    weight: "250g",
    process: "Lavado",
    artist: "Artesãs Wayuu"
  }
];

const accessories = [
  {
    name: "Xícara Cerâmica Etíope",
    description: "Xícara artesanal com padrões tradicionais etíopes",
    price: "R$ 85",
    artist: "Ceramista local"
  },
  {
    name: "Coador Japonês V60",
    description: "Coador em porcelana com arte zen pintada à mão",
    price: "R$ 120",
    artist: "Mestre ceramista de Kyoto"
  },
  {
    name: "Cezve Turco Artístico",
    description: "Cezve de cobre com gravações otomanas",
    price: "R$ 180",
    artist: "Artesão de Istambul"
  },
  {
    name: "Prensa Francesa Premium",
    description: "Prensa em vidro borossilicato com base artística",
    price: "R$ 150",
    artist: "Design parisiense"
  }
];

const artworks = [
  {
    name: "Pôster Mapa do Café",
    description: "Ilustração artística dos principais países produtores",
    price: "R$ 65",
    size: "50x70cm"
  },
  {
    name: "Quadro Cerimônia Etíope",
    description: "Fotografia documental da cerimônia tradicional",
    price: "R$ 180",
    size: "40x60cm"
  },
  {
    name: "Arte Digital Barista",
    description: "Ilustração moderna de métodos de preparo",
    price: "R$ 95",
    size: "30x40cm"
  }
];

const Loja = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={artCoffeeShop} 
              alt="Loja artística de café" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 cultural-gradient opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold heading-cultural mb-6">
                Loja & Arte
              </h1>
              <p className="text-xl md:text-2xl text-heritage max-w-3xl mx-auto leading-relaxed">
                Cafés de origem únicos em embalagens culturalmente inspiradas, 
                acessórios exclusivos e arte que celebra o universo cafeeiro
              </p>
            </div>
          </div>
        </section>

        {/* Coffee Products Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
                Cafés de Origem
              </h2>
              <p className="text-xl text-heritage max-w-2xl mx-auto">
                Cada embalagem conta uma história cultural única
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coffeeProducts.map((product, index) => (
                <Card key={product.name} className="cultural-hover group overflow-hidden border-border bg-background">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="cultural" className="text-sm">
                        {product.origin}
                      </Badge>
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-cultural mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-secondary font-semibold mb-3">
                      {product.design}
                    </p>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Peso:</span>
                        <span className="text-foreground">{product.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processo:</span>
                        <span className="text-foreground">{product.process}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Arte:</span>
                        <span className="text-cultural text-xs">{product.artist}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="cultural" 
                      className="w-full"
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 warm-gradient opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
                Acessórios Exclusivos
              </h2>
              <p className="text-xl text-heritage max-w-2xl mx-auto">
                Peças únicas criadas por artistas do mundo todo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessories.map((accessory, index) => (
                <Card key={accessory.name} className="cultural-hover group border-border bg-background text-center">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cultural mb-3">
                      {accessory.name}
                    </h3>
                    
                    <p className="text-foreground mb-4 text-sm leading-relaxed">
                      {accessory.description}
                    </p>
                    
                    <p className="text-muted-foreground text-xs mb-4">
                      {accessory.artist}
                    </p>
                    
                    <div className="text-2xl font-bold text-primary mb-4">
                      {accessory.price}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Artworks Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
                Arte Cafeeira
              </h2>
              <p className="text-xl text-heritage max-w-2xl mx-auto">
                Obras exclusivas que celebram a cultura do café
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {artworks.map((artwork, index) => (
                <Card key={artwork.name} className="cultural-hover group border-border bg-background text-center">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-cultural mb-3">
                      {artwork.name}
                    </h3>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {artwork.description}
                    </p>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      Tamanho: {artwork.size}
                    </p>
                    
                    <div className="text-2xl font-bold text-primary mb-6">
                      {artwork.price}
                    </div>
                    
                    <Button 
                      variant="heritage" 
                      className="w-full"
                    >
                      Comprar Arte
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={artCoffeeShop} 
              alt="Loja Terra Café" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 hero-gradient opacity-80"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
              Apoie Artistas e Produtores
            </h2>
            <p className="text-xl text-heritage max-w-2xl mx-auto mb-8">
              Cada compra fortalece comunidades cafeeiras e valoriza 
              a arte cultural de todo o mundo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heritage" size="lg">
                Ver Todos os Produtos
              </Button>
              <Button variant="outline" size="lg">
                Programa de Fidelidade
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Loja;