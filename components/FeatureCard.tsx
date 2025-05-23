import { Bookmark, ShieldCheck, Tags, Zap } from "lucide-react";
import React, { JSX, ReactElement } from "react";

interface Feature {
  id: number;
  title: string;
  icon: ReactElement;
  description: string;
  comingSoon?: boolean;
}

const FeatureCard = (): JSX.Element => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Save Instantly",
      icon: <Bookmark color="#007AFF" />, // You can map this to an icon component
      description:
        "Capture inspiring tweets with a single click or by pasting a URL. Never lose a great idea again.",
    },
    {
      id: 2,
      title: "Organize with Tags",
      icon: <Tags color="#007AFF" />,
      description:
        "Add custom tags to categorize your saved ideas, making them easy to find and revisit later.",
    },
    {
      id: 3,
      title: "Completely Private",
      icon: <ShieldCheck color="#007AFF" />,
      description:
        "Your X-IdeaVault is your personal, secure space. All your saved ideas are private by default.",
    },
    {
      id: 4,
      title: "AI-Powered Insights (Soon)",
      icon: <Zap color="#007AFF" />,
      description:
        "Unlock suggestions, auto-tagging, and turn ideas into actionable plans with upcoming AI features.",
      comingSoon: true, // Optional: helpful for showing disabled or blurred
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between w-full mt-12">
        {features?.map((feature) => (
          <div
            key={feature.id}
            className="flex w-80 border-[0.5px] border-[#2D2D36] shadow-xl drop-shadow-black rounded-xl px-5 py-7 bg-[#0F1628] hover:border-[#064793] transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-[#0D203D] rounded-md p-3 w-fit">
                {feature.icon}
              </div>
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="text-sm text-[#94A3B8]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeatureCard;
