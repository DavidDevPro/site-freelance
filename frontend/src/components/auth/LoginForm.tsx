import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { RiUserSharedLine } from "react-icons/ri";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui";
import { logo } from "@/assets/images";
import { PrimaryButton } from "@/components/shared";

// Définir le schéma de validation du formulaire avec Zod
const loginSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide."),
  password: z
    .string()
    .min(6, "Le mot de passe doit comporter au moins 6 caractères."),
});

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Définir le gestionnaire de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log("Form data", values);
    // Ajoutez ici la logique de connexion, comme appeler une API
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-1 sm:p-4"
      >
        <div className="flex justify-center  ">
          <div className="h-28 w-28 relative">
            <img
              src={logo}
              alt="FabWebProjects Logo"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
        <p className="mx-auto text-center text-secondary font-medium text-base lg:text-lg  transition-text ease duration-300">
          Veuillez vous connecter pour accéder à votre espace client.
        </p>
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
                    id="email"
                    type="email"
                    placeholder="Votre identifiant"
                    {...field}
                    className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
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
              <FormLabel className="text-base">Mot de passe</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary shrink-0" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                    {...field}
                    className="w-full pl-10 pr-10 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center text-sm mb-4">
          <a
            href="#"
            className="mx-auto text-center text-secondary font-medium text-sm lg:text-base mb-8 transition-text ease duration-300 hover:text-primary"
          >
            Mot de Passe Oublié ?
          </a>
        </div>
        <div className="flex justify-center mb-4">
          <PrimaryButton type="submit" variant="primary">
            <RiUserSharedLine className="mr-2 h-4 w-4 shrink-0" />
            Se connecter
          </PrimaryButton>
        </div>
      </form>
    </Form>
  );
};
