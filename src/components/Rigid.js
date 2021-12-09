import { Button } from "@mui/material"

const Rigid = () => {
    var plane=[]
    for(var i=0;i<5;i++){
       for(var j=0;j<10;j++){
        plane.push(<Button sx={{height:"100px",width:"100px"}}>*</Button>)
    }
       plane.push(<br></br>)
    }   
    return (<>
    
    {plane}
    </>);
}
export default Rigid;