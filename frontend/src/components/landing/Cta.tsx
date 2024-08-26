import { StyledButton } from "../StyledButton";

export const Cta = () => {
  return (
    <section id="cta" className="bg-card py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Concepts{" "}
            </span>
            In One Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
            sed!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:col-start-2 gap-4">
          <StyledButton className="w-full md:w-auto">
            Request a Demo
          </StyledButton>
          <StyledButton variant="secondary" className="w-full md:w-auto">
            View all features
          </StyledButton>
        </div>
      </div>
    </section>
  );
};
