import styles from "../styles/StacksViewer.module.css";

interface IProps {
  name: string;
  percentage: string;
}

export const StacksViewer = ({ name, percentage }: IProps) => {
  return (
    <div>
      <span className={styles.names}>{name}</span>
      <div className={styles.firtsStep}>
        <div className={styles.containerTooltip} style={{ width: percentage }}>
          <span className={styles.tooltip}>{percentage}</span>
        </div>
      </div>
    </div>
  );
};
