import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Coffee, Globe, Heart, BookOpen, ShoppingBag, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', icon: Coffee },
    { name: 'Nosso Propósito', href: '/proposito', icon: Heart },
    { name: 'Roteiro pelo Mundo', href: '/roteiro', icon: Globe },
    { name: 'Menu de Experiências', href: '/menu', icon: BookOpen },
    { name: 'Loja & Arte', href: '/loja', icon: ShoppingBag },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border cultural-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-warm-gradient rounded-lg flex items-center justify-center cultural-glow">
              <Coffee className="w-6 h-6 text-coffee-bean" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-bold heading-cultural">
                Terra Café
              </h1>
              <p className="text-xs text-muted-foreground font-inter">
                Cultura em cada grão
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium cultural-transition",
                  isActive(item.href)
                    ? "text-cultural-gold bg-cultural-gold/10"
                    : "text-foreground hover:text-cultural-gold hover:bg-cultural-gold/5"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-inter">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="cultural" size="sm">
              Explorar Sabores
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium cultural-transition",
                  isActive(item.href)
                    ? "text-cultural-gold bg-cultural-gold/10"
                    : "text-foreground hover:text-cultural-gold hover:bg-cultural-gold/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-inter">{item.name}</span>
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="cultural" className="w-full">
                Explorar Sabores
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;