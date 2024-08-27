import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, User, MessageSquare, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import sendContactForm from "@/services/contactApi";
import { showMessageSuccess, showMessageError } from "@/utils/toastUtils";
import { StyledButton } from "@/components/StyledButton";

// Définir le schéma de validation du formulaire avec Zod
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit comporter au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().min(10, {
    message: "Le numéro de téléphone doit comporter au moins 10 caractères.",
  }),
  subject: z.string().min(2, {
    message: "Le sujet doit comporter au moins 2 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit comporter au moins 10 caractères.",
  }),
  consent: z.boolean().refine((value) => value === true, {
    message: "Vous devez accepter de soumettre vos informations personnelles.",
  }),
});

export function ContactForm() {
  // Créer le formulaire avec React Hook Form et Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  // Définir le gestionnaire de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Ajouter la valeur "freelance" à l'objet de données
    const formDataWithSite = {
      ...values,
      site: "freelance", // Ajout de la valeur "freelance" au champ "site"
    };

    try {
      const result = await sendContactForm(formDataWithSite);
      console.log("SUCCESS!", result);
      form.reset();
      showMessageSuccess();
    } catch (err) {
      console.log("FAILED...", err);
      showMessageError();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="Votre prénom"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="Votre nom"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="Votre adresse email"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="Votre numéro de téléphone"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet</FormLabel>
              <FormControl>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                  <Input
                    placeholder="Le sujet de votre demande"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    placeholder="Votre message"
                    {...field}
                    className="w-full border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </FormControl>
              <FormDescription>
                Veuillez entrer les détails de votre demande.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex items-center space-y-0 space-x-2 mt-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>
                J'accepte de soumettre mes informations personnelles via ce
                formulaire
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center mb-4">
          <StyledButton type="submit" variant="primary">
            Envoyer
          </StyledButton>
        </div>
      </form>
    </Form>
  );
}
