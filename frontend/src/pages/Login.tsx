import { Footer } from "@/components/Footer";

const Login = () => {
  return (
    <div>
      <div className=" header-bg2 h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        {/* <!-- logo --> */}
        <div className="flex w-96 justify-center">
          <h1 className="text-3xl font-medium">S’identifier</h1>
        </div>

        {/* <!-- Layout  --> */}
        <div className="bg-white w-96 shadow-xl rounded p-5">
          <p className="text-sm flex  justify-center">
            Connectez-vous sur votre compte client.
          </p>
          <form className="space-y-5 mt-5">
            <input
              type="text"
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="E-mail ou Téléphone"
            />
            <div className="w-full flex items-center border border-gray-800 rounded px-0">
              <input
                type="password"
                className="w-4/5 h-12 px-3"
                placeholder="Mot de passe"
              />
              <span className="font-medium text-blue-700 hover:text-white hover:bg-blue-400 transition duration-300 ease rounded-full px-4 mx-1 cursor-pointer">
                afficher
              </span>
            </div>

            <div className="flex justify-center">
              <a
                href="#!"
                className="font-medium  text-blue-700 hover:bg-blue-300 hover:text-white transition duration-300 ease rounded-full p-2"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button className="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium">
              S'identifier
            </button>
          </form>
        </div>

        {/* <!-- Footer --> */}
        <p>
          Nouveau sur David Web Projects ?
          <a href="#!" className="text-blue-700 font-medium">
            {" "}
            S’inscrire
          </a>
        </p>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
      <Footer />
    </div>
  );
};

export default Login;
