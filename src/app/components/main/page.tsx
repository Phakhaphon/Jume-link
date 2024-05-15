import Image from "next/image";
import Logo from "../../../../public/profile.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="mt-24">
            <Image className=" rounded-full border-pink-400 border-2 shadow-xl ease-out duration-300 hover:scale-110" src={Logo} alt="my profile" width={120} height={120}/>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl font-bold mt-6">@YelloweJume</p>
      </div>
      <Link href="https://www.instagram.com/yellow.jume">
      <div className="flex justify-center">
        <div>
          <div className="mt-6 flex justify-center bg-white rounded-full ease-out duration-300 border-pink-400 border-2 w-[20rem] hover:scale-110 hover:shadow-lg hover:backdrop-blur-sm hover:bg-white/30">
            <div className="px-12 py-3">
              <p>Instagram : @yellow.jume</p>
            </div>
          </div>
        </div>
        </div>
        </Link>
        <Link href="https://lin.ee/I00yUut">
        <div className="flex justify-center">
        <div>
          <div className="mt-4 flex justify-center bg-white rounded-full ease-out duration-300 border-pink-400 border-2 w-[20rem] hover:scale-110 hover:shadow-lg hover:backdrop-blur-sm hover:bg-white/30">
            <div className="px-12 py-3">
              <p>Line : Add Friends</p>
            </div>
          </div>
        </div>
        </div>
        </Link>
        <Link href="https://www.tiktok.com/@yellow.jume">
        <div className="flex justify-center">
        <div>
          <div className="mt-4 flex justify-center bg-white rounded-full ease-out duration-300 border-pink-400 border-2 w-[20rem] hover:scale-110 hover:shadow-lg hover:backdrop-blur-sm hover:bg-white/30">
            <div className="px-12 py-3">
              <p>Tiktok : @yellow.jume</p>
            </div>
          </div>
        </div>
        </div>
        </Link>
        <Link href="https://s.lemon8-app.com/s/RsjbZjxrQR">
        <div className="flex justify-center">
        <div>
          <div className="mt-4 flex justify-center bg-white rounded-full ease-out duration-300 border-pink-400 border-2 w-[20rem] hover:scale-110 hover:shadow-lg hover:backdrop-blur-sm hover:bg-white/30">
            <div className="px-12 py-3">
              <p>Lemon8 : @yellow.jume</p>
            </div>
          </div>
        </div>
        </div>
        </Link>
    </main>
  );
}
