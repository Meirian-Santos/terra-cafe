import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import worldCoffeeMap from '@/assets/world-coffee-map.jpg';

const coffeeCountries = [
  {
    name: "Etiópia",
    subtitle: "Berço do Café",
    description: "Cerimônia tradicional com incenso, três servidas e café na terra natal do grão.",
    flavor: "Notas florais e frutadas",
    ritual: "Cerimônia do café com três rodadas",
    icon: "🇪🇹"
  },
  {
    name: "Japão",
    subtitle: "Precisão e Arte",
    description: "Método pour-over refinado com precisão matemática e estética zen.",
    flavor: "Limpo e equilibrado",
    ritual: "Siphon e pour-over com cronômetro",
    icon: "🇯🇵"
  },
  {
    name: "Itália",
    subtitle: "Tradição Espresso",
    description: "Café rápido no balcão, cremoso e intenso, parte da vida social italiana.",
    flavor: "Encorpado e cremoso",
    ritual: "Espresso em pé no bar",
    icon: "🇮🇹"
  },
  {
    name: "Turquia",
    subtitle: "Leitura da Borra",
    description: "Café turco em cezve com açúcar, seguido da tradição de ler a sorte.",
    flavor: "Doce e especiado",
    ritual: "Preparo em cezve e leitura da borra",
    icon: "🇹🇷"
  },
  {
    name: "Brasil",
    subtitle: "Cafezinho Nacional",
    description: "Café coado tradicional, forte e doce, presente em toda ocasião social.",
    flavor: "Chocolate e castanhas",
    ritual: "Coador de pano e prosa",
    icon: "🇧🇷"
  },
  {
    name: "Colômbia",
    subtitle: "Montanhas Douradas",
    description: "Café de altitude com sabor suave, cultivado em paisagens exuberantes.",
    flavor: "Cítrico e caramelo",
    ritual: "Tinto compartilhado",
    icon: "🇨🇴"
  }
];

const Roteiro = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={worldCoffeeMap} 
              alt="Mapa mundial do café" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 cultural-gradient opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold heading-cultural mb-6">
                Roteiro pelo Mundo
              </h1>
              <p className="text-xl md:text-2xl text-heritage max-w-3xl mx-auto leading-relaxed">
                Uma jornada pelos sabores, rituais e tradições que conectam 
                culturas através do universo do café
              </p>
            </div>
          </div>
        </section>

        {/* Countries Grid */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coffeeCountries.map((country, index) => (
                <Card key={country.name} className="cultural-hover group overflow-hidden border-border bg-background">
                  <div className="p-8">
                    <div className="text-6xl mb-4 cultural-transition group-hover:scale-110">
                      {country.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-cultural mb-2">
                      {country.name}
                    </h3>
                    
                    <p className="text-primary font-semibold mb-4">
                      {country.subtitle}
                    </p>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      {country.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-cultural font-semibold">Sabor:</span>
                        <span className="text-muted-foreground">{country.flavor}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-cultural font-semibold">Ritual:</span>
                        <span className="text-muted-foreground">{country.ritual}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="cultural" 
                      className="mt-6 w-full"
                    >
                      Descobrir Tradições
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 warm-gradient opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
                Explore o Mapa Cultural
              </h2>
              <p className="text-xl text-heritage max-w-2xl mx-auto">
                Clique em cada país para descobrir histórias únicas e tradições 
                que fazem do café uma linguagem universal
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={worldCoffeeMap} 
                alt="Mapa interativo do café mundial" 
                className="w-full rounded-2xl cultural-shadow"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  variant="heritage" 
                  size="lg"
                  className="heritage-pulse"
                >
                  Iniciar Jornada Cultural
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Roteiro;