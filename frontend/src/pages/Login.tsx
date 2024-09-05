import { LoginSection } from "@/components/auth/LoginSection";
import { PageLayoutOneScreen } from "@/components/layout";

const LoginPage = () => {
  return (
    <PageLayoutOneScreen>
      <section className=" container flex-grow flex items-center justify-center px-0">
        <LoginSection />
      </section>
    </PageLayoutOneScreen>
  );
};

export default LoginPage;
