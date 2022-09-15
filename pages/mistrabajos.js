import Layout from "../containers/layout";
import styles from "../styles/index.module.css"

export default function Mistrabajos(){

  return (
    <Layout>
        <section className={styles.section}>
        <p className={styles.title}>
          Mis <spam className={styles.colored}>Trabajos</spam>
        </p>
        </section>
    </Layout>
    
  );

}