import { Tag } from "lucide-react";

interface User {
  id: number;
  title: string;
  author: string;
  url: string;
  tags: string[];
  savedAt: string;
  aiSuggestion: string;
  handle: string;
}

const UserCard: React.FC = () => {
  const cards: User[] = [
    {
      id: 1,
      title:
        "Just discovered a mind-blowing CSS trick that simplifies responsive layouts! No more complex media queries. #CSS #WebDev",
      author: "DevGuru",
      url: "https://x.com/friedrichC109/status/123456789",
      tags: ["React", "Hooks", "Ref"],
      savedAt: "2025-05-21",
      aiSuggestion: "Try using useRef in a form validation component.",
      handle: "@devguru.io",
    },
    {
      id: 2,
      title: "Build your own VS Code extension",
      author: "Umangag69",
      url: "https://x.com/umangag69/status/123456789",
      tags: ["Tools", "Extension", "Build"],
      savedAt: "2025-05-20",
      aiSuggestion:
        "Explore official VS Code docs and clone their Hello World extension.",
      handle: "@umang.io",
    },
    {
      id: 3,
      title: "Best AI tools for developers in 2025",
      author: "Ryoulu_",
      url: "https://x.com/ryolu_/status/123456789",
      tags: ["AI", "Tools", "Inspiration"],
      savedAt: "2025-05-19",
      aiSuggestion:
        "Pick one tool from the list and integrate it in your next mini project.",
      handle: "@ryolu.io",
    },
  ];

  const getRandomColor = (): string => {
    const r1 = Math.floor(Math.random() * 255);
    const g1 = Math.floor(Math.random() * 255);
    const b1 = Math.floor(Math.random() * 255);

    const r2 = Math.floor(Math.random() * 255);
    const g2 = Math.floor(Math.random() * 255);
    const b2 = Math.floor(Math.random() * 255);

    const r3 = Math.floor(Math.random() * 255);
    const g3 = Math.floor(Math.random() * 255);
    const b3 = Math.floor(Math.random() * 255);

    return `linear-gradient(135deg, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}),rgb(${r3},${g3},${b3}))`;
  };

  return (
    <div className="flex flex-col justify-start gap-4 w-full rounded-xl">
      {cards?.map((card, index) => {
        const isLastTwo = index >= cards.length - 2;
        return (
          <div
            key={card.id}
            className={`flex flex-col gap-3 items-start rounded-2xl bg-[#0E1627] border-[0.5px] border-[#2D2D36] px-4 py-5 min-h-36  ${
              isLastTwo
                ? "blur-sm"
                : "hover:border-[#064793] hover:shadow-xl hover:shadow-blue-500/20 transition-all"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                style={{ background: getRandomColor() }}
                className="w-9 h-9 rounded-full border-[0.5px] border-[#064793]"
              ></div>
              <div className="flex flex-col">
                <h3 className="font-medium">{card.author}</h3>
                <h3 className="font-light text-[0.8vw] text-gray-400">
                  {card.handle}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-md text-gray-200 mb-2">{card.title}</h3>
              <div className="flex items-center gap-2">
                <Tag className="mt-3" size={15} color="#94A3B8" />
                {card?.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#212327] w-fit px-3 py-1 rounded-full mt-2"
                  >
                    <p className="text-sm">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
