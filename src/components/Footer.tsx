import React from 'react';
import { Coffee, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Sobre Nós', href: '/proposito' },
    { name: 'Roteiro Cultural', href: '/roteiro' },
    { name: 'Menu', href: '/menu' },
    { name: 'Loja', href: '/loja' },
  ];

  const culturalLinks = [
    { name: 'Blog Cultural', href: '/comunidade' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Parcerias', href: '/parcerias' },
    { name: 'Sustentabilidade', href: '/sustentabilidade' },
  ];

  return (
    <footer className="bg-coffee-bean text-cultural-cream">
      {/* Newsletter Section */}
      <div className="border-b border-cultural-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-cultural-gold mb-4">
              Receba Nossa Newsletter Cultural
            </h3>
            <p className="text-cultural-cream/80 mb-8 max-w-xl mx-auto font-inter">
              Histórias de café, receitas exclusivas e eventos culturais direto na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-cultural-gold/30 text-cultural-cream placeholder-cultural-cream/60 focus:outline-none focus:ring-2 focus:ring-cultural-gold"
              />
              <Button variant="cultural">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-warm-gradient rounded-xl flex items-center justify-center cultural-glow">
                <Coffee className="w-7 h-7 text-coffee-bean" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-cultural-gold">
                  Terra Café
                </h3>
                <p className="text-sm text-cultural-cream/70 font-inter">
                  Cultura em cada grão
                </p>
              </div>
            </div>
            <p className="text-cultural-cream/80 mb-6 font-inter leading-relaxed">
              Conectando culturas através da arte do café premium. 
              Cada xícara conta uma história única de tradição e sabor.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-cultural-gold/20 rounded-lg flex items-center justify-center hover:bg-cultural-gold hover:text-coffee-bean cultural-transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cultural-gold mb-6 font-inter">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-cultural-cream/80 hover:text-cultural-gold cultural-transition font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultural Links */}
          <div>
            <h4 className="text-lg font-semibold text-cultural-gold mb-6 font-inter">
              Cultura & Arte
            </h4>
            <ul className="space-y-3">
              {culturalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-cultural-cream/80 hover:text-cultural-gold cultural-transition font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-cultural-gold mb-6 font-inter">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cultural-gold mt-0.5" />
                <div>
                  <p className="text-cultural-cream/80 font-inter text-sm leading-relaxed">
                    Rua das Culturas, 123<br />
                    Bairro Artístico, São Paulo - SP<br />
                    CEP 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cultural-gold" />
                <span className="text-cultural-cream/80 font-inter">
                  (11) 9999-8888
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cultural-gold" />
                <span className="text-cultural-cream/80 font-inter">
                  olá@terracafe.com.br
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cultural-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-cultural-cream/60 text-sm font-inter">
              © 2024 Terra Café. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacidade" className="text-cultural-cream/60 hover:text-cultural-gold text-sm font-inter cultural-transition">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-cultural-cream/60 hover:text-cultural-gold text-sm font-inter cultural-transition">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;