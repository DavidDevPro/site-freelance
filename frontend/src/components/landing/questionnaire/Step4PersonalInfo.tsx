import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Step4PersonalInfo = () => {
  const {
    control,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext(); // Obtenez le contrôle du formulaire et les erreurs
  const [customerType, setCustomerType] = useState("particulier");

  return (
    <>
      {/* Ligne 1: Particulier / Entreprise */}
      <div className="flex justify-center mb-2">
        <RadioGroup
          value={customerType}
          onValueChange={(value) => {
            setCustomerType(value);
            setValue("customerType", value); // Mettez à jour le champ customerType dans react-hook-form
            clearErrors("customerType"); // Supprimer les erreurs pour ce champ
          }}
          className="flex space-x-4"
        >
          <FormItem className="space-y-0 flex items-center">
            <RadioGroupItem value="particulier" id="particulier" />
            <FormLabel htmlFor="particulier" className="ml-2 text-lg">
              Particulier
            </FormLabel>
          </FormItem>
          <FormItem className="space-y-0 flex items-center">
            <RadioGroupItem value="entreprise" id="entreprise" />
            <FormLabel htmlFor="entreprise" className="ml-2 text-lg">
              Entreprise
            </FormLabel>
          </FormItem>
        </RadioGroup>
      </div>

      {/* Ligne 2: Raison Sociale (si nécessaire) */}
      {customerType === "entreprise" && (
        <div className="flex flex-col">
          <FormField
            control={control}
            name="company"
            rules={{ required: "Raison Sociale est requise" }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Raison Sociale <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre Raison Sociale"
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("company"); // Supprimer les erreurs pour ce champ
                    }}
                  />
                </FormControl>
                {errors.company && (
                  <FormMessage className="text-red-500">
                    {errors.company.message?.toString()}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
      )}

      {/* Ligne 3: Civilité, Prénom, Nom */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormField
          control={control}
          name="civility"
          rules={{ required: "Civilité est requise" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-1/4">
              <FormLabel>
                Civilité <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="M., Mme, ..."
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("civility"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.civility && (
                <FormMessage className="text-red-500">
                  {errors.civility.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="firstName"
          rules={{ required: "Prénom est requis" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-1/4">
              <FormLabel>
                Prénom <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre prénom"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("firstName"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.firstName && (
                <FormMessage className="text-red-500">
                  {errors.firstName.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastName"
          rules={{ required: "Nom est requis" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2">
              <FormLabel>
                Nom <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre nom"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("lastName"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.lastName && (
                <FormMessage className="text-red-500">
                  {errors.lastName.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>

      {/* Ligne 4: Adresse */}
      <div className="flex flex-col">
        <FormField
          control={control}
          name="address"
          rules={{ required: "Adresse est requise" }}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                Adresse <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre adresse"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("address"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.address && (
                <FormMessage className="text-red-500">
                  {errors.address.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>

      {/* Ligne 5: Code Postal, Ville */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormField
          control={control}
          name="postalCode"
          rules={{ required: "Code Postal est requis" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-1/4">
              <FormLabel>
                Code Postal <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre code postal"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("postalCode"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.postalCode && (
                <FormMessage className="text-red-500">
                  {errors.postalCode.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          rules={{ required: "Ville est requise" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-3/4">
              <FormLabel>
                Ville <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre ville"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("city"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.city && (
                <FormMessage className="text-red-500">
                  {errors.city.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>

      {/* Ligne 6: Téléphone, Email */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormField
          control={control}
          name="phone"
          rules={{ required: "Téléphone est requis" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2">
              <FormLabel>
                Téléphone <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre téléphone"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("phone"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.phone && (
                <FormMessage className="text-red-500">
                  {errors.phone.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          rules={{ required: "Email est requis" }}
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2">
              <FormLabel>
                Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre email"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    clearErrors("email"); // Supprimer les erreurs pour ce champ
                  }}
                />
              </FormControl>
              {errors.email && (
                <FormMessage className="text-red-500">
                  {errors.email.message?.toString()}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Vos données personnelles sont protégées et ne seront jamais vendues à
        des tiers. Elles seront utilisées uniquement dans le cadre de votre
        demande de devis conformément à la réglementation en vigueur (RGPD).
      </p>
    </>
  );
};
