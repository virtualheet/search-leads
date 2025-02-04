import Image from "next/image";
import Main from "@/components/Main";
import Sidebox from "@/components/SideBox";
import SideBoxBottom from "@/components/SideBoxBottom";
export default function Home() {
  return (
    <div className="w-full flex scrollbar-none justify-between h-full items-center"
      style={{
        padding: '0 clamp(0.5rem, 0.5vw, 20rem) clamp(0.5rem, 0.5vw, 20rem)',
        gap: 'clamp(0.5rem, 0.5vw, 20rem)'
      }}
    >

      <div className="w-[20%] flex flex-col justify-start h-[100vh]"
        style={{
          gap: 'clamp(0.5rem, 0.5vw, 20rem)'
        }}>
        <Sidebox />
        <SideBoxBottom />

      </div>

      <div className="w-[80%]">
        <Main />
      </div>



    </div>
  );
}
