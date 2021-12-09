import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Paper} from '@mui/material';
import Rigid from './Rigid';
import Pin from './Pin';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [tool,setTool] = React.useState("Vertical");
  const [pintool,setPTool] = React.useState("Vertical");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = React.useState("Fixed");
  const selected=(e)=>{
    setChecked(e.target.value);
    console.log(e.target.value);
    setTool(e.target.value);
    setPTool(e.target.value);
  }
  const [rigid, setRigid] = React.useState("Vertical");
  const nrigid=(e)=>{
    setRigid(e.target.value);
    console.log(e.target.value);
    setTool(e.target.value);
  }
  const [pin, setPin] = React.useState("Vertical");
  const pinned=(e)=>{
    setPin(e.target.value);
    console.log(e.target.value);
    setPTool(e.target.value);
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Rigid Structure" {...a11yProps(0)} />
          <Tab label="Pin Jointed Structure" {...a11yProps(1)} />
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper sx={{background:"pink"}}>
    
           <Button onClick={selected} value="Fixed">Fixed Support</Button>
           <Button onClick={selected} value="Hinged">Hinged Support</Button>
           <Button onClick={selected} value="Roller">Roller Support</Button>
           <Button sx={{color:"Red"}}>{checked}</Button>
           <Button value="Horizontal" onClick={nrigid}>Horizontal</Button>
           <Button value="Vertical" onClick={nrigid}>Vertical</Button>
           <Button sx={{color:"Red"}}>{rigid}</Button>
           <Button sx={{color:"Green"}}>{tool}</Button>
        </Paper>
        <br></br>
        <Rigid></Rigid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Paper  sx={{background:"pink"}}> 
       
      <Button onClick={selected} value="fixed">Fixed Support</Button>
           <Button onClick={selected} value="hinged">Hinged Support</Button>
           <Button onClick={selected} value="roller">Roller Support</Button>
           <Button sx={{color:"Red"}}>{checked}</Button>   
        
           <Button onClick={pinned} value="Horizontal">Horizontal</Button>
           <Button onClick={pinned} value="Vertical">Vertical</Button>
           <Button onClick={pinned} value="Left Slant">Left Slant</Button>
           <Button onClick={pinned} value="Right Slant">Right Slant</Button>
           <Button sx={{color:"Red"}}>{pin}</Button>
           <Button sx={{color:"Green"}}>{pintool}</Button>
       </Paper>
       <br></br>
       <Pin></Pin>
      </TabPanel>
    
    </Box>
  );
}