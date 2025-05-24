import { ChevronRight, CirclePlus, Eye, Sparkles } from "lucide-react";
import { JSX, ReactElement } from "react";

interface Steps {
  id: number;
  title: string;
  icon: ReactElement;
  description: string;
}

const IdeaFlow = (): JSX.Element => {
  const steps: Steps[] = [
    {
      id: 1,
      title: "Spot an Idea",
      icon: <Eye color="#007AFF" />, // Replace with your icon component mapping
      description:
        "Browse Twitter/X and find a tweet that sparks inspiration or a new project idea.",
    },
    {
      id: 2,
      title: "Save to Vault",
      icon: <CirclePlus color="#007AFF" />, // Replace with your icon component mapping
      description:
        "Quickly save the tweet to your private X-IdeaVault with relevant tags and notes.",
    },
    {
      id: 3,
      title: "Revisit & Build",
      icon: <Sparkles color="#007AFF" />, // Replace with your icon component mapping
      description:
        "Access your organized ideas anytime, develop them further, and turn inspiration into reality.",
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 w-full min-h-screen px-5 gap-4">
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center  text-white">
        <div className="flex items-center justify-center bg-[#0A1B3A] rounded-full p-4">
          <Eye color="#007AFF" size={35} />
        </div>
        <h1 className="font-bold text-2xl">1. Spot an Idea</h1>
        <p className="text-sm text-center max-w-sm text-[#94A3B8]">
          Browse Twitter/X and find a tweet that sparks inspiration or a new
          project idea.
        </p>
      </div>
      <div className="rounded-xl flex items-center justify-center text-white">
        <ChevronRight size={35} color="#007AFF" />
      </div>
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center  text-white">
        <div className="flex items-center justify-center bg-[#0A1B3A] rounded-full p-4">
          <Eye color="#007AFF" size={35} />
        </div>
        <h1 className="font-bold text-2xl">2. Save to Vault</h1>
        <p className="text-sm text-center max-w-sm text-[#94A3B8] ">
          Quickly save the tweet to your private X-IdeaVault with relevant tags
          and notes.
        </p>
      </div>
      <div className="flex items-center justify-center text-white">
        <ChevronRight size={35} color="#007AFF" />
      </div>
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center  text-white">
        <div className="flex items-center justify-center bg-[#0A1B3A] rounded-full p-4">
          <Eye color="#007AFF" size={35} />
        </div>
        <h1 className="font-bold text-2xl">3. Revisit & Build</h1>
        <p className="text-sm text-center max-w-sm text-[#94A3B8]">
          Access your organized ideas anytime, develop them further, and turn
          inspiration into reality.
        </p>
      </div>
    </div>
  );
};
export default IdeaFlow;
