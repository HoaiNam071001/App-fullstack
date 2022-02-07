import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import './style.css';

function Tool() {
  const [name,setname] = useState("");
  const [pass,setpass] = useState("");
  const submitID = async ()=>{
    await axios({
      method: 'POST',
      url: '/register',
      data: {
        username: name,
        password: pass
      }
    }).then(res=>{
      console.log(res.data);
      if(res.data)
      document.getElementById('result-register').innerHTML = "Successful";
    });
  }
  const clearRegister = ()=>{
    const username = document.getElementById('your-name');
    username.value = "";
    document.getElementById('pass-word').value = "";
    username.focus();
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-3"></div>
      <div className="col-sm-12 col-xl-6 random-execute">
        <h1 className="random-sys">Đăng nhập</h1>
        <div>
          <input type="text" onChange={e=>setname(e.target.value)} id="your-name" className="input-random" placeholder="Name"/><br/>
          <input type="text" onChange={e=>setpass(e.target.value)} id="pass-word" className="input-random" placeholder="Pass"/>
        </div>
        <button onClick={submitID} type="button" id="btn-random-submit" className="btn btn-primary">GO</button>
        <button onClick={clearRegister} className="btn btn-dark btn-clear-random-now">Clear</button>
        <h2 id="result-register">result</h2>
      </div>
    </div>
    </div>
    
  );
}
export default Tool;
