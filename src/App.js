import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import Box from '@mui/material/Box';


import { Grid } from "@mui/material";

import './App.css'

function App() {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([])


  
  const { getRootProps:getRootFile1, getInputProps:getInputFile1 } = useDropzone({
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
  
  });

  const { getRootProps:getRootFile2, getInputProps:getInputFile2 } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles2(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  
  });


  

  
 

  const images1 = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "50%", height:"200px"}} alt="preview" />
      </div>
    </div>
  ))

  const images2 = files2.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "50%", height:"200px"}} alt="preview" />
      </div>
    </div>
  ))
  return (
    <React.Fragment>

    <Grid container spacing={2} columns={16}>

      <Grid item xs={8}>
          <div className="box">
              <div {...getRootFile1()}>
                  <input {...getInputFile1()} />
                  <button>choose image</button>
              </div>
              <div>{images1}</div>
          </div>
      </Grid>


    <Grid item xs={8}>
        <div className="box">
            <div {...getRootFile2()}>
                <input {...getInputFile2()} />
                <button>choose image</button>
            </div>
             <div>{images2}</div>
        </div>
    </Grid>

  </Grid>

    
   </React.Fragment>
  )
}

export default App