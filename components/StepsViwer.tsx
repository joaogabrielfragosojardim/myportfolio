import Image from "next/image";
import styles from "../styles/StepsViewer.module.css";

interface IProps {
  jobTitle: string;
  date: string;
  imgPath: string;
  company: string;
  text: string;
}

export const StepsViewer = ({
  jobTitle,
  date,
  imgPath,
  company,
  text,
}: IProps) => {
  return (
    <div className={styles.containerSteps}>
      <div>
        <div className={styles.jobTitles}>
          <h3>{jobTitle}</h3>
          <span>{date}</span>
        </div>
        <div className={styles.containerImg}>
          <Image
            src={imgPath}
            width="100%"
            height="100%"
            alt={jobTitle}
          ></Image>
        </div>
        <div className={styles.jobInfos}>
          <h4>{company}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
