import Image from "next/image";
import Matic from "../assets/Matic.svg";

export const OurPartners = () => {
  return (
    <div className="bg-gradient-to-br from-background to-backgroundTwo  mt-8 rounded-3xl border-spacing-1 border border-backgroundOne ">
      <div>
        <h1 className="md:text-3xl text-xl lg:font-black font-bold lg:mt-12 mt-4 lg:pt-4 text-blue text-transparent text-center ">
          Partners & Sponsors
        </h1>
        <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <Image priority src={Matic} alt="Hero picture" className="w-32" />
          </div>
        </div>
        <h1 className=" flex justify-center font-bold text-xl pb-4 text-pink ">
          Polygon Matic
        </h1>
      </div>
    </div>
  );
};
