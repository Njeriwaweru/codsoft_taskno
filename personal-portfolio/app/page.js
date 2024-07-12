import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Project from "./_components/Project";
import Footer from "./_components/footer";
import Link from "next/link";


export default function Home() {

//   const scrollIcon = document.getElementById('scrollIcon');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//         scrollIcon.style.display = 'inline-flex';
//     } else {
//         scrollIcon.style.display = 'none'
//     }
// })

// document.addEventListener('DOMContentLoaded', function () {
//     const scrollIcon = document.getElementById('scrollIcon');
//     const content = document.getElementById('content');

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 0) {
//             scrollIcon.style.opacity = '1';
//             scrollIcon.style.bottom = '20px';
//         } else {
//             scrollIcon.style.opacity = '0';
//             scrollIcon.style.bottom = '-50px';
//         }
//     });
// });

  return (
    <div>

    <Hero />
    <Skills />
    <Project />
    <Footer />

    {/* <Link href={'#'} id="scrollIcon" className={styles.scroll}>
      <span class="material-icons">
        keyboard_arrow_up
      </span>
    </Link> */}
    </div>
  );
}
