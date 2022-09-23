import React, { useEffect, useState} from 'react';


export default function Selectcascade(){

  const departamentos = [
    {id:'1', name:'Amazonas'},
    {id:'2', name:'Ancash'},
    {id:'3', name:'Apurímac'},
    {id:'4', name:'Arequipa'},
    /* {id:'5', name:'Ayacucho'},
    {id:'6', name:'Cajamarca'},
    {id:'7', name:'Callao'},
    {id:'8', name:'Cusco'},
    {id:'9', name:'Huancavelica'},
    {id:'10', name:'Huánuco'},
    {id:'11', name:'Ica'},
    {id:'12', name:'Junín'},
    {id:'13', name:'La Libertad'},
    {id:'14', name:'Lambayeque'},
    {id:'15', name:'Lima'},
    {id:'16', name:'Loreto'},
    {id:'17', name:'Madre de Dios'},
    {id:'18', name:'Moquegua'},
    {id:'19', name:'Pasco'},
    {id:'20', name:'Piura'},
    {id:'21', name:'Puno'},
    {id:'22', name:'San Martín'},
    {id:'23', name:'Tacna'},
    {id:'24', name:'Tumbes'},
    {id:'25', name:'Ucayali'} */
  ];

  const provincias = [
    {id:'1', dptoid:'1', name:'Chachapoyas'},
    {id:'2', dptoid:'1', name:'Bagua'},
    {id:'3', dptoid:'1', name:'Bongará'},
    {id:'4', dptoid:'1', name:'Condorcanqui'},
    {id:'5', dptoid:'1', name:'Luya'},
    {id:'6', dptoid:'1', name:'Rodríguez de Mendoza'},
    {id:'7', dptoid:'1', name:'Utcubamba'},
    {id:'8', dptoid:'1', name:'Utcubamba'},
    {id:'10', dptoid:'2', name:'Aija'},
    {id:'11', dptoid:'2', name:'Antonio Raymondi'},
    {id:'12', dptoid:'2', name:'Asunción'},
    {id:'13', dptoid:'2', name:'Bolognesi'},
    {id:'14', dptoid:'2', name:'Carhuaz'},
    {id:'15', dptoid:'2', name:'Carlos F. Fitzcarrald'},
    {id:'16', dptoid:'2', name:'Casma'},
    {id:'17', dptoid:'2', name:'Corongo'},
    {id:'18', dptoid:'2', name:'Huaraz'},
    {id:'19', dptoid:'2', name:'Huari'},
    {id:'20', dptoid:'2', name:'Huarmey'},
    {id:'21', dptoid:'2', name:'Huaylas'},
    {id:'22', dptoid:'2', name:'Mariscal Luzuriaga'},
    {id:'23', dptoid:'2', name:'Ocros'},
    {id:'24', dptoid:'2', name:'Pallasca'},
    {id:'25', dptoid:'2', name:'Pomabamba'},
    {id:'26', dptoid:'2', name:'Recuay'},
    {id:'27', dptoid:'2', name:'Santa'},
    {id:'28', dptoid:'2', name:'Sihuas'},
    {id:'29', dptoid:'2', name:'Yungay'},
    {id:'30', dptoid:'3', name:'Abancay'},
    {id:'31', dptoid:'3', name:'Antabamba'},
    {id:'32', dptoid:'3', name:'Aymaraes'},
    {id:'33', dptoid:'3', name:'Cotabambas'},
    {id:'34', dptoid:'3', name:'Grau'},
    {id:'35', dptoid:'3', name:'Chincheros'},
    {id:'36', dptoid:'3', name:'Andahuaylas'},
    {id:'37', dptoid:'4', name:'Arequipa'},
    {id:'38', dptoid:'4', name:'Camaná'},
    {id:'39', dptoid:'4', name:'Caravelí'},
    {id:'40', dptoid:'4', name:'Castilla'},
    {id:'41', dptoid:'4', name:'Caylloma'},
    {id:'42', dptoid:'4', name:'Condesuyos'},
    {id:'43', dptoid:'4', name:'Islay'},
    {id:'44', dptoid:'4', name:'La Unión'}
  ]



  const [ departamento, setDepartamento] = useState([]);
  const [ provincia, setProvincia] = useState([]);

  useEffect(()=> {
    setDepartamento(departamentos);
  },[]);

  const handleDpto = (id) => {
    const pv = provincias.filter(x => x.dptoid === id);
    setProvincia(pv);
  }

  return(
    <>
    <div className="col-md-4">
      <label htmlFor="inputState" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Departamento</label>
      <select id='dptos' className='form-control' onChange={(e) => handleDpto(e.target.value)}>
        <option value='0'>Selecciona Departamento ...</option>
        {
          departamento &&
          departamento !== undefined ? 
          departamentos.map((dpto,index)=> {
            return(
              <option key={index} value={dpto.id}>{dpto.name}</option>
            )
          })
          :"No departamento"
        }
      </select>
      </div>
       <div className="col-md-4">
      <label htmlFor="inputState" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Provincia</label>
      <select id='prvs' className='form-control' onChange={(e) => handleDpto(e.target.value)}>
        <option value='0'>Selecciona Provincia ...</option>
        {
          provincia &&
          provincia !== undefined ? 
          provincia.map((prvc,index)=> {
            return(
              <option key={index} value={prvc.id}>{prvc.name}</option>
            )
          })
          :"No departamento"
        }
      </select>
      <br/><br/>
    </div>
    </>
  );
}