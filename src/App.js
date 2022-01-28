import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import Box from '@mui/material/Box';


import { Grid } from "@mui/material";

import './App.css'



function App() {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([])


  
  const { getRootProps:getRootFile1, getInputProps:getInputFile1,isDragActive:dragfile1   } = useDropzone({
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

  const { getRootProps:getRootFile2, getInputProps:getInputFile2, isDragActive:dragfile2  } = useDropzone({
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

      <Grid item xs={8} >
        <section>
          <div className="box">
            <div {...getRootFile1({ className: 'dropzone' })}>
                <input {...getInputFile1()} />

                <div className="dropArea">
                  <button>Choose Image</button>
                  {dragfile1? <p style={{textAlign: 'center',paddingTop: '5%'}}>drop here</p>:<p style={{textAlign: 'center'}}>You can drag & drop Image Here</p>}

                </div>

                <div>
                  {images1}
                </div>
            </div>
          </div>
        </section>
          
      </Grid>


    <Grid item xs={8}>
        <div className="box">
            <div {...getRootFile2()}>
                <input {...getInputFile2()} />
              

                <div className="dropArea">
                  <button>Choose Image</button>
                  {dragfile2? <p style={{textAlign: 'center',paddingTop: '5%'}}>drop here</p>:<p style={{textAlign: 'center'}}>You can drag & drop Image Here</p>}

                </div>

                <div>
                  {images2}
                </div>
            </div>
        </div>
    </Grid>

  </Grid>

    
   </React.Fragment>
  )
}

export default App