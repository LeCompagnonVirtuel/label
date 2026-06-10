import { useState } from 'react';
import { FileText, Upload, Send, CheckCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  budget: string;
  description: string;
}

const initialForm: FormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  city: '',
  projectType: '',
  budget: '',
  description: '',
};

export default function Devis() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStep1Valid = form.name && form.phone;
  const isStep2Valid = form.projectType;

  if (submitted) {
    return (
      <>
        <SEOHead
          title="Demande de Devis Envoyé - LABEL PRO CI"
          description="Votre demande de devis a été envoyée avec succès. Notre équipe vous contactera sous 24h."
          url="https://labelproci.com/devis"
        />

        <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy-dark min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
                Demande envoyée avec succès !
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Merci {form.name} ! Notre équipe va étudier votre demande et vous contactera sous 24 heures.
                Vous pouvez également nous joindre directement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${company.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  <Phone size={18} />
                  Appeler maintenant
                </a>
                <a
                  href={`https://wa.me/${company.contact.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Demander un Devis Gratuit - LABEL PRO CI | BTP Yamoussoukro"
        description="Demandez votre devis gratuit pour votre projet de construction, génie civil ou travaux publics. Réponse sous 24h par LABEL PRO CI."
        url="https://labelproci.com/devis"
      />

      {/* Hero */}
      <PageHero
        badge={<><FileText size={16} /> Devis Gratuit</>}
        title={<>Demandez votre <span className="text-orange">devis gratuit</span></>}
        description="Décrivez votre projet et recevez une estimation détaillée sous 24 heures. Sans engagement."
      />

      {/* Form */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              {['Informations', 'Projet', 'Description'].map((label, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > i + 1 ? <CheckCircle size={18} /> : i + 1}
                  </div>
                  <span className={`hidden sm:block text-sm font-medium ${step === i + 1 ? 'text-navy' : 'text-gray-400'}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl p-8 premium-shadow">
              {/* Step 1 */}
              {step === 1 && (
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-xl text-navy mb-6">Vos informations</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Entreprise</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+225 XX XX XX XX XX"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                        required
                      />
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
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-navy mb-2">Ville</label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Ville du projet"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-xl text-navy mb-6">Votre projet</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Type de projet *</label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all bg-white"
                        required
                      >
                        <option value="">Sélectionnez un type de projet</option>
                        {company.services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Budget estimatif</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all bg-white"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        <option value="Moins de 10 millions">Moins de 10 millions FCFA</option>
                        <option value="10 - 50 millions">10 - 50 millions FCFA</option>
                        <option value="50 - 100 millions">50 - 100 millions FCFA</option>
                        <option value="100 - 500 millions">100 - 500 millions FCFA</option>
                        <option value="Plus de 500 millions">Plus de 500 millions FCFA</option>
                        <option value="À définir">À définir</option>
                      </select>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-xl text-navy mb-6">Description du projet</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Description détaillée</label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Décrivez votre projet en détail : type de travaux, superficie, contraintes particulières, délais souhaités..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="devis-files" className="block text-sm font-medium text-navy mb-2">Joindre des documents (optionnel)</label>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-orange transition-colors cursor-pointer">
                        <Upload size={32} className="text-gray-400 mx-auto mb-3" />
                        <p className="text-steel text-sm">
                          Glissez vos fichiers ici ou <span className="text-orange font-medium">parcourir</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-1">PDF, images (max 10 Mo)</p>
                        <input id="devis-files" aria-label="Joindre des documents" type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" multiple />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-steel hover:text-navy font-medium transition-colors"
                  >
                    ← Retour
                  </button>
                ) : (
                  <div />
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                    className="flex items-center gap-2 bg-orange hover:bg-orange-dark disabled:bg-gray-300 text-white px-8 py-3 rounded-xl font-semibold transition-all disabled:cursor-not-allowed"
                  >
                    Suivant
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-xl font-semibold transition-all animate-pulse-glow"
                  >
                    <Send size={18} />
                    Envoyer la demande
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Sidebar info */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle, title: 'Gratuit', desc: 'Devis sans engagement' },
              { icon: Phone, title: 'Réactif', desc: 'Réponse sous 24h' },
              { icon: MessageCircle, title: 'Direct', desc: 'Contact WhatsApp' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                  <item.icon size={20} className="text-orange" />
                </div>
                <div>
                  <div className="font-heading font-bold text-navy text-sm">{item.title}</div>
                  <div className="text-steel text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
