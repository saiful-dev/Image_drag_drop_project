import React, { useState,useEffect } from "react"
import { useDropzone } from "react-dropzone"
import Box from '@mui/material/Box';

import axios from "axios";
import { Grid } from "@mui/material";


import './App.css'



function App() {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([])
 

  useEffect(()=>{

   
    if(files.length !==0 && files.length !==0){
        const config={headers : {
            'Content-Type': 'multipart/form-data',
        }};

      let fd1=new FormData();
     

     files.map(file=>{
          fd1.append("source_img",file) 
      })

    files2.map(file=>{
          fd1.append("target_img", file)
      })


  axios.post("http://103.87.214.42/api/v1/compare/",fd1,config)
        .then((res)=>{
          console.log(res)
        })
        .catch((error)=>{
          console.log(error);
        })


  }
  },[files && files2]);
  
  const { getRootProps:getRootFile1, getInputProps:getInputFile1,isDragActive:dragfile1   } = useDropzone({
    accept: "image/*",
    
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
        
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      
      
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


  const images1 = files.map((file) => {

    
   return(
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "50%", height:"200px"}} alt="preview" />
      </div>
    </div>
   )
   })

  const images2 = files2.map((file) => {

  
    return(
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "50%", height:"200px"}} alt="preview" />
      </div>
    </div>
    )
  })


  return (
    <React.Fragment>

    <Grid container spacing={2} columns={16}>

      <Grid item xs={8} >
        <section>
          <div className="box">
            <div {...getRootFile1({ className: 'dropzone' })}>
                <input type="file"  {...getInputFile1()}  />

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
                <input  type="file"  {...getInputFile2()}  />
              

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
