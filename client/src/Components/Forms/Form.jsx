import React,{useState} from 'react'
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
const Form = () => {

  const [postData, setPostData] = useState({creator: "", title:"", message:"", tags:"", selectedFile:"" })
   const classes = useStyles();

   const handlesubmit=()=>{

   }
  return (
    <Paper className={classes.paper}>
     <form autoComplete='off' noValidate className={classes.form} onSubmit={handlesubmit}>
     <Typography variant='h6'>
      Creating a Memory
     </Typography>
     <TextField name = "creator" 
      varient = "outlined"
      label = "Creator"
      value={postData.creator}
      onChange = {(e)=>setPostData({...postData, creator:e.target.value})}

     />
     </form>
    </Paper>
  )
}

export default Form
