

const Login = () => {
  return (
    <div>
      <div
      className="h-screen bg-white flex flex-col space-y-10 justify-center items-center"
    >
      {/* <!-- linkedin logo --> */}
      <div className="flex w-96">
        <h2>David Web Projects</h2>
      </div>

      {/* <!-- Layout  --> */}
      <div className="bg-white w-96 shadow-xl rounded p-5">
        <h1 className="text-3xl font-medium">S’identifier</h1>
        <p className="text-sm">
          Tenez-vous au courant des évolutions de votre monde professionnel
        </p>
        <form className="space-y-5 mt-5">
          <input
            type="text"
            className="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="E-mail ou Téléphone"
          />
          <div
            className="w-full flex items-center border border-gray-800 rounded px-3"
          >
            <input
              type="password"
              className="w-4/5 h-12"
              placeholder="Mot de passe"
            />
            <span className="text-blue-700 hover:bg-blue-400 rounded-full px-3"
              >afficher</span>
            
          </div>

          <div className="">
            <a
              href="#!"
              className="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2"
              >Mot de passe oublié ?</a>
            
          </div>

          <button
            className="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium"
          >
            S'identifier
          </button>
        </form>
      </div>

      {/* <!-- Footer --> */}
      <p>
        Nouveau sur David Web Projects ?
        <a href="#!" className="text-blue-700 font-medium"> S’inscrire</a>
      </p>
    </div>

    
    <div
      className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"
    ></div>
    </div>
  );
};

export default Login;