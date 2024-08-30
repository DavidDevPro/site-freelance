import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Lock, User } from "lucide-react";

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
import { APP_NAME2 } from "@/config";
import { SiteFooter, SiteHeader } from "@/components/layout";

// Schéma de validation pour le formulaire de création de compte
const newAccountSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "Veuillez entrer votre prénom.",
    }),
    lastName: z.string().min(1, {
      message: "Veuillez entrer votre nom.",
    }),
    email: z.string().email({
      message: "Veuillez entrer une adresse e-mail valide.",
    }),
    password: z.string().min(6, {
      message: "Le mot de passe doit comporter au moins 6 caractères.",
    }),
    confirmPassword: z.string().min(6, {
      message:
        "Le mot de passe de confirmation doit comporter au moins 6 caractères.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe doivent correspondre.",
    path: ["confirmPassword"],
  });

const NewAccountPage = () => {
  // Créer le formulaire avec React Hook Form et Zod
  const form = useForm<z.infer<typeof newAccountSchema>>({
    resolver: zodResolver(newAccountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Gestionnaire de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof newAccountSchema>) => {
    try {
      console.log("New account data:", values);
      form.reset();
    } catch (err) {
      console.log("Account creation failed", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      {/* Contenu principal */}
      <div className="flex-grow flex flex-col justify-center items-center space-y-10">
        <div className="flex w-96 justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center text-foreground">
            Créer un compte
          </h1>
        </div>

        <div className="bg-white w-96 bg-card p-8 rounded-lg shadow-lg">
          <p className="text-center text-muted-foreground mb-4">
            Rejoignez-nous en créant votre compte client.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 mt-5"
            >
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
                          placeholder="Prénom"
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
                          placeholder="Nom"
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                        <Input
                          type="password"
                          placeholder="Mot de passe"
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
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmer le mot de passe</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                        <Input
                          type="password"
                          placeholder="Confirmer le mot de passe"
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
                  Créer un compte
                </StyledButton>
              </div>
            </form>
          </Form>
        </div>

        <p>
          Déjà inscrit sur {APP_NAME2} ?
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

export default NewAccountPage;
