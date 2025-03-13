
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    details: "bembakebe106@gmail.com",
    link: "mailto:bembakebe106@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Téléphone",
    details: "07 69 96 15 48",
    link: "tel:0769961548"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Adresse",
    details: "106 rue Gabriel Peri 94250 Gentilly"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du message
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="page-section">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Contact
          </span>
          <h2 className="section-heading">Me contacter</h2>
          <p className="section-subheading">
            Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-primary hover:underline transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p>{info.details}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-0 shadow-lg glass-panel animate-fade-up overflow-hidden">
          <CardContent className="p-8">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                    className="bg-white/50 backdrop-blur-sm border border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Adresse email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    required
                    className="bg-white/50 backdrop-blur-sm border border-border/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Le sujet de votre message"
                  required
                  className="bg-white/50 backdrop-blur-sm border border-border/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message en détail..."
                  rows={5}
                  required
                  className="bg-white/50 backdrop-blur-sm border border-border/50"
                />
              </div>
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  className="button-primary w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
