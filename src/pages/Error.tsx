import coneServerError from "../components/AnimatedBackground/coneservererror.json";
import Lottie from "react-lottie-player";

export function ErrorPage() {
  return (
    <div className=" absolute flex justify-center items-center overflow-hidden w-full h-full">
      <div className="loadingContainer">
        <Lottie
          loop={false}
          animationData={coneServerError}
          play
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
}
