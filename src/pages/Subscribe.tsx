import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logos from "../assets/dgCompany.svg";
import { useCreateSubscriberMutation } from "../graphql/generated";
import AnimatedBackground from "../../src/components/AnimatedBackground";
import {
  EnvelopeSimple,
  IdentificationBadge,
  LockSimple,
} from "phosphor-react";

import { Link } from "react-router-dom";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
        password,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <AnimatedBackground />
      <div className="z-50 w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px]">
          <img src={Logos} alt="" />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma
            <strong className="text-blue-500">aplicaçao completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades de trabalho.
          </p>
        </div>

        <div
          className=" bg-gray-1000"
          style={{ width: "400px", height: "460px", borderRadius: "8px" }}
        >
          <strong className="text-2xl font-thin	 pt-6 pb-6 block text-center">
            Login
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
              <input
                type="text"
                placeholder="Digite sua senha"
                className="bg-dark-400 rounded px-5 h-14 w-60"
                onChange={(e) => setPassword(e.target.value)}
              />
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

            <button
              type="submit"
              disabled={loading}
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
