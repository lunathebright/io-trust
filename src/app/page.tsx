import Banner from "@/component/banner";
import Favorite from "@/component/favorite";
import Service from "@/component/service";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <main className="border w-[360px] h-[740px] rounded-3xl">
        <Banner />
        <Favorite />
        <Service />
      </main>
    </div>
  );
}
