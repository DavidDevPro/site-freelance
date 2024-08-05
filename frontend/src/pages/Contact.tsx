import { ContactForm } from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-background py-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-foreground">Contactez-nous</h1>
        <p className="text-center text-muted-foreground mb-4">
          Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>
        
        <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-16">


          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <ContactForm />
          </div>
          
        </div>
        
      </div>      
    </div>
  );
};

export default ContactPage;