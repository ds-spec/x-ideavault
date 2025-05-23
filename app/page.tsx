import FeatureCard from "@/components/FeatureCard";
import IdeaFlow from "@/components/IdeaFlow";
import UserCard from "@/components/UserCard";
import { ArrowRight, Lightbulb, Sparkles } from "lucide-react";
import { JSX } from "react";

const Home = (): JSX.Element => {
  const Heading = (): JSX.Element => {
    return (
      <section className="flex items-center gap-2">
        <Lightbulb size={25} color="#0265D3" />
        <h1 className="text-xl font-bold">X-IdeaVault</h1>
      </section>
    );
  };

  const UserSection = (): JSX.Element => {
    return (
      <section className="flex items-center justify-evenly h-full mt-24">
        <article className="flex flex-1 max-w-xl flex-col items-start gap-8">
          <h2 className="font-bold text-6xl max-w-xl leading-tight">
            Turn <span className="text-[#23A4FA]">X</span> inspiration into
            action
          </h2>
          <p className=" text-xl max-w-md text-gray-300 font-normal">
            Got an idea sparked by a tweet? Save it in your private X-IdeaVault
            and never let brilliance slip away.
          </p>
          <button className="group px-8 py-3 rounded-xl bg-[#007AFF] shadow-md shadow-blue-500/30 hover:shadow-lg hover:bg-[#0170EA] hover:scale-105 cursor-pointer transition-all duration-300">
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">
                Get Started - Save your first idea
              </p>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </div>
          </button>
          <div className="flex items-center gap-2">
            <Sparkles size={18} color="#B5E3F5" />
            <p className="text-[#8D9CB1] text-sm">
              Simple, private, and powerful.
            </p>
          </div>
        </article>
        <aside className="max-w-2xl flex items-center justify-center">
          <UserCard />
        </aside>
      </section>
    );
  };

  const FeaturesSection = (): JSX.Element => {
    return (
      <section className="flex flex-col mt-40 gap-2 items-center mb-20">
        <h1 className="text-[2.5vw] font-bold">
          Everything You Need to Curate Brilliance
        </h1>
        <h3 className="text-lg text-[#94A3B8] max-w-2xl text-center">
          X-IdeaVault is designed to be simple, powerful, and your private
          sanctuary for inspiration.
        </h3>
        <FeatureCard />
      </section>
    );
  };

  const IdeaSection = (): JSX.Element => {
    return (
      <section className="w-full h-[80vh] flex flex-col gap-2 px-10 py-20 items-center bg-[#0B1224]">
        <h1 className="text-[2.5vw] font-bold">
          Simple Steps to Your Idea Sanctuary
        </h1>
        <h3 className="text-lg text-[#94A3B8] max-w-xl text-center">
          Start capturing and cultivating your best ideas in just a few moments.
        </h3>
        <IdeaFlow />
      </section>
    );
  };

  return (
    <main>
      <div className="w-full min-h-screen bg-[#090E21] px-10 py-7">
        <Heading />
        <UserSection />
        <FeaturesSection />
      </div>
      <IdeaSection />
    </main>
  );
};
export default Home;
