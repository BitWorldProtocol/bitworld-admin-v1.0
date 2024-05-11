import styles from "./index.module.less";

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>Welcome Experience</div>
        <div className={styles.title}>BitWorldProtocol To CyptoWorld</div>
        <div className={styles.desc}>BitWorldProtocol +AI Power To CyptoWorld</div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
}
