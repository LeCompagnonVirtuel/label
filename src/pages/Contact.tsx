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
      <SEOHead
        title="Contact - LABEL PRO CI | Entreprise BTP Yamoussoukro"
        description="Contactez LABEL PRO CI pour vos projets de construction et génie civil à Yamoussoukro. Téléphone, email, WhatsApp ou formulaire de contact."
        url="https://labelproci.com/contact"
      />

      {/* Hero */}
      <PageHero
        badge={<><Phone size={16} /> Contact</>}
        title={<>Contactez-<span className="text-orange">nous</span></>}
        description="Notre équipe est à votre disposition pour répondre à vos questions et étudier votre projet."
      />

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            {[
              { icon: Phone, title: 'Téléphone', lines: [company.contact.phone, company.contact.phoneSecondary], href: `tel:${company.contact.phoneClean}`, color: 'bg-navy' },
              { icon: MessageCircle, title: 'WhatsApp', lines: ['Envoyez-nous un message'], href: `https://wa.me/${company.contact.whatsappClean}`, color: 'bg-green-600' },
              { icon: Mail, title: 'Email', lines: [company.contact.email], href: `mailto:${company.contact.email}`, color: 'bg-orange' },
              { icon: MapPin, title: 'Adresse', lines: [company.contact.fullAddress], href: '#map', color: 'bg-steel' },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-2xl p-6 premium-shadow hover:-translate-y-1 transition-all"
                >
                  <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                    <card.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy mb-2">{card.title}</h3>
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-steel text-sm">{line}</p>
                  ))}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection animation="fade-right">
              <div className="bg-white rounded-2xl p-8 premium-shadow">
                <h2 className="font-heading font-bold text-2xl text-navy mb-2">Envoyez-nous un message</h2>
                <p className="text-steel mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-2">Message envoyé !</h3>
                    <p className="text-steel">Merci ! Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Nom complet *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Téléphone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+225 XX XX XX XX XX"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Sujet</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all bg-white"
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="Demande de devis">Demande de devis</option>
                        <option value="Information">Information</option>
                        <option value="Partenariat">Partenariat</option>
                        <option value="Réclamation">Réclamation</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez votre demande..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-xl font-semibold transition-all w-full justify-center"
                    >
                      <Send size={18} />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map + Info */}
            <AnimatedSection animation="fade-left">
              <div className="space-y-6">
                <div id="map" className="rounded-2xl overflow-hidden h-80 shadow-lg">
                  <iframe
                    title="Localisation LABEL PRO CI"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127671.75702777756!2d${company.contact.gps.lng}!3d${company.contact.gps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee9756089e37%3A0x549047f7c26c8af5!2sYamoussoukro!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="bg-white rounded-2xl p-6 premium-shadow">
                  <h3 className="font-heading font-bold text-xl text-navy mb-4">Coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-orange mt-1" />
                      <div>
                        <div className="text-navy font-medium">{company.contact.phone}</div>
                        <div className="text-steel text-sm">{company.contact.phoneSecondary}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-orange mt-1" />
                      <div className="text-navy">{company.contact.email}</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-orange mt-1" />
                      <div className="text-navy">{company.contact.fullAddress}</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-orange mt-1" />
                      <div>
                        <div className="text-navy text-sm">{company.hours.weekdays}</div>
                        <div className="text-navy text-sm">{company.hours.saturday}</div>
                        <div className="text-steel text-sm">{company.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${company.contact.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl transition-all"
                >
                  <MessageCircle size={28} />
                  <div>
                    <div className="font-heading font-bold text-lg">Écrivez-nous sur WhatsApp</div>
                    <div className="text-white/80 text-sm">Réponse rapide garantie</div>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
