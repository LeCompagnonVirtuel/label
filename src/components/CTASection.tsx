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
    <section className={`py-14 md:py-20 ${dark ? 'bg-navy' : 'bg-gradient-to-r from-orange to-orange-light'}`}>
      <div className="container-site text-center">
        <AnimatedSection>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white mb-3">
            {title}
          </h2>
          <p className="text-white/85 text-sm md:text-base max-w-xl mx-auto mb-7">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 md:gap-3">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="flex items-center gap-2 bg-white text-navy hover:bg-gray-100 px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <Phone size={18} /> Appeler maintenant
            </a>
            <a
              href={`https://wa.me/${company.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <Link
              to="/devis"
              className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <FileText size={18} /> Demander un devis
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
