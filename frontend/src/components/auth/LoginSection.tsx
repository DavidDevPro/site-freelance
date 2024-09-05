import { LoginImage } from "@/assets/images";
import { LoginForm } from "@/components/auth/LoginForm";

export const LoginSection = () => {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
      <div className="md:w-1/2">
        <img
          src={LoginImage}
          alt="Login Illustration"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <LoginForm />
      </div>
    </div>
  );
};
