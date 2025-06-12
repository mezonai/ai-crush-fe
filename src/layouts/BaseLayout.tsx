import type {ReactNode} from "react";
import baseBg from '../assets/backgounds/base_bg.jpg';

export default function BaseLayout({children}: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center font-sans bg-cover bg-center justify-between h-full"
         style={{backgroundImage: `url(${baseBg})`}}>
      <div className="w-[90%]">
        {children}
      </div>
    </div>
  );
}
