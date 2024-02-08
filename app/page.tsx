import Apps from "@/components/Apps";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero title="Hello Visitor," subtitle1="Welcome to FinEdSoft!" subtitle2="Here we create content && software for " />
      <Apps />
      <Videos />
      {/*<Blogs /> */}
      <Footer />
    </main>
  );
}
