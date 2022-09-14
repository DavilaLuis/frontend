import React, { useEffect } from "react";
/* import React from 'react' */
import styles from "../styles/index.module.css"
import Layout from '../containers/layout'

export default function Index(){
    // See https://en.reactjs.org/docs/hooks-effect.html
    useEffect(() => {

      // Run code on client-side only : ensure document is here
      if (typeof document !== undefined) {

        // load JS bootstrap dependency
        require('bootstrap/dist/js/bootstrap.bundle.js')   

      }
  // Run useEffect only once
  // Read https://css-tricks.com/run-useeffect-only-once/
  }, [])
  return(
    <Layout>
      <section className={styles.section}>
        <p className={styles.title}>
          Next.<spam className={styles.colored}>js</spam>
        </p>
      </section>
    </Layout>


  );
}