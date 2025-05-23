import { CirclePlus, Eye, Sparkles } from "lucide-react";
import { ReactElement } from "react";

interface Steps {
  id: number;
  title: string;
  icon: ReactElement;
  description: string;
}

const IdeaFlow: React.FC = () => {
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
    <div className="bg-red-300 w-full h-full">
      <div className="w-full  flex flex-col gap-3 justify-center items-center">
        <div className="">
          <Eye color="#007AFF" />
        </div>
      </div>
    </div>
  );
};
export default IdeaFlow;
