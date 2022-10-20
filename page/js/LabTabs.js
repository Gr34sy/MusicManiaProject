import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs({albums}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Band Members" value="1"/>
            <Tab label="Discography" value="2"/>
            <Tab label="Top Tracks" value="3"/>
          </TabList>
        </Box>
        <TabPanel value="1" className="tabPanel custom-scrollbar">
          <ul className="card__members">
            <li>Dylan „Funny Man” Alvarez</li>
            <li>Jorel „J-Dog” Decker</li>
            <li>George „Johnny 3 Tears” Ragan</li>
            <li>Jordon „Charlie Scene” Terrell</li>
            <li>Daniel „Danny” Murillo </li>
          </ul>
        </TabPanel>

        <TabPanel value="2" className="tabPanel custom-scrollbar">
          <ul className="card__discography">
            {albums
            .filter((album,id)=>id<16)
            .map(
              (album,id)=>
              (<li key={id}>{album.name}</li>)
            )}
          </ul>
        </TabPanel>

        <TabPanel value="3" className="tabPanel custom-scrollbar kupa chuj dupa cyce wadowice">
          <ul className="card__toptracks">
            <li><i className="fa-solid fa-music"></i>El Paso</li>
          </ul>
        </TabPanel>

      </TabContext>
    </Box>
  );
}