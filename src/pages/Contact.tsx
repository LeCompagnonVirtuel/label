import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead title="Contact - LABEL PRO CI | Entreprise BTP Yamoussoukro" description="Contactez LABEL PRO CI pour vos projets de construction et génie civil à Yamoussoukro." url="https://labelproci.com/contact" />
      <PageHero
        badge={<><Phone size={14} /> Contact</>}
        title={<>Contactez-<span className="text-orange">nous</span></>}
        description="Notre équipe est à votre disposition pour répondre à vos questions."
      />

      <section className="py-8 md:py-10 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 -mt-12 md:-mt-16 relative z-10">
            {[
              { icon: Phone, title: 'Téléphone', lines: [company.contact.phone, company.contact.phoneSecondary], href: `tel:${company.contact.phoneClean}`, color: 'bg-navy' },
              { icon: MessageCircle, title: 'WhatsApp', lines: ['Envoyez-nous un message'], href: `https://wa.me/${company.contact.whatsappClean}`, color: 'bg-green-600' },
              { icon: Mail, title: 'Email', lines: [company.contact.email], href: `mailto:${company.contact.email}`, color: 'bg-orange' },
              { icon: MapPin, title: 'Adresse', lines: [company.contact.fullAddress], href: '#map', color: 'bg-steel' },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-xl p-4 premium-shadow hover:-translate-y-0.5 transition-all">
                  <div className={`w-9 h-9 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
                    <card.icon size={16} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-sm mb-1">{card.title}</h3>
                  {card.lines.map((line, j) => (<p key={j} className="text-steel text-xs">{line}</p>))}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection animation="fade-right">
              <div className="bg-white rounded-xl p-5 md:p-6 premium-shadow">
                <h2 className="font-heading font-bold text-xl text-navy mb-1">Envoyez-nous un message</h2>
                <p className="text-steel text-sm mb-5">Nous vous répondrons rapidement.</p>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle size={28} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-navy mb-1">Message envoyé !</h3>
                    <p className="text-steel text-sm">Merci ! Nous vous répondrons rapidement.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><label className="block text-xs font-medium text-navy mb-1">Nom complet *</label><input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" required /></div>
                      <div><label className="block text-xs font-medium text-navy mb-1">Téléphone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+225 XX XX XX XX XX" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" /></div>
                    </div>
                    <div><label className="block text-xs font-medium text-navy mb-1">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" /></div>
                    <div><label className="block text-xs font-medium text-navy mb-1">Sujet</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white">
                        <option value="">Choisir un sujet</option>
                        <option value="Demande de devis">Demande de devis</option>
                        <option value="Information">Information</option>
                        <option value="Partenariat">Partenariat</option>
                        <option value="Réclamation">Réclamation</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div><label className="block text-xs font-medium text-navy mb-1">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Décrivez votre demande..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm resize-none" required />
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors w-full">
                      <Send size={15} /> Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="space-y-5">
                <div id="map" className="rounded-xl overflow-hidden h-64 shadow-md">
                  <iframe title="Localisation LABEL PRO CI"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127671.75702777756!2d${company.contact.gps.lng}!3d${company.contact.gps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee9756089e37%3A0x549047f7c26c8af5!2sYamoussoukro!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci`}
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="bg-white rounded-xl p-4 md:p-5 premium-shadow">
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">Coordonnées</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Phone, content: <><div className="text-navy font-medium text-sm">{company.contact.phone}</div><div className="text-steel text-xs">{company.contact.phoneSecondary}</div></> },
                      { icon: Mail, content: <div className="text-navy text-sm">{company.contact.email}</div> },
                      { icon: MapPin, content: <div className="text-navy text-sm">{company.contact.fullAddress}</div> },
                      { icon: Clock, content: <><div className="text-navy text-xs">{company.hours.weekdays}</div><div className="text-navy text-xs">{company.hours.saturday}</div><div className="text-steel text-xs">{company.hours.sunday}</div></> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <item.icon size={14} className="text-orange mt-0.5 flex-shrink-0" />
                        {item.content}
                      </div>
                    ))}
                  </div>
                </div>
                <a href={`https://wa.me/${company.contact.whatsappClean}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-colors">
                  <MessageCircle size={22} />
                  <div><div className="font-heading font-bold text-sm">Écrivez-nous sur WhatsApp</div><div className="text-white/70 text-xs">Réponse rapide garantie</div></div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
