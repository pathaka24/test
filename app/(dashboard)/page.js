import Test from "@/components/Test";
import Image from "next/image";
import HomeBanner from "./_components/HomeBanner";
import MainCanvas from "@/components/models/MainCanvas";
import VideoPlayere from "./_components/VideoPlayer";
import { GlobeDemo } from "@/components/GlobeDemo";
import Over from "./_components/Over";
 

export default function Home() {
  return (
    <main >
        <HomeBanner />
         <MainCanvas />
         <VideoPlayere />
         <Over />
    </main>
  );
}
