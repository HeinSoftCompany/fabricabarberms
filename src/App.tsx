import { useState, useEffect } from 'react';
import { 
  Scissors, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight,
  Star,
  CheckCircle2,
  Menu,
  X,
  Facebook,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import Logo from './assets/images/logo.png';
import VideoBarbearia from './assets/videos/barbearia.mp4';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
  const phone = '5581999693619'; // DDD + número (sem espaços)
  const message = 'Olá! Quero saber mais sobre a próxima turma.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
};

  return (
  <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
    {/* Navigation */}
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#F97316] to-[#EF4444] flex items-center justify-center">
            <img
              src={Logo}
              alt="Fábrica de Barbeiros MS"
              className="w-[64px] h-[64px] object-contain"
            />
          </div>

          {/* Nome no MOBILE + TABLET (até iPad mini) */}
          <div className="flex flex-col leading-tight sm:hidden">
    <span className="font-bold text-sm tracking-tight">
      FÁBRICA <span className="text-[#F97316]">DE</span>
    </span>
    <span className="font-bold text-sm tracking-tight">
      BARBEIROS <span className="text-[#F97316]">MS</span>
    </span>
  </div>

          {/* TABLET + DESKTOP (UMA LINHA) */}
  <span className="hidden sm:inline-block font-bold text-base md:text-lg tracking-tight">
    FÁBRICA <span className="text-[#F97316]">DE</span> BARBEIROS{' '}
    <span className="text-[#F97316]">MS</span>
  </span>
        </div>

        {/* Desktop Menu (só a partir de lg) */}
        <div className="hidden lg:flex items-center gap-8">
          {['Início', 'Sobre', 'Cursos', 'Depoimentos'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-300 hover:text-[#F97316] transition-colors"
            >
              {item}
            </button>
          ))}
          <Button
            className="bg-gradient-to-r from-[#F97316] to-[#EF4444] hover:opacity-90 text-white font-semibold px-6"
            onClick={() => scrollToSection('barber')}
          >
            Quero Ser Barbeiro
          </Button>
        </div>

        {/* Mobile / Tablet Menu Button (até lg) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 mobile-menu py-6 px-6 ${
          mobileMenuOpen ? 'open' : ''
        }`}
      >
        <div className="flex flex-col gap-4">
          {['Início', 'Sobre', 'Cursos', 'Depoimentos'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-gray-300 hover:text-[#F97316] transition-colors py-2"
            >
              {item}
            </button>
          ))}
          <Button
            className="bg-gradient-to-r from-[#F97316] to-[#EF4444] hover:opacity-90 text-white font-semibold w-full mt-2"
            onClick={() => scrollToSection('barber')}
          >
            Quero Ser Barbeiro
          </Button>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#EF4444]/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23F97316%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Star className="w-4 h-4 text-[#F97316]" />
              <span className="text-sm text-gray-300">Mais de 500 alunos formados</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              TRANSFORME SUA{' '}
              <span className="text-gradient">VIDA</span>
              <br />
              NA <span className="text-gradient">BARBEARIA</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Aprenda a profissão que está revolucionando o mercado. 
              Curso prático, certificado reconhecido e suporte para começar sua carreira.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#F97316] to-[#EF4444] hover:opacity-90 text-white font-bold text-lg px-8 py-6 glow-orange"
                onClick={() => scrollToSection('contato')}
              >
                Garantir Minha Vaga
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection('cursos')}
              >
                Conhecer Cursos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              {[
                { value: '500+', label: 'Alunos Formados' },
                { value: '11+', label: 'Turmas Realizadas' },
                { value: '100%', label: 'Taxa de Aprovação' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#F97316]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 relative">
  <div className="w-full px-6 lg:px-12">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
            <Award className="w-4 h-4 text-[#F97316]" />
            <span className="text-sm text-[#F97316] font-medium">Sobre Nós</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            A MAIOR{' '}
            <span className="text-gradient">FÁBRICA</span>
            <br />
            DE BARBEIROS DE GRAVATÁ
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Nascemos com uma missão clara: transformar vidas através da barbearia. 
            Nosso método de ensino prático e intensivo prepara alunos para o mercado 
            de trabalho em tempo recorde.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Com instrutores experientes e uma estrutura completa, oferecemos 
            cursos que vão do iniciante ao avançado, garantindo que cada aluno 
            saia pronto para trabalhar.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              'Certificado Reconhecido',
              'Material Incluso',
              'Aulas Práticas',
              'Suporte Pós-Curso'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#F97316]/20 to-[#EF4444]/20 p-1">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-[#111]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={VideoBarbearia} type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-[#0A0A0A] border border-white/10 rounded-xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">500+</div>
                <div className="text-xs text-gray-500">Alunos Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Courses Section */}
      <section id="cursos" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F97316]/5 to-transparent" />
        
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
                <Calendar className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm text-[#F97316] font-medium">Nossos Cursos</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                ESCOLHA SEU{' '}
                <span className="text-gradient">CAMINHO</span>
              </h2>
              
              <p className="text-gray-400 max-w-xl mx-auto">
                Do zero ao profissional. Temos o curso ideal para cada momento da sua jornada.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Barbeiro Iniciante',
                  duration: '4 Semanas',
                  price: '12x de R$ 199',
                  features: [
                    'Noções básicas de corte',
                    'Tipos de cabelo',
                    'Higiene e biossegurança',
                    'Atendimento ao cliente',
                    'Certificado incluso'
                  ],
                  highlight: false
                },
                {
                  title: 'Barbeiro Avançado',
                  duration: '6 Semanas',
                  price: '12x de R$ 299',
                  features: [
                    'Técnicas avançadas de corte',
                    'Barba e bigode',
                    'Design de sobrancelha',
                    'Coloração masculina',
                    'Marketing pessoal',
                    'Certificado incluso'
                  ],
                  highlight: true
                },
                {
                  title: 'Workshop Intensivo',
                  duration: '2 Dias',
                  price: 'R$ 497 à vista',
                  features: [
                    'Técnica específica',
                    'Mentoria ao vivo',
                    'Networking',
                    'Material de apoio',
                    'Certificado de participação'
                  ],
                  highlight: false
                }
              ].map((course, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-6 ${
                    course.highlight 
                      ? 'bg-gradient-to-b from-[#F97316]/20 to-[#EF4444]/10 border-2 border-[#F97316]' 
                      : 'bg-[#111] border border-white/10'
                  }`}
                >
                  {course.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#F97316] to-[#EF4444] rounded-full text-xs font-bold">
                      MAIS POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {course.duration}
                  </div>
                  
                  <div className="text-2xl font-black text-[#F97316] mb-6">
                    {course.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold ${
                      course.highlight 
                        ? 'bg-gradient-to-r from-[#F97316] to-[#EF4444] hover:opacity-90 text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    onClick={() => scrollToSection('contato')}
                  >
                    Quero Esse Curso
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 relative">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
                <Users className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm text-[#F97316] font-medium">Depoimentos</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                O QUE NOSSOS{' '}
                <span className="text-gradient">ALUNOS</span> DIZEM
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'João Pedro',
                  text: 'Fiz o curso iniciante e em menos de 2 meses já estava trabalhando em uma barbearia. O método de ensino é incrível!',
                  course: 'Barbeiro Iniciante'
                },
                {
                  name: 'Matheus Silva',
                  text: 'A Fábrica de Barbeiros mudou minha vida. Hoje tenho minha própria barbearia.',
                  course: 'Barbeiro Avançado'
                },
                {
                  name: 'Lucas Oliveira',
                  text: 'O workshop intensivo valeu cada centavo. Aprendi técnicas que elevaram meu trabalho a outro nível.',
                  course: 'Workshop Intensivo'
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-[#111] border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#EF4444] flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.course}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="barber" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/10 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6">
                <Scissors className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm text-[#F97316] font-medium">Quero ser Barbeiro</span>
              </div>
            <div className="bg-gradient-to-br from-[#F97316]/20 to-[#EF4444]/10 border border-[#F97316]/30 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                COMECE SUA{' '}
                <span className="text-gradient">JORNADA</span> HOJE
              </h2>
              
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Vagas limitadas para a próxima turma. Não perca a oportunidade de 
                transformar sua vida na barbearia.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button 
                  size="lg"
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-[#F97316] to-[#EF4444] hover:opacity-90 text-white font-bold text-lg px-10 py-6 glow-orange-strong"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                  <a href="#">Unidade Centro e XV de novembro</a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#F97316]" />
                  <a href="https://www.instagram.com/fabricadebarbeirosms/">@fabricadebarbeirosms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#F97316] to-[#EF4444] flex items-center justify-center">
            <img
              src={Logo}
              alt="Fábrica de Barbeiros MS"
              className="w-[64px] h-[64px] object-contain"
            />
          </div>
                <span className="font-bold text-lg">
                  FÁBRICA <span className="text-[#F97316]">DE </span>BARBEIROS <span className="text-[#F97316]">MS </span>
                </span>
              </div>

              <div className="text-sm text-gray-500">
                © 2026 Fábrica de Barbeiros MS. Todos os direitos reservados.
              </div>

              <div className="flex items-center gap-4">
  <a
    href="https://www.instagram.com/fabricadebarbeirosms/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316]/20 transition-colors group"
    aria-label="Instagram"
  >
    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#F97316] transition-colors" />
  </a>

  <a
    href="https://www.facebook.com/people/Barbearia-Matuto-Sofisticado/100065328316363/?locale=pt_BR"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316]/20 transition-colors group"
    aria-label="Facebook"
  >
    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-[#F97316] transition-colors" />
  </a>

  <a
    href="mailto:barbeariamsp@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316]/20 transition-colors group"
    aria-label="E-mail"
  >
    <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#F97316] transition-colors" />
  </a>
</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
