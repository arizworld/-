import React ,{useState} from 'react'

export default function TextArea(props) {
    const [text,setText] = useState('');
    const uppercase = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
        if(!isEmpty()){
        props.showAlert("Text has been Uppercased","success");
        }else{
        props.showAlert("Please Enter Some Text","warning");
        }
    }
    const lowercase = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
        if(!isEmpty()){
        props.showAlert("Text has been Lowercased","success");
        }else{
            props.showAlert("Please Enter Some Text","warning");
        }
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        if(!isEmpty()){
        props.showAlert("Text has been Spoken","success");
        }else{
            props.showAlert("Please Enter Some Text","warning");
        }
      }
    const capitalFirstLetter = ()=>{
        let words = text.toLowerCase().split(" ");
       let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword);
        if(!isEmpty()){
        props.showAlert("Each word has been Capitalized","success");
        }else{
            props.showAlert("Please Enter Some Text","warning");
        }
    }
    const CopyText = ()=>{
        let textToCopy = document.getElementById('textArea');
        textToCopy.select();
        navigator.clipboard.writeText(textToCopy.value);
        if(!isEmpty()){
        props.showAlert("Text has been Copied to Clipboard","success");
        }else{
            props.showAlert("Please Enter Some Text","warning");
        }
    }
    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(!isEmpty()){
        props.showAlert("Extra Spaces has been Removed","success");
        }else{
            props.showAlert("Please Enter Some Text","warning");
        }
    }
    const changeText = (e)=>{
        setText(e.target.value);
    }
    const isEmpty = ()=>{
        let testText = text.split(/[ ]+/);
        let ftText = testText.join("");
        return ftText===''? true : false;
    }
  return (
    <>
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
        <h1>Enter Your Text Here</h1>
        <form style={{width: "max(300px,80%)"}}>
            <div className="form-group">
                {/* <label htmlFor="exampleTextarea" className="form-label mt-4">Example textarea</label> */}
                <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} value = {text} onChange = {changeText} id="textArea" rows="7" ></textarea>       
            </div>
            <div className="buttonContainer">
                <button type="button" onClick = {uppercase} className="btn create ">Uppercase</button>
                <button type="button" onClick = {lowercase} className="btn create ">Lowercase</button>
                <button type="button" onClick={speak} className="btn create ">Speak</button>
                <button type="button" onClick={capitalFirstLetter} className="btn create ">Sentance</button>
                <button type="button" onClick={CopyText} className="btn create ">Copy Text</button>
                <button type="button" onClick={removeSpace} className="btn create ">One Space</button>
            </div>
        </form> 
    </div>
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
        <h3>Your Text Summary</h3>
        <p>{text?text.split(' ').filter(function(t) {return t!== ''}).length:0} words and {text.replace(/ /g ,"").length} characters</p>
    </div>
    </>  
  )
}
