import React from 'react';
import { MapPin, Calendar, Users, Star } from 'lucide-react';
import VideoEmbed from './VideoEmbed';
import Button from './Button';

function Downsell1() {
  const handleFinish = (e: React.MouseEvent) => {
    e.preventDefault();
    // Lógica final se a pessoa recusar o downsell (ex: ir para dashboard ou agradecimento simples)
    alert("Fluxo encerrado. Redirecionar para Agradecimento/Acesso."); 
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 overflow-x-hidden selection:bg-[#D4A324]/30 font-sans">
      
      {/* Top Bar - Progress (Different Color/State for Downsell if needed, kept consistent here) */}
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-900/95 backdrop-blur border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
             <span className="text-sm sm:text-base font-black tracking-widest text-[#D4A324] uppercase animate-pulse">
               ÚLTIMA CHANCE
             </span>
             <span className="text-xs text-gray-400 font-medium">Etapa 3 de 3</span>
          </div>
          <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div className="h-full bg-gradient-to-r from-[#AA821D] via-[#F5D061] to-[#AA821D] w-full shadow-[0_0_15px_#D4A324] relative">
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
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Israel Está <br /><span className="text-[#D4A324]">Te Chamando?</span> <span className="block text-2xl sm:text-4xl mt-2 text-gray-300">- Rabino Rony</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm sm:text-base text-gray-300 font-medium tracking-wide bg-white/5 p-4 rounded-lg border border-white/10 inline-flex mx-auto">
             <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4A324]" /> 9 a 18 de fev 2026</div>
             <div className="hidden md:block text-gray-600">|</div>
             <div className="flex items-center gap-2"><Star className="w-4 h-4 text-[#D4A324]" /> Ano 5786</div>
             <div className="hidden md:block text-gray-600">|</div>
             <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#D4A324]" /> <span className="text-white font-bold">6 vagas restantes</span></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full max-w-[675px] mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <VideoEmbed 
                videoId="692498fcb4565a02eb37503d" 
                aspectRatio="aspect-[5/4]" 
                className="border-[#D4A324]/30" 
                delayShow={135}
            />
            <p className="text-center text-sm text-gray-500 mt-4 italic">
                "Antes de continuar, assista ao vídeo acima. São dois minutos que podem mudar o rumo da sua travessia."
            </p>
        </div>

        {/* Hidden Content (Revealed by VTurb) */}
        <div className="esconder w-full animate-fade-in">
            {/* Copy Body */}
            <div className="mt-4 prose prose-invert prose-lg max-w-3xl text-gray-300 leading-relaxed font-light mx-auto">
                <p>
                  Se você chegou até aqui, já faz parte dos poucos que escolheram não viver como os 80%. Sua jornada na Conexão Infinita está garantida.
                </p>
                <p className="text-white font-medium text-xl">
                  Mas existe algo mais.
                </p>
                <p>
                  Enquanto o Brasil inteiro estiver no carnaval, um grupo de apenas <strong className="text-[#D4A324]">trinta pessoas</strong> estará em Israel comigo. Não como turistas. Como peregrinos. Como família espiritual.
                </p>
                
                <ul className="space-y-3 my-8 pl-0 list-none">
                    {[
                        "Massada ao nascer do sol.", 
                        "Mar Morto.", 
                        "Tzfat, onde a Cabalá nasceu.", 
                        "A testa no Kotel.", 
                        "A Caverna dos Patriarcas.", 
                        "Shabat em Jerusalém, quando o tempo realmente para."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#D4A324] shrink-0 mt-1" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <p>
                  Oito dias. Tudo incluso. Passagem, hotel, alimentação kosher, transporte, entradas, e eu pessoalmente conduzindo cada passo.
                </p>
            </div>

            {/* Pricing & Call to Action */}
            <div className="mt-16 w-full max-w-2xl bg-gradient-to-b from-zinc-900 to-black border border-[#D4A324]/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden group mx-auto">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A324] to-transparent"></div>
                
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-bold">Investimento Único</p>
                
                <div className="flex flex-col items-center justify-center gap-2 mb-4">
                    <span className="text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">R$ 30.000</span>
                </div>
                <p className="text-[#D4A324] font-medium mb-8 bg-[#D4A324]/10 inline-block px-4 py-1 rounded-full text-sm">
                    Vagas restantes: 6 de 30
                </p>

                <p className="text-gray-300 italic font-serif mb-10 max-w-lg mx-auto leading-relaxed border-t border-white/5 pt-6">
                    "Quando acabar, acabou. Sem lista de espera. Sem exceção."
                </p>
                
                <div className="mb-8">
                    <p className="text-white font-medium">
                        Se em algum momento do vídeo seu coração acelerou ou seu corpo arrepiou... você já sabe a resposta.
                    </p>
                </div>

                <Button 
                  href="https://go.rabinorony.com.br/pay/vtprr-d" 
                  variant="primary" 
                  className="w-full py-5 text-lg sm:text-xl uppercase tracking-wide shadow-[0_0_30px_rgba(212,163,36,0.2)] animate-[pulse_2s_infinite]"
                >
                  QUERO ATRAVESSAR EM ISRAEL
                </Button>
                
                <div className="mt-6">
                     <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); window.location.href = '/fluxo-conexao/obrigado'; }} 
                        className="block w-full py-4 text-center text-white/60 font-bold text-lg uppercase tracking-widest border-2 border-white/10 rounded-lg hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-300"
                     >
                        Não, obrigado
                    </a>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}

export default Downsell1;
