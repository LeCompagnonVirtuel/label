import { useState } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../config/company';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 flex flex-col items-end gap-2.5">
      {isOpen && (
        <div className="bg-white rounded-xl shadow-xl p-3.5 w-64 animate-scale-in border border-gray-100">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="font-heading font-bold text-navy text-xs">Contactez-nous</h3>
            <button aria-label="Fermer" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 p-0.5">
              <X size={15} />
            </button>
          </div>
          <div className="space-y-1.5">
            <a href={`tel:${company.contact.phoneClean}`} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-navy text-white hover:bg-navy-light transition-colors">
              <div className="w-8 h-8 bg-white/15 rounded-md flex items-center justify-center flex-shrink-0"><Phone size={14} /></div>
              <div><div className="text-[10px] opacity-70">Appelez-nous</div><div className="text-xs font-semibold">{company.contact.phone}</div></div>
            </a>
            <a href={`https://wa.me/${company.contact.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
              <div className="w-8 h-8 bg-white/15 rounded-md flex items-center justify-center flex-shrink-0"><MessageCircle size={14} /></div>
              <div><div className="text-[10px] opacity-70">WhatsApp</div><div className="text-xs font-semibold">Envoyer un message</div></div>
            </a>
            <Link to="/devis" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-orange text-white hover:bg-orange-dark transition-colors">
              <div className="w-8 h-8 bg-white/15 rounded-md flex items-center justify-center flex-shrink-0"><FileText size={14} /></div>
              <div><div className="text-[10px] opacity-70">Devis gratuit</div><div className="text-xs font-semibold">Demander un devis</div></div>
            </Link>
          </div>
        </div>
      )}

      <button
        aria-label={isOpen ? 'Fermer le panneau de contact' : 'Ouvrir le panneau de contact'}
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 md:w-12 md:h-12 bg-orange hover:bg-orange-dark rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-pulse-glow"
      >
        {isOpen ? <X size={20} className="text-white" /> : <MessageCircle size={20} className="text-white" />}
      </button>
    </div>
  );
}
