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
    {id:'8', dptoid:'1', name:'Utcubamba2'},
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

  const ciudades = [
    {id:'1', provid:'1', name:'prov1City1'},
    {id:'2', provid:'1', name:'prov1City2'},
    {id:'3', provid:'1', name:'prov1City3'},
    {id:'4', provid:'1', name:'prov1City4'},
    {id:'5', provid:'1', name:'prov1City5'},
    {id:'6', provid:'2', name:'prov2City1'},
    {id:'7', provid:'2', name:'prov2City2'},
    {id:'8', provid:'2', name:'prov2City3'},
    {id:'9', provid:'2', name:'prov2City4'},
    {id:'10', provid:'2', name:'prov2City5'},
    {id:'11', provid:'3', name:'prov3City1'},
    {id:'12', provid:'3', name:'prov3City2'},
    {id:'13', provid:'3', name:'prov3City3'},
    {id:'14', provid:'3', name:'prov3City4'},
    {id:'15', provid:'3', name:'prov3City5'},
    {id:'16', provid:'4', name:'prov4City1'},
    {id:'17', provid:'4', name:'prov4City2'},
    {id:'18', provid:'4', name:'prov4City3'},
    {id:'19', provid:'4', name:'prov4City4'},
    {id:'20', provid:'4', name:'prov4City5'},
    {id:'21', provid:'5', name:'prov5City1'},
    {id:'22', provid:'5', name:'prov5City2'},
    {id:'23', provid:'5', name:'prov5City3'},
    {id:'24', provid:'5', name:'prov5City4'},
    {id:'25', provid:'5', name:'prov5City5'},
    {id:'26', provid:'6', name:'prov6City1'},
    {id:'27', provid:'6', name:'prov6City2'},
    {id:'28', provid:'6', name:'prov6City3'},
    {id:'29', provid:'6', name:'prov6City4'},
    {id:'30', provid:'6', name:'prov6City5'},
    {id:'31', provid:'7', name:'prov7City1'},
    {id:'32', provid:'7', name:'prov7City2'},
    {id:'33', provid:'7', name:'prov7City3'},
    {id:'34', provid:'7', name:'prov7City4'},
    {id:'35', provid:'7', name:'prov7City5'},
    {id:'36', provid:'8', name:'prov8City1'},
    {id:'37', provid:'8', name:'prov8City2'},
    {id:'38', provid:'8', name:'prov8City3'},
    {id:'39', provid:'8', name:'prov8City4'},
    {id:'40', provid:'8', name:'prov8City5'},
    {id:'41', provid:'9', name:'prov9City1'},
    {id:'42', provid:'9', name:'prov9City2'},
    {id:'43', provid:'9', name:'prov9City3'},
    {id:'44', provid:'9', name:'prov9City4'},
    {id:'45', provid:'9', name:'prov9City5'},
    {id:'46', provid:'10', name:'prov10City1'},
    {id:'47', provid:'10', name:'prov10City2'},
    {id:'48', provid:'10', name:'prov10City3'},
    {id:'49', provid:'10', name:'prov10City4'},
    {id:'50', provid:'10', name:'prov10City5'},
    {id:'51', provid:'11', name:'prov11City1'},
    {id:'52', provid:'11', name:'prov11City2'},
    {id:'53', provid:'11', name:'prov11City3'},
    {id:'54', provid:'11', name:'prov11City4'},
    {id:'55', provid:'11', name:'prov11City5'},
    {id:'56', provid:'12', name:'prov12City1'},
    {id:'57', provid:'12', name:'prov12City2'},
    {id:'58', provid:'12', name:'prov12City3'},
    {id:'59', provid:'12', name:'prov12City4'},
    {id:'60', provid:'12', name:'prov12City5'},
    {id:'61', provid:'13', name:'prov13City1'},
    {id:'62', provid:'13', name:'prov13City2'},
    {id:'63', provid:'13', name:'prov13City3'},
    {id:'64', provid:'13', name:'prov13City4'},
    {id:'65', provid:'13', name:'prov13City5'},
  ]

  const [ departamento, setDepartamento] = useState([]);
  const [ provincia, setProvincia] = useState([]);
  const [ ciudad, setCiudad] = useState([]);
  const [selectedprov, setSelectedprov] = useState(0);

  useEffect(()=> {
    setDepartamento(departamentos);
  },[]);

  useEffect(()=> {
    const aqui = provincia[selectedprov];
    if(aqui!== undefined)
    {
      console.log(aqui.id);
      const ct = ciudades.filter(x => x.provid === aqui.id);
      setCiudad(ct);
    }
    
  },[provincia]);

  const handleDpto = (id) => {
    const pv = provincias.filter(x => x.dptoid === id);
    setProvincia(pv);
  }

  const handleProv = (id) => {
    setSelectedprov(id);
    console.log(id);
    const ct = ciudades.filter(x => x.provid === id);
    setCiudad(ct);
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
          departamento.map((dpto,index)=> {
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
      <select id='prvs' className='form-control' onChange={(e) => handleProv(e.target.value)}>
        <option value='0'>Selecciona Provincia ...</option>
        {
          provincia &&
          provincia !== undefined ? 
          provincia.map((prvc,index)=> {
            return(
              <option key={index} value={prvc.id}>{prvc.name}</option>
            )
          })
          :"No provincia"
        }
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="inputState" className="form-label" style={{color: 'blueviolet', fontSize:'1.5rem', fontWeight:350}}>Ciudad</label>
      <select id='citis' className='form-control' >
        <option value='0'>Selecciona Ciudad ...</option>
        {
          ciudad &&
          ciudad !== undefined ? 
          ciudad.map((city,index)=> {
            return(
              <option key={index} value={city.id}>{city.name}</option>
            )
          })
          :"No ciudad"
        }
      </select>
    </div>
    <br/><br/>
    </>
  );
}