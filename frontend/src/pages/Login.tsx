import { PageLayoutOneScreen } from "@/components/layout";
import LoginImage from "@/assets/images/login-image.webp";
import { LoginForm } from "@/components/login/LoginForm";

const LoginPage = () => {
  return (
    <PageLayoutOneScreen>
      <section className=" container flex-grow flex items-center justify-center px-0">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
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
      </section>
    </PageLayoutOneScreen>
  );
};

export default LoginPage;
