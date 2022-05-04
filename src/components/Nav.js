import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChildCareIcon from '@mui/icons-material/ChildCare'; 
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'; 
import AssignmentIcon from '@mui/icons-material/Assignment';

import myResume from '../assets/cv-no-summary.pdf'

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box id="nav" >
        <BottomNavigation 
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ flex:1 , justifyContent: 'space-evenly'}}
        >

        <BottomNavigationAction 
            label="About Me" 
            value="about me" 
            href="/#about"
            rel="noreferrer"
            icon={<ChildCareIcon />} />

        <BottomNavigationAction
            label="Projects"
            value="projects"
            href="/#projects"
            rel="noreferrer"
            icon={<AssignmentIcon />} />

        <BottomNavigationAction
            label="Résumé"
            value="resume"
            href={myResume}
            // target="_blank"
            rel="noreferrer"
            download="DianaIuliaCalin-resume"
            icon={<DownloadForOfflineIcon />} />
    
        </BottomNavigation>
    </Box>
  );
}
