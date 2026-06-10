import { useState } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../config/company';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 animate-scale-in border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-bold text-navy text-sm">Contactez-nous</h3>
            <button aria-label="Fermer le panneau de contact" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 p-1">
              <X size={18} />
            </button>
          </div>
          <div className="space-y-2">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-navy text-white hover:bg-navy-light transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs opacity-80">Appelez-nous</div>
                <div className="text-sm font-semibold">{company.contact.phone}</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${company.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="text-xs opacity-80">WhatsApp</div>
                <div className="text-sm font-semibold">Envoyer un message</div>
              </div>
            </a>
            <Link
              to="/devis"
              className="flex items-center gap-3 p-3 rounded-xl bg-orange text-white hover:bg-orange-dark transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={18} />
              </div>
              <div>
                <div className="text-xs opacity-80">Devis gratuit</div>
                <div className="text-sm font-semibold">Demander un devis</div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <button
        aria-label={isOpen ? 'Fermer le panneau de contact' : 'Ouvrir le panneau de contact'}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-orange hover:bg-orange-dark rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-pulse-glow"
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>
    </div>
  );
}
