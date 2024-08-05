import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Contactez-nous
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
       

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
              <Input id="name" name="name" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" name="email" type="email" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" name="message" rows={4} required className="mt-1" />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};