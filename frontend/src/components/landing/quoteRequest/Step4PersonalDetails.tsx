import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { fetchCivilities, Civility } from "@/lib/api/civilityApi";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { FiMapPin, FiPhone } from "react-icons/fi";

export const Step4PersonalDetails = () => {
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
    clearErrors,
  } = useFormContext();
  const [civilities, setCivilities] = useState<Civility[]>([]);

  const customerType = getValues("customerType");

  useEffect(() => {
    if (!customerType) {
      setValue("customerType", "particulier");
    }

    const loadCivilities = async () => {
      try {
        const fetchedCivilities = await fetchCivilities();
        setCivilities(fetchedCivilities);
      } catch (error) {
        console.error("Failed to fetch civilities", error);
      }
    };

    loadCivilities();
  }, [customerType, setValue]);

  return (
    <>
      <div className="flex justify-center mb-2">
        <RadioGroup
          value={customerType || "particulier"}
          onValueChange={(value) => {
            setValue("customerType", value);
            clearErrors("customerType");
            console.log("customerType set to:", value);
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

      {customerType === "entreprise" && (
        <div className="flex flex-col">
          <FormField
            control={control}
            name="company"
            rules={{ required: "Raison Sociale est requise" }}
            render={({ field }) => (
              <FormItem className="space-y-2 mt-1 w-full">
                <FormLabel>
                  Raison Sociale <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <BsBuildings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                    <Input
                      placeholder="Votre Raison Sociale"
                      {...field}
                      className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        clearErrors("company");
                      }}
                    />
                  </div>
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

      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormField
          control={control}
          name="civility"
          rules={{ required: "Civilité est requise" }}
          render={({ field }) => (
            <FormItem className="space-y-2 mt-1 w-full md:w-1/4">
              <FormLabel>
                Civilité <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  value={field.value || ""}
                  onValueChange={(value) => {
                    const selectedCivility = civilities.find(
                      (civility) => civility.longLabel === value
                    );
                    if (selectedCivility) {
                      field.onChange(selectedCivility.longLabel); // Utilisez la même valeur pour SelectItem et Select
                      clearErrors("civility");
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une civilité" />
                  </SelectTrigger>
                  <SelectContent>
                    {civilities.map((civility) => (
                      <SelectItem
                        key={civility.id}
                        value={civility.longLabel}
                        className="hover:bg-primary hover:text-card focus:bg-primary focus:text-card"
                      >
                        {civility.longLabel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
            <FormItem className="space-y-2 mt-1 w-full md:w-1/4">
              <FormLabel>
                Prénom <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre prénom"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("firstName");
                    }}
                  />
                </div>
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
            <FormItem className="space-y-2 mt-1 w-full md:w-1/2">
              <FormLabel>
                Nom <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre nom"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("lastName");
                    }}
                  />
                </div>
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

      <div className="flex flex-col">
        <FormField
          control={control}
          name="address"
          rules={{ required: "Adresse est requise" }}
          render={({ field }) => (
            <FormItem className="space-y-2 mt-1 w-full">
              <FormLabel>
                Adresse <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre adresse"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("address");
                    }}
                  />
                </div>
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

      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormField
          control={control}
          name="postalCode"
          rules={{ required: "Code Postal est requis" }}
          render={({ field }) => (
            <FormItem className="space-y-2 mt-1 w-full md:w-1/4">
              <FormLabel>
                Code Postal <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre code postal"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("postalCode");
                    }}
                  />
                </div>
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
            <FormItem className="space-y-2 mt-1 w-full md:w-3/4">
              <FormLabel>
                Ville <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre ville"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("city");
                    }}
                  />
                </div>
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

      <div className="flex flex-col md:flex-row md:space-x-4">
        <FormField
          control={control}
          name="phone"
          rules={{
            required: "Téléphone est requis",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Le numéro de téléphone doit comporter 10 chiffres",
            },
          }}
          render={({ field }) => (
            <FormItem className="space-y-2 mt-1 w-full md:w-1/2">
              <FormLabel>
                Téléphone <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre téléphone"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("phone");
                    }}
                  />
                </div>
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
          rules={{
            required: "Email est requis",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Adresse email invalide",
            },
          }}
          render={({ field }) => (
            <FormItem className="space-y-2 mt-1 w-full md:w-1/2">
              <FormLabel>
                Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
                  <Input
                    placeholder="Votre email"
                    {...field}
                    className="w-full pl-10 border-input rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      clearErrors("email");
                    }}
                  />
                </div>
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
