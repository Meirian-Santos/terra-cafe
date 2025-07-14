import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Users } from 'lucide-react';

const CulturalShowcase = () => {
  const experiences = [
    {
      country: "Etiópia",
      tradition: "Cerimônia do Café",
      description: "O berço do café nos ensina que cada grão carrega séculos de tradição familiar.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
      color: "from-amber-600 to-orange-700",
      duration: "45 min",
      participants: "2-8 pessoas"
    },
    {
      country: "Japão",
      tradition: "Café Siphon",
      description: "A precisão japonesa transforma o preparo em uma performance meditativa.",
      image: "https://images.unsplash.com/photo-1545665777-b71d1bceed4a?w=600&h=400&fit=crop",
      color: "from-slate-600 to-blue-800",
      duration: "20 min",
      participants: "1-4 pessoas"
    },
    {
      country: "Turquia",
      tradition: "Café Turco",
      description: "Patrimônio da UNESCO, onde o futuro é revelado na borra do café.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
      color: "from-red-700 to-amber-600",
      duration: "30 min",
      participants: "2-6 pessoas"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold heading-cultural mb-6">
            Tradições que Atravessam Oceanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Cada cultura desenvolveu sua própria relação sagrada com o café. 
            Venha vivenciar essas experiências autênticas em nosso espaço cultural.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <div key={experience.country} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card cultural-hover">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={experience.image}
                    alt={`${experience.tradition} - ${experience.country}`}
                    className="w-full h-full object-cover group-hover:scale-110 cultural-transition"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${experience.color} opacity-60`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-cultural-gold">
                      {experience.country}
                    </h3>
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-inter">
                    {experience.tradition}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6 font-inter leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{experience.participants}</span>
                    </div>
                  </div>

                  <Button variant="modern" className="w-full group">
                    <span>Agendar Experiência</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 cultural-transition" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-cultural-gradient rounded-3xl p-12 cultural-glow">
          <h3 className="text-3xl font-playfair font-bold text-cultural-cream mb-4">
            Pronto para sua Jornada Cultural?
          </h3>
          <p className="text-cultural-cream/90 mb-8 max-w-2xl mx-auto font-inter">
            Explore todas as 25 tradições cafeeiras que oferecemos e descubra 
            qual combina mais com seu paladar e curiosidade cultural.
          </p>
          <Button variant="heritage" size="lg" className="group">
            <span className="font-semibold">Ver Todas as Experiências</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 cultural-transition" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CulturalShowcase;