import React from 'react'
import { useState } from 'react'
function ReactForm() {
  const [urlProvided, setUrlProvided] = useState(false)
  const fileInput = document.querySelector("input");
  const button = document.querySelector("button");
  
  
 const handleChange = ()=>{
setUrlProvided((prevUrlState)=>{
  return true
  ;
})
 }

const handleSubmit =(event)=>{
  if(fileInput.value == ''){
    alert('No Url Provided')
}else{
        button.innerText="Downloading..."
        event.preventDefault();
    fetchFile(fileInput.value);
}

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
      button.innerText("Downloading ...");
  }).catch(
()=>{
  
button.innerText="Download File";
  alert("Failed to Download The File");
}

  );


};
 
  return (
    <div>
    <form action="#" onSubmit={handleSubmit} >
    <input onClick={handleChange}  type="url" name="" id="" placeholder="Paste Url Here.."/>
    { urlProvided && <button type="submit">Download File</button> }
    </form>
    </div>
  )
}

export default ReactForm