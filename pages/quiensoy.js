import Layout from "../containers/layout";
import styles from "../styles/index.module.css"

export default function Quiensoy(){

  return (
    <Layout>
        <section className={styles.section}>
        <p className={styles.title}>
          Quien <spam className={styles.colored}>Soy</spam>
        </p>
        </section>
    </Layout>
    
  );

}