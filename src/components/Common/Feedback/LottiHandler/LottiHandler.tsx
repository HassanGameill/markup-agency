import Lottie from "lottie-react";
import notFound from "../../../../../public/images/lottieFiles/error.json";
import empty from "../../../../../public/images/lottieFiles/empty.json";
import loading from "../../../../../public/images/lottieFiles/loading.json";
import error from "../../../../../public/images/lottieFiles/error.json";
import success from "../../../../../public/images/lottieFiles/success.json";

const lottieFilesMap = {
  notFound,
  empty,
  loading,
  error,
  success,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};



export const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Lottie animationData={lottie} style={{ width: "400px" }} loop={false} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

  