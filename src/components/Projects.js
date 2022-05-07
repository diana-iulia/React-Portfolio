import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "@mui/material/Link"
import CardMedia from '@mui/material/CardMedia';

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

export default function Projects() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id='projects'>

      <header>UW Web Dev Bootcamp Projects</header>

      {/* first project */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            sweata weatha
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>HTML, CSS, JS, and Open Weather API</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            cute and simple app returns a gif to suggest appropriate attire based on the weather conditions of their chosen city
          </Typography>
          <Link href='https://github.com/brysgithub/sweata-weatha' target='_blank'> Github Repo </Link>
          <br/>
          <Link href='https://brysgithub.github.io/sweata-weatha/' target='_blank'> Open App </Link>
        </AccordionDetails>

        <CardMedia
            component="img"
            image={project1}
            alt="CardMedia Image Example"
            // maxWidth="200px"
            height="auto"
            title="CardMedia Image Example"
        />
      </Accordion>

      {/* second project */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>dundun dnd <br/>(NPC Tracker)</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Node, Express, MySQL2 + Sequelize, Handlebars, Figma, Heroku
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            a dungeon master's best friend- users can organize and manage campaigns and their respective NPCs
          </Typography>
          <Link href='https://github.com/diana-iulia/dundun-dnd' target='_blank'> Github Repo </Link>
          <br/>
          <Link href='https://npc-track.herokuapp.com/' target='_blank'> Open App </Link>
        </AccordionDetails>

        <CardMedia
            component="img"
            image={project2}
            alt="CardMedia Image Example"
            // maxWidth="200px"
            height="auto"
            title="CardMedia Image Example"
        />
      </Accordion>

      {/* third project */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Lingr
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            MERN stack, Material UI, Heroku, git, react-localization
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Come one, come all! Practice your target language(s) with friends around the globe.
          </Typography>
          <Link href='https://github.com/diana-iulia/lingr' target='_blank'> Github Repo </Link>
          <br/>
          <Link href='http://ling-r.herokuapp.com/' target='_blank'> Open App </Link>
        </AccordionDetails>
        <CardMedia
            component="img"
            image={project3}
            alt="CardMedia Image Example"
            // maxWidth="200px"
            height="auto"
            title="CardMedia Image Example"
        />
      </Accordion>
      
    </div>
  );
}
