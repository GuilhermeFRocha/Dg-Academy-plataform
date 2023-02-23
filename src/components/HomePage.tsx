import Logos from "../assets/dgCompany.svg";

export const HomePage = () => {
  return (
    <div className="max-w-[640px]">
      <img src={Logos} alt="" />
      <h1 className="mt-8 text-[2.5rem] leading-tight">
        Transforme sua
        <strong className="text-purpple-300 pr-3 pl-3">jornada</strong>na
        programação em uma estrada rápida para o
        <strong className="text-purpple-300 pl-3">sucesso.</strong>
      </h1>
      <p className="mt-4 text-gray-200 leading-relaxed">
        Desenvolva suas habilidades em programação e crie o futuro que você
        imagina, tudo isso com nossa plataforma interativa e super didádica!
      </p>
    </div>
  );
};
