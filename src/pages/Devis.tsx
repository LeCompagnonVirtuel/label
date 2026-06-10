import { useState } from 'react';
import { FileText, Send, CheckCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

interface FormData {
  name: string; company: string; phone: string; email: string;
  city: string; projectType: string; budget: string; description: string;
}

const initialForm: FormData = { name: '', company: '', phone: '', email: '', city: '', projectType: '', budget: '', description: '' };

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

  const isStep1Valid = form.name && form.phone;
  const isStep2Valid = form.projectType;

  if (submitted) {
    return (
      <>
        <SEOHead title="Demande de Devis Envoyé - LABEL PRO CI" description="Votre demande de devis a été envoyée avec succès." url="https://labelproci.com/devis" />
        <section className="relative pt-28 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy-dark min-h-screen flex items-center">
          <div className="max-w-lg mx-auto container-site text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3">Demande envoyée avec succès !</h1>
              <p className="text-white/60 text-sm mb-6">
                Merci {form.name} ! Notre équipe vous contactera sous 24 heures.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <a href={`tel:${company.contact.phoneClean}`} className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                  <Phone size={16} /> Appeler maintenant
                </a>
                <a href={`https://wa.me/${company.contact.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                  <MessageCircle size={16} /> WhatsApp
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
      <SEOHead title="Demander un Devis Gratuit - LABEL PRO CI | BTP Yamoussoukro" description="Demandez votre devis gratuit pour votre projet de construction. Réponse sous 24h." url="https://labelproci.com/devis" />
      <PageHero
        badge={<><FileText size={14} /> Devis Gratuit</>}
        title={<>Demandez votre <span className="text-orange">devis gratuit</span></>}
        description="Décrivez votre projet et recevez une estimation détaillée sous 24 heures."
      />

      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-3xl mx-auto container-site">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              {['Informations', 'Projet', 'Description'].map((label, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > i + 1 ? <CheckCircle size={12} /> : i + 1}
                  </div>
                  <span className={`hidden sm:block text-xs font-medium ${step === i + 1 ? 'text-navy' : 'text-gray-400'}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-xl p-5 md:p-6 premium-shadow">
              {step === 1 && (
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-lg text-navy mb-5">Vos informations</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Nom complet *</label><input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Votre nom complet" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" required /></div>
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Entreprise</label><input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nom de votre entreprise" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" /></div>
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Téléphone *</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+225 XX XX XX XX XX" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" required /></div>
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" /></div>
                    <div className="md:col-span-2"><label className="block text-xs font-medium text-navy mb-1.5">Ville</label><input type="text" name="city" value={form.city} onChange={handleChange} placeholder="Ville du projet" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" /></div>
                  </div>
                </AnimatedSection>
              )}

              {step === 2 && (
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-lg text-navy mb-5">Votre projet</h2>
                  <div className="space-y-4">
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Type de projet *</label>
                      <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white" required>
                        <option value="">Sélectionnez un type</option>
                        {company.services.map(s => (<option key={s.id} value={s.title}>{s.title}</option>))}
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Budget estimatif</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white">
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

              {step === 3 && (
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-lg text-navy mb-5">Description du projet</h2>
                  <div className="space-y-4">
                    <div><label className="block text-xs font-medium text-navy mb-1.5">Description détaillée</label>
                      <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Décrivez votre projet : type de travaux, superficie, contraintes, délais..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm resize-none" />
                    </div>
                  </div>
                </AnimatedSection>
              )}

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)} className="text-steel hover:text-navy font-medium text-sm transition-colors">← Retour</button>
                ) : (<div />)}
                {step < 3 ? (
                  <button type="button" onClick={() => setStep(step + 1)} disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                    className="flex items-center gap-1.5 bg-orange hover:bg-orange-dark disabled:bg-gray-300 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors disabled:cursor-not-allowed">
                    Suivant <ArrowRight size={15} />
                  </button>
                ) : (
                  <button type="submit" className="flex items-center gap-1.5 bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors animate-pulse-glow">
                    <Send size={15} /> Envoyer
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: CheckCircle, title: 'Gratuit', desc: 'Sans engagement' },
              { icon: Phone, title: 'Réactif', desc: 'Réponse 24h' },
              { icon: MessageCircle, title: 'Direct', desc: 'WhatsApp' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-orange/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <item.icon size={14} className="text-orange" />
                </div>
                <div><div className="font-heading font-bold text-navy text-xs">{item.title}</div><div className="text-steel text-[10px]">{item.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
