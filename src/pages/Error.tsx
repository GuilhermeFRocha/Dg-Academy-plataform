import coneServerError from "../components/AnimatedBackground/coneservererror.json";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className=' absolute flex justify-center items-center overflow-hidden w-full h-full'>
      <div className='loadingContainer'>
        <Lottie
          loop={false}
          animationData={coneServerError}
          play
          style={{ width: 200, height: 200 }}
          className='mx-auto'
        />

        <div className='text-center	grid'>
          <h1>
            Voce não possui permissão, clique abaixo para voltar na pagina de
            Login.
          </h1>
          <Link
            to='/'
            className='py-5 mt-4 m-auto bg-purpple-600 uppercase  rounded font-bold text-sm hover:bg-purpple-300 transition-colors disabled:opacity-50 h-19 w-72'
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
