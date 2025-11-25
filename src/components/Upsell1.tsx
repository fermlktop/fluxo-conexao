import React from 'react';
import { ShieldCheck, MessageCircle, BookOpen, Users, CheckCircle } from 'lucide-react';
import VideoEmbed from './VideoEmbed';
import Button from './Button';
import { LogoOCaminho } from './LogoOCaminho';

function Upsell1() {
  const handleDownsell = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm("Tem certeza que deseja recusar o acompanhamento de 1 ano e o acesso à comunidade?")) {
      window.location.href = '/fluxo-conexao/ds1';
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 overflow-x-hidden selection:bg-[#D4A324]/30 font-sans">
      
      {/* Top Bar - Progress */}
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-900/95 backdrop-blur border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
             <span className="text-sm sm:text-base font-black tracking-widest text-[#D4A324] uppercase animate-pulse">
               NOVA OPORTUNIDADE PARA VOCÊ
             </span>
             <span className="text-xs text-gray-400 font-medium">Etapa 2 de 3</span>
          </div>
          {/* Progress Bar Thicker (h-4) */}
          <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div className="h-full bg-gradient-to-r from-[#AA821D] via-[#F5D061] to-[#AA821D] w-[75%] shadow-[0_0_15px_#D4A324] relative">
                <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#D4A324]/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#806216]/5 rounded-full blur-[150px]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Header Content */}
        <div className="text-center space-y-6 mb-10 animate-fade-in w-full">
          {/* Logo Bigger */}
          <div className="flex justify-center mb-8">
            <LogoOCaminho className="transform scale-100 sm:scale-110" />
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            PRIORIDADE IMEDIATA PARA PARTICIPAR DA <span className="text-[#D4A324]">MENTORIA O CAMINHO</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 font-light border-l-4 border-[#D4A324] pl-4 inline-block text-left bg-white/5 p-4 rounded-r-lg">
            Acompanhamento real por 12 meses.
          </p>
        </div>

        {/* Video Section - 5:4 Aspect Ratio (1350x1080) */}
        <div className="w-full max-w-[675px] mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Using aspect-[5/4] to match 1350x1080 */}
            <VideoEmbed 
                videoId="692498e6e478a90f43b08572" 
                aspectRatio="aspect-[5/4]" 
                className="border-[#D4A324]/30" 
                delayShow={595}
            />
        </div>

        {/* Hidden Content (Revealed by VTurb) */}
        <div className="esconder w-full animate-fade-in">
            {/* Primary CTA Block */}
            <div className="w-full max-w-md mx-auto text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                href="https://go.rabinorony.com.br/subscribe/up-conexao-infinita-ass" 
                variant="primary" 
                external={true}
                className="w-full py-5 text-xl uppercase tracking-wide shadow-[0_0_30px_rgba(212,163,36,0.2)] animate-[pulse_2s_infinite]"
              >
                QUERO ACOMPANHAMENTO REAL
              </Button>

              <a 
                href="#" 
                onClick={handleDownsell} 
                className="block w-full py-4 mt-4 text-center text-white/60 font-bold text-lg uppercase tracking-widest border-2 border-white/10 rounded-lg hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                Não, obrigado
              </a>
            </div>

            {/* Letter / Copy Section */}
            <div className="mt-16 prose prose-invert prose-lg max-w-3xl text-gray-300 leading-relaxed font-light mx-auto">
              <div className="bg-zinc-900/50 p-8 rounded-xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A324]/10 blur-3xl rounded-full pointer-events-none"></div>
                
                <p className="font-medium text-white text-lg">
                  Parabéns. Você acabou de garantir sua vaga na Conexão Infinita.
                </p>
                <p>
                  Enquanto sua equipe prepara seu acesso, assista ao vídeo acima. São 3 minutos que podem mudar a velocidade da sua transformação.
                </p>
                <p>
                  Você já tem tudo que precisa. Academia vitalícia. Grande Travessia completa. O conhecimento é seu pra sempre.
                  Mas existe uma diferença entre caminhar sozinho e caminhar com um guia e companheiros de jornada.
                </p>
                <p>
                  A <strong>Mentoria O CAMINHO</strong> é uma comunidade seleta de 38 pessoas. Médicos, advogados, empresários, magistrados, mães e pais dedicados. Profissionais de alto nível que, assim como você, escolheram não viver como os 80%.
                </p>
                <p className="text-[#D4A324] font-medium italic border-l-2 border-[#D4A324] pl-4">
                  O máximo que consigo atender com proximidade real é 50. Isso significa 12 vagas.
                </p>
              </div>
            </div>

            {/* What You Get Grid */}
            <div className="mt-16 w-full">
                <h3 className="text-center font-serif text-2xl mb-10 text-gray-200 uppercase tracking-widest border-b border-gray-800 pb-4 max-w-md mx-auto">O que você recebe</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FeatureCard 
                        icon={<Users className="w-8 h-8 text-[#D4A324]" />}
                        title="Encontros Quinzenais"
                        description="Ao vivo comigo, mínimo 1h30 cada. Estratégia, alinhamento e correção de rota."
                    />
                    <FeatureCard 
                        icon={<MessageCircle className="w-8 h-8 text-[#D4A324]" />}
                        title="Video Ask Individual"
                        description="Duas orientações individuais por mês. Você pergunta, eu respondo em vídeo, só pra você."
                    />
                    <FeatureCard 
                        icon={<BookOpen className="w-8 h-8 text-[#D4A324]" />}
                        title="Kit Físico em Casa"
                        description="Caixa exclusiva com apostila impressa, diário de bordo e carta pessoal."
                    />
                    <FeatureCard 
                        icon={<CheckCircle className="w-8 h-8 text-[#D4A324]" />}
                        title="Comunidade Seleta"
                        description="Grupo no WhatsApp com no máximo 50 pessoas selecionadas a dedo."
                    />
                </div>
            </div>

            {/* Pricing Section */}
            <div className="mt-20 w-full max-w-2xl bg-gradient-to-b from-zinc-900 to-black border border-[#D4A324]/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden group mx-auto">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A324] to-transparent"></div>
                
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-bold">Investimento Especial</p>
                
                <div className="flex flex-col items-center justify-center gap-2 mb-6">
                    <span className="text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">R$ 7.000</span>
                    <span className="text-gray-400">à vista</span>
                </div>
                
                <p className="text-xl text-[#D4A324] font-medium mb-8">
                    ou 12x de <span className="font-bold text-2xl text-white">R$ 583,33</span>
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 bg-white/5 py-2 px-4 rounded-full mx-auto max-w-max mb-8 border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>Garantia incondicional de 7 dias</span>
                </div>

                <p className="text-gray-300 italic font-serif mb-10 max-w-lg mx-auto leading-relaxed">
                    "Grandes líderes sempre tiveram mentores. Não por fraqueza. Por inteligência."
                </p>

                <Button 
                  href="https://go.rabinorony.com.br/subscribe/up-conexao-infinita-ass" 
                  variant="primary" 
                  external={true}
                  className="w-full py-4 text-lg font-bold shadow-[0_0_20px_rgba(212,163,36,0.3)] animate-[pulse_3s_infinite]"
                >
                  QUERO ACOMPANHAMENTO REAL
                </Button>
                
                <div className="mt-8">
                     <a href="#" onClick={handleDownsell} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                        *Vou deixar essa oportunidade passar*
                    </a>
                </div>
            </div>

            <footer className="mt-24 text-center border-t border-gray-900/50 pt-8 w-full max-w-4xl pb-8 opacity-60 mx-auto">
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Mentoria O Caminho &copy; {new Date().getFullYear()}</p>
                <p className="text-gray-700 text-[10px]">Todas as vagas sujeitas a aprovação.</p>
            </footer>
        </div>

      </main>
    </div>
  );
}

// Helper Component for Features
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-zinc-900/40 border border-gray-800 p-6 rounded-lg hover:border-[#D4A324]/50 transition-colors duration-300 flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row gap-4 group">
        <div className="p-3 bg-black rounded-full border border-gray-800 shrink-0 group-hover:border-[#D4A324] transition-colors">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

export default Upsell1;
