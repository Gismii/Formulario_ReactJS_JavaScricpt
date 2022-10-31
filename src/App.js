
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useEffect } from 'react';
import './App.css';


  
function App() {

  const [country, setCoutry] = useState([]);
    
    useEffect(() => {
      axios
      
      .get("https://amazon-api.sellead.com/country/")
      .then(response =>{
        setCoutry(response.data);
      });

    }, []);


    const [city, setCity] = useState([]);
    
    useEffect(() => {
      axios
      
      .get("https://amazon-api.sellead.com/city/")
      .then(response =>{
        setCoutry(response.data);
      });

    }, []);


    const [name , setNome] = useState('');
    const [idade , setIdade] = useState('');
    const [telefone , setTelefone] = useState('');
    const [email , setEmail] = useState('');
    const [confEmail , setConfEmail] = useState('');
    const [cpf , setCpf] = useState('');
    //const [pais = axios.get] = useState('');
    const [cidade , setCidade] = useState('');
  
    
    const handleChange =(e)=>{
      setNome(e.target.value);
    }
    
    const handleIdadeChange =(e)=>{
      setIdade(e.target.value);
    }
    
    const handleTelefoneChange =(e)=>{
      setTelefone(e.target.value);
    }

    const handleCpfChange =(e)=>{
      setCpf(e.target.value);
    }
     
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      
    const handleConfEmailChange =(e)=>{
      setConfEmail(e.target.value);
    }

    const handlePaisChange =(e)=>{
     
    }

    const handleCidadeChange =(e)=>{
      setCidade(e.target.value);
    }


    const handleSubmit=(e)=>{
      if(email!=confEmail)
      {
        
        alert("Email não confere");
      }

      if( cpf.length <11 || cpf.length > 11 ){

        alert("Cpf invalido");

      }
      else{
        
        alert('O Formulario sera enviado com os seguintes dados : ' + name +
        ' , Idade : '+ idade +' Telefone: ' + telefone + ',  E-mail: ' + email + ',  Cpf: ' + cpf);
      }
      e.preventDefault();
  
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
   
    <h2> Faça sua Inscrição </h2>

    <p> Dados Pessoais</p>
    
        <label >
          Nome:
        </label><br/>
        <input type="text" value={name} required onChange={function (e) { handleChange(e); }} /><br/>

        <label >
          Cpf:
        </label><br/>
        <input type="bigInt" value={cpf} required onChange={function (e) { handleCpfChange(e); }} /><br/>
         
        <label >
          Idade:
        </label><br/>
        <input type="text" value={idade} required onChange={function (e) { handleIdadeChange(e); }} /><br/>
            
        <label>
          Telefone:
        </label><br/>
        <input type="telefone" value={telefone} required onChange={function (e) { handleTelefoneChange(e); }} /><br/>
        
        <label>
          E-mail:
        </label><br/>
        <input type="Email" value={email} required onChange={function (e) { handleEmailChange(e); }} /><br/>
             
        <label>
          Confirm Email:
        </label><br/>
        <input type="Email" value={confEmail} required onChange={function (e) { handleConfEmailChange(e); }} /><br/>
       <div className="topic">
       <p>Destinos de Interesse</p>
       </div>

       
        <select name="Pais" id="Pais">
          <option value="0">Selecione o Pais</option>
          {country.map((country) => (
            <option key={country.id} value={country.sigla}> {country.nome}</option>

          ))}

        </select><br/>

       
        <select name="city" id="city">
          <option value="0">Selecione a cidade</option>
          {country.map((country) => (
            <option key={city.id} value={city.sigla}> {cidade.nome}</option>

          ))}

          </select><br/>

        
               
        <input type="submit" value="Enviar"/>
      </form>
    </header>
    </div>
  );
}
  
export default App;