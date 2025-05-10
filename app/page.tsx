import Apps from "@/components/Apps";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import Blogs from "./blogs/page";

export default function Home() {
  return (
    <main>
      <Hero title="Hi," subtitle1="Welcome to FinsEdSoft!" subtitle2="Here we create content && software for " />
      <Apps />
      <Videos />
      <section className="my-10">
          <h2 className="text-3xl font-bold text-center ">Latest Articles</h2>
          <Blogs showBackButton="false" />
        </section>
    </main>
  );
}
