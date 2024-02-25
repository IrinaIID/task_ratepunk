import { Caveat_Brush } from "next/font/google";
import Footer from "./components/footer/footer";
import Header from './components/header/heder';
import styles from "./page.module.scss";
import Form from "./components/form/form";
import Steps from "./components/steps-block/steps";
import PreFooter from "./components/pre-footer/pre-footer";

const caveat = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400']
});


export default function Home() {
  return (
    <div className={styles.allHome}>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.cardEmailBlock}>
          <h1 className={`${caveat.className} ${styles.cardName}`}>REFER FRIENDS AND GET REWARDS</h1>
          <p className={styles.descriptionCardEmail}>{`Refer your friends to us and earn hotel booking voucers. We'll give you 1 coin for  each friend that install our extension. Minimum cash-out 20 coins.`}</p>
          <div>
            <Form />
          </div>
          <p className={styles.infoCardEmail}>{`Limits on max rewards apply.`}</p>
        </div>
        <Steps />
      </main>
      <PreFooter />
      <Footer />
    </div>

  );
}

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <Header />
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
