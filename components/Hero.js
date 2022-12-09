import Image from "next/image";
import Card from "../assets/isocard.svg";

export default function Hero() {
  return (
    <section className=" text-4xl my-14 relative font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-5xl ">
      <div className=" text-center md:col-span-1 md:col-start-2 ">
        <p className=" mt-16 bg-gradient-to-r from-[#26Afe6] via-[#Fe3Dce] to-sky bg-clip-text text-transparent"  >Building the Future of Work in Africa</p>
        {/* <p className=" lg:text-6xl mt-4 text-xl " >Complete in A $100k Polaris Testnet Trading Competition.</p> */}
        <div className="mt-16" ><a href="https://discord.gg/7Ah4bSc3jb" className=" text-xl px-6 py-[16px] font-bold mt-7 pt-16 rounded-md bg-white hover:bg-pink transition-all duration-400  transform ease-in-out md:text-2xl md:px-8 md:py-4 text-background ">
          JOIN NOW
        </a></div>
      </div>
      <div className=" mt-[69px] md:absolute md:right-[-7rem]   ">
        <Image priority src={Card} alt="Hero picture" className="" />
      </div>
    </section>
  );
}
