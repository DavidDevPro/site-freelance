import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useDropzone } from "react-dropzone";

import {
  showTestimonialSuccess,
  showTestimonialError,
} from "@/utils/toastUtils";
import { createTestimonial } from "@/services/testimonialsApi";
import { MdClose } from "react-icons/md";
import { StyledButton } from "@/components/StyledButton";

const MAX_CHAR_COUNT = 300;
const MIN_CHAR_COUNT = 50;

// Définir le schéma de validation du formulaire avec Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  userName: z.string().min(2, {
    message: "Le rôle doit contenir au moins 2 caractères.",
  }),
  comment: z
    .string()
    .min(MIN_CHAR_COUNT, {
      message: `Le témoignage doit contenir au moins ${MIN_CHAR_COUNT} caractères.`,
    })
    .max(MAX_CHAR_COUNT, {
      message: `Le témoignage ne doit pas dépasser ${MAX_CHAR_COUNT} caractères.`,
    }),
});

interface TestimonialFormInputs {
  name: string;
  userName: string;
  comment: string;
}

interface TestimonialFormProps {
  onSubmit: () => void;
  closeModal: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({
  onSubmit,
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TestimonialFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      userName: "",
      comment: "",
    },
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
    maxSize: 5242880, // 5MB
  });

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  }, [selectedFile]);

  const handleFormSubmit: SubmitHandler<TestimonialFormInputs> = async (
    data
  ) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("role", data.userName);
      formData.append("comment", data.comment);

      if (selectedFile) {
        formData.append("avatar", selectedFile);
      }

      await createTestimonial(formData);

      setLoading(false);
      reset();
      setSelectedFile(null);
      showTestimonialSuccess();
      onSubmit();
      closeModal();
    } catch (err) {
      setLoading(false);
      showTestimonialError();
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          * Nom / Prénom
        </label>
        <Input
          type="text"
          {...register("name")}
          placeholder="John Doe"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          * Rôle
        </label>
        <Input
          type="text"
          {...register("userName")}
          placeholder="CEO"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
        {errors.userName && (
          <p className="text-red-500">{errors.userName.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Avatar
        </label>
        {!imagePreview && (
          <div
            {...getRootProps({
              className:
                "dropzone border-dashed border-2 border-gray-300 rounded-lg p-4 text-center cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <p className="text-gray-500">
              Glissez-déposez ou sélectionnez une image
            </p>
            <p className="text-gray-500">.jpeg / .jpg / .png (MAX: 5MB)</p>
          </div>
        )}
        {imagePreview && (
          <div className="relative mt-4 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
            <img
              src={imagePreview}
              alt="Avatar Preview"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700"
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          * Témoignage
        </label>
        <Textarea
          {...register("comment")}
          onChange={handleCommentChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          placeholder="Dites-nous pourquoi vous nous recommanderiez"
        />
        <div className="text-right text-sm text-gray-500">
          {charCount}/{MAX_CHAR_COUNT} caractères
        </div>
        {errors.comment && (
          <p className="text-red-500">{errors.comment.message}</p>
        )}
      </div>
      <div className="text-center">
        <StyledButton type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </StyledButton>
      </div>
    </form>
  );
};

export default TestimonialForm;
