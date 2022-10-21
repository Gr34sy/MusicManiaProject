import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs({albums , toptracks}) {
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
        <TabPanel value="1" className="tabPanel">
          <ul className="card__members">
            <li>Dylan „Funny Man” Alvarez</li>
            <li>Jorel „J-Dog” Decker</li>
            <li>George „Johnny 3 Tears” Ragan</li>
            <li>Jordon „Charlie Scene” Terrell</li>
            <li>Daniel „Danny” Murillo </li>
          </ul>
        </TabPanel>

        <TabPanel value="2" className="tabPanel">
          <ul className="card__discography">
            {albums
            .filter((album,id)=>id<16)
            .map(
              (album,id)=>
              (<li key={id}><i className="fa-solid fa-compact-disc custom-list-icon"/>{album.name}</li>)
            )}
          </ul>
        </TabPanel>

        <TabPanel value="3" className="tabPanel">
          <ul className="card__toptracks">
            {toptracks
            .filter((track,id)=>id<16)
            .map(
              (track,id)=>
              (<li key={id}><i className="fa-solid fa-music custom-list-icon"/>{track.name}</li>)
            )}
          </ul>
        </TabPanel>

      </TabContext>
    </Box>
  );
}