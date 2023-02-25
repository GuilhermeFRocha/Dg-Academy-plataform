import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import AnimatedBackground from "../../src/components/AnimatedBackground";
import {
  EnvelopeSimple,
  Eye,
  EyeSlash,
  IdentificationBadge,
  LockSimple,
} from "phosphor-react";

import { Link } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { Vortex } from "react-loader-spinner";

export function Register() {
  const valueKey = Math.random().toString()
  const navigate = useNavigate();
  const [typePassword, setTypePassword] = useState("text");
  const [loadingSpiner, setLoadingSpiner] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    if (name || email || password === "") {
      setError("preencha todos os dados");
    }

    if (name && email && password !== "") {
      setError("");
    }

    if (name && email && password !== "") {
      setLoadingSpiner(true);
      localStorage.setItem("key", valueKey);

      await createSubscriber({
        variables: {
          name,
          email,
          password,
        },
      });

      navigate("/event");
      window.location.reload();
      setLoadingSpiner(false);
    }
  }
  function handleClick() {
    setTypePassword("text");
  }

  function handleClickSlash() {
    setTypePassword("password");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <AnimatedBackground />
      <div className="z-50 w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <HomePage />
        {loadingSpiner && (
          <div className="vortex">
            <Vortex
              visible={true}
              height="200"
              width="200"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={[
                "#7453f8",
                "#7453f8",
                "#afadc6",
                "#7453f8",
                "#afadc6",
                "#7453f8",
              ]}
            />
          </div>
        )}
        <div
          className=" bg-gray-1000"
          style={{ width: "400px", height: "460px", borderRadius: "8px" }}
        >
          <strong className="text-2xl font-thin	 pt-6 pb-6 block text-center">
            Cadastro
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <div className="flex items-center justify-center">
              <div className="bg-dark-100 h-14 w-12 flex justify-center items-center rounded -mr-1 pr-1">
                <IdentificationBadge size={20} weight="bold" />
              </div>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="bg-dark-400 rounded px-5 h-14 w-60 "
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-dark-100 h-14 w-12 flex justify-center items-center rounded -mr-1 pr-1">
                <LockSimple size={20} weight="bold" />
              </div>
              <div className="relative">
                <input
                  type={typePassword}
                  placeholder="Digite sua senha"
                  className="bg-dark-400 rounded px-5 h-14 w-60"
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex items-center justify-center">
              <div className="bg-dark-100 h-14 w-12 flex justify-center items-center rounded -mr-1 pr-1">
                <EnvelopeSimple size={20} weight="bold" />
              </div>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="bg-dark-400 rounded px-5 h-14 w-60"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center m-0 text-red-100">
              <p>{error}</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 m-auto bg-purpple-600 uppercase py-4 rounded font-bold text-sm hover:bg-purpple-300 transition-colors disabled:opacity-50 h-19 w-72"
            >
              Iniciar
            </button>
          </form>
          <div className="flex items-center gap-2 w-72 m-auto pt-10">
            <div className="w-2 h-11 rounded-lg bg-purpple-300 border-2 border-gray-900 border-purpple-700"></div>
            <div>
              <p className="text-gray-400 text-sm font-medium">
                Ja faz parte do squad?
              </p>
              <Link
                className="text-gray-400 text-sm font-extralight underline"
                to="/"
              >
                Faça login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
