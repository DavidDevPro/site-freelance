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
import { Input } from "@/components/ui";
import { Textarea } from "@/components/ui";
import { Checkbox } from "@/components/ui";
import sendContactForm from "@/lib/api/contactApi";
import {
  showMessageSuccess,
  showMessageError,
} from "@/notifications/toastMessages";
import { PrimaryButton } from "@/components/shared";
import { useState } from "react";
import { RiMailSendFill } from "react-icons/ri";

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
  message: z
    .string()
    .min(10, {
      message: "Le message doit comporter au moins 10 caractères.",
    })
    .max(500, {
      message: "Le message ne doit pas dépasser 500 caractères.",
    }),
  consent: z.boolean().refine((value) => value === true, {
    message: "Vous devez accepter de soumettre vos informations personnelles.",
  }),
});

export function ContactForm() {
  const [messageLength, setMessageLength] = useState(0); // State pour suivre la longueur du message

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
      namewebsite: "https://davidwebprojects.fr",
    };

    try {
      const result = await sendContactForm(formDataWithSite);
      console.log("SUCCESS!", result);
      form.reset();
      setMessageLength(0); // Réinitialiser le compteur de caractères
      showMessageSuccess();
    } catch (err) {
      console.log("FAILED...", err);
      showMessageError();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-2 md:p-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Prénom */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Prénom</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary shrink-0" />
                    <Input
                      placeholder="Votre prénom"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage className="mt-2 text-red-600" />
              </FormItem>
            )}
          />
          {/* Nom */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Nom</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary shrink-0" />
                    <Input
                      placeholder="Votre nom"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage className="mt-2 text-red-600" />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary shrink-0" />
                    <Input
                      placeholder="Votre email"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage className="mt-2 text-red-600" />
              </FormItem>
            )}
          />
          {/* Téléphone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Téléphone</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary shrink-0" />
                    <Input
                      placeholder="Votre téléphone"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                  </div>
                </FormControl>
                <FormMessage className="mt-2 text-red-600" />
              </FormItem>
            )}
          />
        </div>
        {/* Sujet */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Sujet</FormLabel>
              <FormControl>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary shrink-0" />
                  <Input
                    placeholder="Le sujet de votre demande"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </FormControl>
              <FormMessage className="mt-2 text-red-600" />
            </FormItem>
          )}
        />
        {/* Message avec limitation de caractères */}
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-base">Message</FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    placeholder="Votre message"
                    {...field}
                    className="min-h-[200px] w-full border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    maxLength={500}
                    onChange={(e) => {
                      setMessageLength(e.target.value.length);
                      field.onChange(e);
                    }}
                  />
                </div>
              </FormControl>
              {fieldState.invalid ? (
                <FormMessage className="mt-2 text-red-600" />
              ) : (
                <FormDescription className="mt-2 text-gray-600">
                  {`${messageLength}/500 caractères`}
                </FormDescription>
              )}
            </FormItem>
          )}
        />
        {/* Consentement */}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2 lg:mt-20 mt-10">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm text-center">
                  {`J'accepte de soumettre mes informations personnelles via ce formulaire`}
                </FormLabel>
              </div>
              <FormMessage className="text-red-600 mt-2" />{" "}
              {/* Afficher le message d'erreur en dessous */}
            </FormItem>
          )}
        />
        {/* Bouton Envoyer */}
        <div className="flex justify-center  mb-4">
          <PrimaryButton type="submit" variant="primary">
            <RiMailSendFill className="mr-2 mt-0.5 h-4 w-4 shrink-0" />
            Envoyer
          </PrimaryButton>
        </div>
      </form>
    </Form>
  );
}
