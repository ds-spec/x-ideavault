import { CircleUserRound } from "lucide-react";

export default function HomeCard() {
  const cards = [
    {
      id: 1,
      title: "How to use React.useRef() like a pro",
      author: "@FriedrichC109",
      url: "https://x.com/friedrichC109/status/123456789",
      tags: ["React", "Hooks", "Ref"],
      savedAt: "2025-05-21",
      aiSuggestion: "Try using useRef in a form validation component.",
    },
    {
      id: 2,
      title: "Build your own VS Code extension",
      author: "@Umangag69",
      url: "https://x.com/umangag69/status/123456789",
      tags: ["Tools", "Extension", "Build"],
      savedAt: "2025-05-20",
      aiSuggestion:
        "Explore official VS Code docs and clone their Hello World extension.",
    },
    {
      id: 3,
      title: "Best AI tools for developers in 2025",
      author: "@ryolu_",
      url: "https://x.com/ryolu_/status/123456789",
      tags: ["AI", "Tools", "Inspiration"],
      savedAt: "2025-05-19",
      aiSuggestion:
        "Pick one tool from the list and integrate it in your next mini project.",
    },
  ];

  return (
    <div className="flex flex-col justify-start gap-4 w-3/4 h-[60vh] bg-[#18181B] border-[0.4px] border-[#2D2D36] rounded-xl px-4 py-5">
      <div className="flex justify-between items-center border-[0.4px] border-[#2D2D36] rounded-xl px-3 py-2">
        <p className="text-sm">Filter by tag</p>
        <div className="bg-[#1a1c21] px-8 py-2 rounded-xl text-start">
          <p className="text-sm font-light text-gray-400">Search ideas</p>
        </div>
      </div>
      {cards?.map((card) => (
        <div
          key={card.id}
          className="flex gap-3 items-start bg-[#1A1C21] rounded-md px-3 py-2"
        >
          <CircleUserRound size={45} />
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold">{card.author}</h3>
            <h3>{card.title}</h3>
            <div className="flex items-center gap-2 mb-1">
              {card?.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-[#212327] w-fit px-2 rounded-md mt-2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
