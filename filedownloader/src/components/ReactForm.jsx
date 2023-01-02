import React from 'react'
import { useState } from 'react'
function ReactForm() {
  const [urlProvided, setUrlProvided] = useState(false)
  const [btnText , setBtnTxt] = useState("Download File")
  const fileInput = document.querySelector("input");
  const button = document.querySelector("button");
  const [inputValue , setInputValue] = useState("")
  
 const handleChange = ()=>{
setUrlProvided((prevUrlState)=>{
  return true
  ;
})
 }

const handleSubmit =(event)=>{
  if(inputValue == ''){
    alert('No Url Provided')
}else{
  
        event.preventDefault();
    fetchFile(inputValue);
handleFileDownload()

}

}
const handleFileDownload = ()=>{
setBtnTxt("Downloading...")

}


const handleOnChange = (event)=>{
setInputValue(event.target.value)
}
const fetchFile = (url)=>{
  //fetching file and returning response as blob
  fetch(url).then(res=>res.blob()).then(file=>{
      //Creating a temporary URL from the passed in file 

      const tempURL =  URL.createObjectURL(file);        
      const aTag = document.createElement("a");
      //Passing temp URL as the href attribute of element <a>
      aTag.href=tempURL;
      aTag.download = url.replace(/^.*[\\\/]/,'');
      console.log(aTag)
      document.body.appendChild(aTag);
      
      aTag.click();
      aTag.remove();// Remove a Tag after file download
      URL.revokeObjectURL(tempURL)//Removing temp URL after file download

      setTimeout(()=>{
        setBtnTxt("Download File")
        setInputValue("")
        alert("Donwload Completed")

      },2000)
  }).catch(console.log("Error occured"));


};
 
  return (
    <div>
    <form action="#" onSubmit={handleSubmit} >
    <input onChange={handleOnChange} onClick={handleChange} value={inputValue} type="url" name="" id="" placeholder="Paste Url Here.."/>
    { urlProvided && <button type="submit"> {btnText} </button> }
    </form>
    </div>
  )
}

export default ReactForm