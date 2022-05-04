import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


export default function Footer () {
    const heart = "<3";
    return (
        <footer>
            <Stack direction="row" sx={{flex: 1, justifyContent: 'space-around'}} >
                    <IconButton 
                      aria-label="github" 
                      color="primary" 
                      href='https://github.com/diana-iulia' 
                      target='_blank'>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton 
                      aria-label="linkedin" 
                      color="secondary"
                      href='https://www.linkedin.com/in/diana-calin-4255aa233/' 
                      target='_blank'>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton 
                      aria-label="instagram" 
                      color="warning"
                      href='https://www.instagram.com/wo.maninthemachine/' 
                      target='_blank'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton 
                      aria-label="send email" 
                      color="success"
                      href='mailto:dianacalin@hotmail.com' 
                      target='_blank'>
                        <MailIcon />
                    </IconButton>
                </Stack>

                made with {heart} and caffeine by diana
        </footer>
    );
}
