import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Lock } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/Footer";
import { StyledButton } from "@/components/StyledButton";
import { APP_NAME2 } from "@/config";

// Schéma de validation pour le formulaire de connexion
const loginSchema = z.object({
  emailOrPhone: z.string().min(1, {
    message: "Veuillez entrer votre e-mail ou numéro de téléphone.",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit comporter au moins 6 caractères.",
  }),
});

const Login = () => {
  // Créer le formulaire avec React Hook Form et Zod
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrPhone: "",
      password: "",
    },
  });

  // Gestionnaire de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      console.log("Login attempt:", values);
      form.reset();
    } catch (err) {
      console.log("Login failed", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Contenu principal */}
      <div className="flex-grow flex flex-col justify-center items-center space-y-10">
        <div className="flex w-96 justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center text-foreground">
            S’identifier
          </h1>
        </div>

        <div className="bg-white w-96  bg-card p-8 rounded-lg shadow-lg">
          <p className="text-center text-muted-foreground mb-4">
            Connectez-vous sur votre compte client.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 mt-5"
            >
              <FormField
                control={form.control}
                name="emailOrPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email ou Téléphone</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2  text-primary" />
                        <Input
                          placeholder="E-mail ou Téléphone"
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

              <div className="flex justify-center">
                <StyledButton className="w-full">
                  <a
                    href="#!"
                    className=" font-semibold transition duration-300 ease  "
                  >
                    Mot de passe oublié ?
                  </a>
                </StyledButton>
              </div>

              <div className="text-center">
                <StyledButton type="submit" className="w-full">
                  S'identifier
                </StyledButton>
              </div>
            </form>
          </Form>
        </div>

        <p>
          Nouveau sur {APP_NAME2} ?
          <a href="#!" className="text-primary font-bold">
            {" "}
            S’inscrire
          </a>
        </p>
      </div>

      {/* Footer avec une largeur de 1400px et un fond blanc */}
      <div className="bg-white w-full flex justify-center">
        <div className="w-[1400px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
