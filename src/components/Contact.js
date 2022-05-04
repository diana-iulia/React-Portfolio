import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  display: 'flex',
  top: '25%',
  left: '50%',
  width: '75%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  flex: 1,
  justifyContent: 'space-between'
};

export default function AboutMe() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="about">
      <Button onClick={handleOpen}>contact</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
            Find me here: 
            </Typography>

            <Typography id="modal-modal-description" component={'span'} sx={{ mt: 2, flex: 1, justifyContent: 'space-around' }}>
                <Stack direction="row" spacing={1}sx={{flex: 1, justifyContent: 'space-around'}} >
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
            </Typography>

        </Box>
      </Modal>
    </div>
  );
}

