import { ArrowRight } from "lucide-react";
import { JSX } from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <button className="group px-8 py-3 rounded-xl bg-[#007AFF] shadow-md shadow-blue-500/40 hover:shadow-xl hover:bg-[#0170EA] hover:scale-105 active:scale-105 active:bg-[#0170EA] focus:shadow-xl focus:bg-[#0170EA] focus:scale-105 cursor-pointer transition-all duration-300">
      <div className="flex items-center gap-2">
        <p className="font-bold text-lg">{text}</p>
        <ArrowRight
          size={18}
          className="group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2 transition-transform duration-300"
        />
      </div>
    </button>
  );
};

export default Button;
