import React ,{useState}from 'react'



export default function TextForm(props) {

  const [text, setText] = useState('');
  
  const lowCase=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case","success");
  }


const handleUpClick=()=>{
  //console.log('Uppercase was clicked');
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase","success");
  
}

const handleOnChange=(event)=>{
  //console.log('Onchange');
 setText(event.target.value);
}

const clearText=()=>{
let cleartext='';
setText(cleartext)
setEmail(cleartext)
}

const emailExtract=()=>{

  let enteredEmail=text.includes(".com");
  if (enteredEmail) {
    //console.log(email);
   setEmail(text);
  }

else{
  setEmail('Email is not correct')
}

} 

const handleCopy=()=>{
let text=document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
}


const addSingleQuote=()=>{
  setText("'"+text+"'")
}

const addDoubleQuote = () => {
  const newString = `"${text}"`;
  setText(newString);
}

const[email,setEmail]=useState('');

  return (
<>
<div style={{color:props.mode==='dark'?'white':'black'}}>
<div className="container"  >
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}
  style={{backgroundColor:props.mode==='dark'?'grey':'white'}} 
  onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={lowCase}> Convert to lower case  </button>
  <button className="btn btn-primary my-3 mx-1" onClick={emailExtract}>Email Extract</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary my-3 mx-1" onClick={addSingleQuote}>add single quote </button>
  <button className="btn btn-primary my-3 mx-1" onClick={addDoubleQuote}>add double quote </button>
  <button className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear Text</button>
  
</div>
</div>

<div className="container my-2">
<h2>Text Summary</h2>
{text !== "" &&  <p>  {text.trim().split(" ").length} words and {text.length} characters </p>}
 <p>{0.08 * text.split(" ").length} to read</p> 
{/*method to count the time to read the words written in the textarea*/}
 <h2>Perview</h2>
 <p>{text}</p> 

</div>

<div className="container my-2">
<h2>Email Address is</h2>
<p>your email is :{email}</p>
</div>

</div>
</>
  )
}

