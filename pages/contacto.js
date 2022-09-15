import Layout from "../containers/layout";
import styles from "../styles/index.module.css"

export default function Contacto(){

  return (
    <Layout>
        <section className={styles.section}>
        <p className={styles.title}>
          Contacto <spam className={styles.colored}>Cesar</spam>
        </p>
        </section>
    </Layout>
    
  );

}