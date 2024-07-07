import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Project from "./_components/Project";


export default function Home() {
  return (
    <div>

    <Hero />
    <Skills />
    <Project />
    </div>
  );
}
