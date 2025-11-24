import React from 'react';
import { Mail, CheckCircle, ExternalLink } from 'lucide-react';
import Button from './Button';

function Obrigado() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 overflow-x-hidden selection:bg-[#D4A324]/30 font-sans flex flex-col items-center justify-center py-20 px-4">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#D4A324]/5 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <main className="relative z-10 w-full max-w-3xl bg-zinc-900/50 border border-white/10 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-sm">
        
        <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Obrigado!
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Sua inscrição foi confirmada. O acesso à plataforma foi enviado para o <strong>e-mail cadastrado</strong> no momento da compra.
        </p>

        <div className="bg-black/40 rounded-xl p-6 mb-10 border border-white/5 text-left space-y-4">
            <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#D4A324] shrink-0 mt-1" />
                <div>
                    <h3 className="text-white font-bold mb-1">🔑 Seus dados de acesso</h3>
                    <p className="text-gray-400 text-sm">Procure por "Mentoria O Caminho" ou "Hotmart" na sua caixa de entrada (e spam).</p>
                </div>
            </div>
            <div className="h-px bg-white/5 w-full"></div>
            <div className="flex items-start gap-4">
                <ExternalLink className="w-6 h-6 text-[#D4A324] shrink-0 mt-1" />
                <div>
                    <h3 className="text-white font-bold mb-1">Acesso à Plataforma</h3>
                    <p className="text-gray-400 text-sm mb-2">Você pode acessar diretamente pelo link:</p>
                    <a href="https://cursos.sejacontraste.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4A324] hover:underline break-all">
                        https://cursos.sejacontraste.com/
                    </a>
                </div>
            </div>
        </div>

        <div className="space-y-4">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Precisa de ajuda?</p>
            
            <Button 
                href="https://wa.me/5511973888280" 
                external={true}
                variant="primary" 
                className="w-full py-4 flex items-center justify-center gap-2 !bg-none !bg-[#25D366] hover:!bg-[#128C7E] !shadow-none text-white !text-white border-none"
            >
                Chamar Suporte no WhatsApp
            </Button>

            <p className="text-lg text-gray-400 mt-6">
                Ou envie um e-mail para <a href="mailto:contato@rabinorony.com.br" className="text-white hover:text-[#D4A324] underline transition-colors">contato@rabinorony.com.br</a>
            </p>
        </div>

      </main>
    </div>
  );
}

export default Obrigado;
