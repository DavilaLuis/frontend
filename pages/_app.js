import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/global.css';
import { useEffect } from 'react';
/* import SSRProvider from 'react-bootstrap/SSRProvider'; */

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <Component {...pageProps} />
 /*  ( 
     <SSRProvider> 
      <Component {...pageProps} /> 
     </SSRProvider> 
   )  */
}