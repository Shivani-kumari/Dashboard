import React from 'react'
import Box from '@material-ui/core/Box';
import '../App.css'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        width:500,
      minWidth: 250,
      minHeight:300,
      
      
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Home() {
    const[emial,setEmail]= React.useState("")
    const[password,setPassWord]= React.useState("")
    const classes = useStyles();
    const history = useHistory()
    const store = ()=>{

        // var name = document.getElementById('name');
        var pw = document.getElementById('pw');
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var special = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
    
        if(emial.length == 0){
            alert('Please fill in email');
    
        }else if(password.length == 0){
            alert('Please fill in password');
    
        }else if(emial.length == 0 && password.length == 0){
            alert('Please fill in email and password');
    
        }
    
        else if(!password.match(numbers)){
            alert('please add 1 number');
    
        }else if(!password.match(upperCaseLetters)){
            alert('please add 1 uppercase letter');
    
        }else if(!password.match(lowerCaseLetters)){
            alert('please add 1 lovercase letter');
    
        }else if(!password.match(special)){
            alert('please add 1 special letter');
    
        }else{
            localStorage.setItem('email', emial);
            localStorage.setItem('pwassword', password);
            history.push({
                pathname: `/Dashboard`
                
              })
        }
    }
    
    return (
        <div >
           <Box display="flex" justifyContent="center" mt={15} >
        <Box p={1} >
        <Card className={classes.root} style={{borderRadius: '0px 80px', }}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Login
        </Typography>
        <Box display="flex" justifyContent="center"  >
        <Box p={1} >
        <TextField id="outlined-basic" label="Email"
         type='email' variant="outlined" value={emial}
         onChange={(e)=>setEmail(e.target.value)}
          />
        </Box>
        </Box>
        <Box display="flex" justifyContent="center"  >
        <Box p={1} >
        <TextField id="outlined-basic" label="Password" type='password'
         variant="outlined" value={password}
          onChange={(e)=>setPassWord(e.target.value)}
          />
        </Box>
        </Box>
        
        <Typography className={classes.pos} color="textSecondary">
          Password must be at least character long, a lower case letter, a upperCaseLetters, a special characters.
        </Typography>
        
      </CardContent>
      <Box display="flex" justifyContent="center"  >
      <CardActions>
      
      <Button variant="contained" color="secondary" onClick={()=>store()}>
         Login
        </Button>
        
      </CardActions>
      </Box>
    </Card>
        </Box>
        
      </Box>
        </div>
    )
}
