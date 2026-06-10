import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { company } from '../config/company';
import AnimatedSection from './AnimatedSection';

interface Props {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = 'Parlons de votre projet',
  subtitle = 'Demandez votre devis gratuit et sans engagement. Notre équipe vous répond sous 24h.',
  dark = false,
}: Props) {
  return (
    <section className={`py-16 md:py-20 ${dark ? 'bg-navy' : 'bg-gradient-to-r from-orange to-orange-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-5xl text-white mb-4">
            {title}
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="flex items-center gap-2 bg-white text-navy hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              Appeler maintenant
            </a>
            <a
              href={`https://wa.me/${company.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <Link
              to="/devis"
              className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <FileText size={20} />
              Demander un devis
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
