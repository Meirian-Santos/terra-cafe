import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Leaf, Users, Globe, Award, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Proposito = () => {
  const values = [
    {
      icon: Heart,
      title: "Comércio Justo",
      description: "Pagamos preços justos aos produtores, garantindo sustentabilidade econômica das famílias cafeeiras."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Práticas ambientalmente responsáveis desde o cultivo até a xícara, preservando ecossistemas únicos."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Fortalecemos laços entre comunidades produtoras e apreciadores, criando conexões genuínas."
    },
    {
      icon: Globe,
      title: "Diversidade Cultural",
      description: "Celebramos e preservamos tradições cafeeiras de diferentes culturas ao redor do mundo."
    }
  ];

  const impacts = [
    { number: "2.500+", label: "Famílias Beneficiadas", icon: Users },
    { number: "15", label: "Cooperativas Parceiras", icon: Coffee },
    { number: "8", label: "Países de Origem", icon: Globe },
    { number: "100%", label: "Comércio Ético", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-cultural-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cultural-cream mb-6">
              Nosso Propósito
            </h1>
            <p className="text-xl text-cultural-cream/90 max-w-3xl mx-auto font-inter leading-relaxed">
              Acreditamos que cada xícara de café é uma oportunidade de conectar culturas, 
              valorizar produtores e preservar tradições milenares.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold heading-cultural mb-6">
                Mais que Café, uma Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
                Na Terra Café, cada grão carrega uma história. Trabalhamos diretamente com 
                pequenos produtores ao redor do mundo, garantindo que suas tradições sejam 
                preservadas e suas comunidades prosperem.
              </p>
              <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
                Nosso compromisso vai além do sabor excepcional - promovemos práticas 
                sustentáveis, comércio justo e a celebração da diversidade cultural que 
                torna cada café único.
              </p>
              <Button variant="cultural" size="lg">
                Conheça Nossos Produtores
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 cultural-shadow">
                <blockquote className="text-xl font-crimson italic text-foreground mb-6">
                  "O café não é apenas uma bebida, é um ritual que conecta gerações, 
                  preserva culturas e constrói pontes entre mundos distantes."
                </blockquote>
                <cite className="text-cultural-gold font-semibold font-inter">
                  — Maria Santos, Fundadora da Terra Café
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold heading-cultural mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Princípios que guiam cada decisão e moldam nossa relação com produtores e clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="bg-card rounded-2xl p-8 cultural-hover h-full">
                  <div className="w-16 h-16 bg-warm-gradient rounded-xl flex items-center justify-center mx-auto mb-6 cultural-glow">
                    <value.icon className="w-8 h-8 text-coffee-bean" />
                  </div>
                  <h3 className="text-xl font-semibold text-cultural-gold mb-4 font-inter">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold heading-cultural mb-6">
              Nosso Impacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Números que refletem nosso compromisso com comunidades e qualidade.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={impact.label} className="text-center">
                <div className="bg-card rounded-2xl p-8 cultural-hover">
                  <impact.icon className="w-12 h-12 text-cultural-gold mx-auto mb-4" />
                  <div className="text-4xl font-playfair font-bold text-cultural-gold mb-2">
                    {impact.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {impact.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cultural-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-cultural-cream mb-6">
            Faça Parte desta Jornada
          </h2>
          <p className="text-xl text-cultural-cream/90 mb-8 font-inter leading-relaxed">
            Cada xícara que você escolhe faz a diferença na vida de uma família produtora. 
            Venha descobrir como o café pode ser uma força transformadora.
          </p>
          <Button variant="heritage" size="lg">
            Explore Nossos Cafés Éticos
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proposito;