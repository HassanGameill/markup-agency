import Image from "next/image";
import darklogo from "../../../../public/logos/Main.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center  justify-center h-screen">
      <div className="w-[90px] md:w-[100px] lg:w-[160px] p-1 bg-white rounded-full flex items-center justify-center shadow-md dark:shadow-lg dark:shadow-gray-500 ">
        <Image
          src={darklogo}
          alt="logo"
          width={0}
          height={0}
          className="w-full border-[2.4px] rounded-full"
        />
      </div>
      <h2 className="text-xl text-blue-900 dark:text-white">MARK<span className="text-yellow">UP</span></h2>
      {/* <h2 className="text-xl text-blue-900">Load<span className="text-yellow">ing</span>...</h2> */}

    </div>
  );
};

export default Loader;
