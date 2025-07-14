import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import coffeeExperienceMenu from '@/assets/coffee-experience-menu.jpg';

const brewMethods = [
  {
    name: "V60 Japonês",
    origin: "Japão",
    intensity: "Suave",
    time: "3-4 min",
    description: "Precisão e pureza em cada gota, revelando notas delicadas.",
    harmonization: "Mochi de matcha, biscoitos de gengibre",
    price: "R$ 18"
  },
  {
    name: "Espresso Romano",
    origin: "Itália", 
    intensity: "Intenso",
    time: "25-30 seg",
    description: "Cremoso e encorpado, tradição italiana autêntica.",
    harmonization: "Tiramisù, cantuccini, amaretti",
    price: "R$ 12"
  },
  {
    name: "Café Turco",
    origin: "Turquia",
    intensity: "Médio",
    time: "5-6 min",
    description: "Especiado e aromático, preparado em cezve de cobre.",
    harmonization: "Lokum, baklava, tâmaras recheadas",
    price: "R$ 16"
  },
  {
    name: "Prensa Francesa",
    origin: "França",
    intensity: "Encorpado",
    time: "4 min",
    description: "Extração completa para sabores ricos e complexos.",
    harmonization: "Croissant, madeleines, macarons",
    price: "R$ 15"
  },
  {
    name: "Coado Brasileiro",
    origin: "Brasil",
    intensity: "Equilibrado",
    time: "5 min",
    description: "Tradição nacional no coador de pano, puro cafezinho.",
    harmonization: "Pão de açúcar, beijinho, brigadeiro gourmet",
    price: "R$ 14"
  },
  {
    name: "Cold Brew Etíope",
    origin: "Etiópia",
    intensity: "Suave",
    time: "12 horas",
    description: "Extração a frio que realça notas florais únicas.",
    harmonization: "Mel silvestre, injera, frutas tropicais",
    price: "R$ 20"
  }
];

const experiencePackages = [
  {
    name: "Jornada Sensorial",
    description: "Degustação de 5 métodos diferentes com harmonizações",
    duration: "90 minutos",
    price: "R$ 85",
    includes: ["Guia especializado", "Material educativo", "Harmonizações"]
  },
  {
    name: "Ritual Cultural",
    description: "Experiência imersiva em uma tradição específica",
    duration: "60 minutos", 
    price: "R$ 65",
    includes: ["Cerimônia completa", "História cultural", "Degustação"]
  },
  {
    name: "Workshop de Métodos",
    description: "Aprenda a preparar seu café perfeito em casa",
    duration: "120 minutos",
    price: "R$ 120",
    includes: ["Equipamentos", "Grãos especiais", "Certificado"]
  }
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={coffeeExperienceMenu} 
              alt="Mesa de experiências de café" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 hero-gradient opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold heading-cultural mb-6">
                Menu de Experiências
              </h1>
              <p className="text-xl md:text-2xl text-heritage max-w-3xl mx-auto leading-relaxed">
                Uma viagem sensorial através dos métodos, sabores e tradições 
                que fazem de cada xícara uma experiência única
              </p>
            </div>
          </div>
        </section>

        {/* Brewing Methods Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
                Métodos de Preparo
              </h2>
              <p className="text-xl text-heritage max-w-2xl mx-auto">
                Cada método conta uma história, cada sabor revela uma cultura
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brewMethods.map((method, index) => (
                <Card key={method.name} className="cultural-hover group overflow-hidden border-border bg-background">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="cultural" className="text-sm">
                        {method.origin}
                      </Badge>
                      <span className="text-2xl font-bold text-primary">
                        {method.price}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-cultural mb-2">
                      {method.name}
                    </h3>
                    
                    <div className="flex gap-4 mb-4 text-sm">
                      <span className="text-muted-foreground">
                        <strong>Intensidade:</strong> {method.intensity}
                      </span>
                      <span className="text-muted-foreground">
                        <strong>Tempo:</strong> {method.time}
                      </span>
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-cultural font-semibold mb-2">Harmonizações:</h4>
                      <p className="text-muted-foreground text-sm">
                        {method.harmonization}
                      </p>
                    </div>
                    
                    <Button 
                      variant="cultural" 
                      className="w-full"
                    >
                      Experimentar Método
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Packages */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 warm-gradient opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-cultural mb-6">
                Experiências Completas
              </h2>
              <p className="text-xl text-heritage max-w-2xl mx-auto">
                Jornadas imersivas para despertar todos os seus sentidos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {experiencePackages.map((package_, index) => (
                <Card key={package_.name} className="cultural-hover group border-border bg-background overflow-hidden">
                  <div className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-cultural mb-4">
                      {package_.name}
                    </h3>
                    
                    <div className="text-4xl font-bold text-primary mb-4">
                      {package_.price}
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {package_.description}
                    </p>
                    
                    <div className="text-muted-foreground mb-6">
                      <strong>Duração:</strong> {package_.duration}
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      {package_.includes.map((item, i) => (
                        <div key={i} className="flex items-center justify-center gap-2">
                          <span className="text-cultural">✓</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="heritage" 
                      size="lg"
                      className="w-full"
                    >
                      Reservar Experiência
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;