import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { FaEye, FaEyeSlash, FaRegEnvelope, FaUserCheck } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

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
                  <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-6 w-6 shrink-0" />
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
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-6 w-6 shrink-0" />
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
                    {showPassword ? (
                      <FaEyeSlash className="h-6 w-6 shrink-0" />
                    ) : (
                      <FaEye className="h-6 w-6 shrink-0" />
                    )}
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
            <FaUserCheck className="mr-2 h-5 w-5 shrink-0" />
            Se connecter
          </PrimaryButton>
        </div>
      </form>
    </Form>
  );
};
