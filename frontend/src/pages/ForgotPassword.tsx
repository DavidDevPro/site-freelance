import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { StyledButton } from "@/components/shared/StyledButton";
import { SiteFooter, SiteHeader } from "@/components/layout";

// Schéma de validation pour le formulaire de réinitialisation de mot de passe
const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide.",
  }),
});

const ForgotPasswordPage = () => {
  // Créer le formulaire avec React Hook Form et Zod
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Gestionnaire de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    try {
      console.log("Forgot password request:", values);
      // Ajoutez ici la logique pour envoyer un email de réinitialisation
      form.reset();
    } catch (err) {
      console.log("Forgot password request failed", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      {/* Contenu principal */}
      <div className="flex-grow flex flex-col justify-center items-center space-y-10">
        <div className="flex w-96 justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center text-foreground">
            Mot de passe oublié
          </h1>
        </div>

        <div className="bg-white w-96 bg-card p-8 rounded-lg shadow-lg">
          <p className="text-center text-muted-foreground mb-4">
            Entrez votre adresse e-mail pour recevoir un lien de
            réinitialisation de mot de passe.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)} // handleSubmit empêche automatiquement le rechargement de la page
              className="space-y-5 mt-5"
            >
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
                          placeholder="E-mail"
                          {...field}
                          className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <StyledButton type="submit" className="w-full">
                  Envoyer
                </StyledButton>
              </div>
            </form>
          </Form>
        </div>

        <p>
          Vous vous souvenez de votre mot de passe ?
          <a href="/login" className="text-primary font-bold">
            {" "}
            Connectez-vous
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="bg-white w-full flex justify-center">
        <div className="w-[1400px]"></div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default ForgotPasswordPage;
