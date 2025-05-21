import HomeCard from "@/components/HomeCard";
import { Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0A0A23] via-[#12121C] to-[#1A1A2E] px-10 py-7">
      <div className="flex items-center gap-4">
        <Lock size={30} />
        <h1 className="text-4xl">X-IdeaVault</h1>
      </div>
      <div className="flex items-center justify-evenly h-full">
        <div className="w-[40%] flex flex-col items-center gap-8">
          <h2 className="font-medium text-6xl w-[94%] text-center leading-tight">
            Turn X inspiration into action
          </h2>
          <p className="text-[#A1A1AA] text-center text-xl w-[60%] font-normal">
            Got an inspiration? Save it in your idea vault and keep going
          </p>
          <button className="px-7 py-3 rounded-2xl bg-[#1D9BF0] hover:bg-[#1A8CD8] hover:scale-110 cursor-pointer transition-all">
            Get Started
          </button>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <HomeCard />
        </div>
      </div>
    </div>
  );
}
