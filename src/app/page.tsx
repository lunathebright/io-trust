import Banner from "@/component/banner";
import Favorite from "@/component/favorite";
import Service from "@/component/service";
import Nav from "@/component/temp/nav";
import Search from "@/component/temp/search";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <main className="relative border w-[360px] h-[740px] overflow-hidden rounded-3xl">
        <Search />
        <Nav />
        <div className="h-[calc(100%-140px)] overflow-y-scroll">
          <Banner />
          <Favorite />
          <Service />
        </div>
      </main>
    </div>
  );
}
