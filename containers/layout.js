import React from 'react'
import Head from 'next/head'
/* import NavbarLucho from '../components/navbarlucho' */
import styles from '../styles/layout.module.css'
import Navbar from '../components/navbar1';
import Navbar1 from '../components/navbar1';

export default function Layout(props){
  return(
    <React.Fragment>
      {/*  Header Files*/}
      <Head>
        <meta charSet='UTF-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <meta httpewuiv='X-UA-Compatible' content='ie=edge'/>
        <title>Next Revolution</title>
      </Head>
      {/* <NavbarLucho/> */}
      <Navbar1/>
      {/* Pages // MAIN CONTENT*/}
      <main className={styles.container}>{props.children}</main>
    </React.Fragment>
  );
}