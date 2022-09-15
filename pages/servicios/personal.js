import Layout from "../../containers/layout";
import styles from "../../styles/index.module.css"

export default function Empresarial(){

  return (
    <Layout>
        <section className={styles.section}>
        <p className={styles.title}>
          Servicios <spam className={styles.colored}>Personales</spam>
        </p>
        </section>
    </Layout>
  );

}