import Selectcascade from "../components/selectcascade";
import Layout from "../containers/layout";
import styles from "../styles/index.module.css"

export default function Contacto(){

  return (
    <Layout>
        <section>
          <br/>
          <div className="container">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Nombres</label>
              <input type="text" className="form-control" id="inputnombre"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Apellidos</label>
              <input type="text" className="form-control" id="inputapellido"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Correo</label>
              <input type="email" className="form-control" id="inputemail" placeholder="email@email.com"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Consulta</label>
              <textarea className="form-control" aria-label="With textarea" id="inputconsulta"></textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Ciudad</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>State</label>
              <select id="inputState" className="form-select">
                <option value='choose'>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Zip</label>
              <input type="text" className="form-control" id="inputZip"/>
            </div>
          
            <Selectcascade/>
          
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
          </form>
          </div>
        </section>
  
    </Layout>
    
  );

}