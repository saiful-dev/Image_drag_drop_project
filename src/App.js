import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import Box from '@mui/material/Box';
import './App.css'
import { height } from "@mui/system";

function App() {
  const [files, setFiles] = useState([])


  
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px", height:"300px"}} alt="preview" />
      </div>
    </div>
  ))

  return (
    <React.Fragment>
    <div className="box">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button>choose image</button>
      </div>
      <div>{images}</div>

      
    
   </div>
   </React.Fragment>
  )
}

export default App