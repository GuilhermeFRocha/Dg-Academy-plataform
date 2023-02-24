import { gql } from "@apollo/client";
import { useState, useContext, useEffect } from "react";
import { client } from "../lib/apollo";
import { Link, useNavigate } from "react-router-dom";
import { EnvelopeSimple, LockSimple, Eye, EyeSlash } from "phosphor-react";
import AnimatedBackground from "../components/AnimatedBackground";
import { HomePage } from "../components/HomePage";

export function Subscribe() {
  const navigate = useNavigate();
  const [errosForm, setErrorForm] = useState("");
  const [typePassword, setTypePassword] = useState("text");
  const [loadingSpiner, setLoadingSpiner] = useState(false);


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { data } = await client.query({
      query: gql`
        query MyQuery {
          subscribers {
            email
            password
          }
        }
      `,
      variables: { email, password },
    });
    const userPassword = data.subscribers.filter(
      (it: any) => it.password === password
    );
    const userEmail = data.subscribers.filter((it: any) => it.email === email);

    if (userPassword[0] && userEmail[0]) {
      setLoadingSpiner(true);
      localStorage.setItem("key", "asmkdaksmdkasd");
      navigate("/event");
      window.location.reload();
      setLoadingSpiner(false);
      return;
    } else {
      setErrorForm("Email ou Senha invalida");
      return;
    }
  };

  function handleClick() {
    setTypePassword("text");
  }

  function handleClickSlash() {
    setTypePassword("password");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <AnimatedBackground />
      <div className="z-50 w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <HomePage />

        <div
          className=" bg-gray-1000"
          style={{ width: "400px", height: "460px", borderRadius: "8px" }}
        >
          <strong className="text-2xl font-thin	 pt-6 pb-6 block text-center">
            Login
          </strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-center">
              <div className="bg-dark-100 h-14 w-12 flex justify-center items-center rounded -mr-1 pr-1">
                <EnvelopeSimple size={20} weight="bold" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-dark-400 rounded px-5 h-14 w-60"
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-dark-100 h-14 w-12 flex justify-center items-center rounded -mr-1 pr-1">
                <LockSimple size={20} weight="bold" />
              </div>
              <div className="relative">
                <input
                  type={typePassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-dark-400 rounded px-5 h-14 w-60 "
                />
                {typePassword === "password" ? (
                  <EyeSlash
                    className="absolute right-4 top-1/3 text-purple-700 "
                    size="20px"
                    onClick={handleClick}
                  />
                ) : (
                  <Eye
                    className="absolute right-4 top-1/3 text-purple-700 "
                    size="20px"
                    onClick={handleClickSlash}
                  />
                )}
              </div>
            </div>

            {errosForm !== "" && (
              <div className="flex items-center justify-center mt-4 text-red-100">
                <p> {errosForm}</p>
              </div>
            )}

            <button
              type="submit"
              className="mt-4 m-auto bg-purpple-600 uppercase py-4 rounded font-bold text-sm hover:bg-purpple-300 transition-colors disabled:opacity-50 h-19 w-72"
            >
              Entrar
            </button>
          </form>
          <div className="flex items-center gap-2 w-72 m-auto pt-10">
            <div className="w-2 h-11 rounded-lg bg-purpple-300 border-2 border-gray-900 border-purpple-700"></div>
            <div>
              <p className="text-gray-400 text-sm font-medium">
                Novo no squad?
              </p>
              <Link
                className="text-gray-400 text-sm font-extralight underline"
                to="/register"
              >
                solicite acesso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
