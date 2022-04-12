import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";

import stacks from "../infos/stacks.json";
import jobs from "../infos/jobs.json";

import { StacksViewer } from "../components/StacksViewer";
import { StepsViewer } from "../components/StepsViwer";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JGFJ Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.apresentationContainer}>
        <div>
          <h5>HELLO, WORLD.</h5>
          <h1>João Gabriel Fragoso Jardim.</h1>
          <span>JR FRONT END DEVELOPER</span>
        </div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/joão-gabriel-731948196"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/joaogabrielfragosojardim"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5547999615822"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.aboutContainer}>
        <div>
          <h5>SOBRE</h5>
          <h1>Gostaria de falar um pouco sobre mim.</h1>
        </div>
        <div className={styles.aboutDivisor}>
          <div>
            <div>
              <p>
                <strong>Vamos Lá:</strong>
                <br /> Sou João, desenvolvedor front-end focado no mundo
                React.js || React Native e suas tecnologias, tais como Redux,
                Styled Components, MUI, Chakra UI e outras bibliotecas que se
                completam e auxiliam no tempo de desenvolvimento... porém sempre
                disposto a aprender novas tecnologias ao redor
              </p>
            </div>
            <div>
              <ul>
                {stacks.map((stack) => (
                  <li key={stack.stackName}>
                    <StacksViewer
                      name={stack.stackName}
                      percentage={stack.level}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.carrerContainer}>
        <div>
          <h5>CARREIRA</h5>
          <h1>Um pouco das minhas conquistas.</h1>
        </div>
        <div>
          <h3>MEUS PEQUENOS GRANDES PASSOS</h3>
          {jobs.map((stack) => (
            <div key={stack.company}>
              <StepsViewer
                jobTitle={stack.title}
                date={stack.dateStart}
                imgPath={stack.pathImage}
                company={stack.company}
                text={stack.paragraph}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
