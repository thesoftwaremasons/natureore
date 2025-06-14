import About from "./components/About";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./products/page";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
    </>
  )
}

