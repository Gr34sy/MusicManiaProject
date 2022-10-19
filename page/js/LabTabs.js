import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
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
            <Tab label="Concerts" value="3"/>
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
            <li>Swan Songs (2008)</li>
            <li>American Tragedy (2011)</li>
            <li>Notes from the Underground (2013)</li>
            <li>Day of the Dead (2015)</li>
            <li>Five (2017)</li>
            <li>New Empire, Vol. 1 (2020)</li>
            <li>New Empire, Vol. 2 (2020)</li>
            <li>Hotel Kalifornia (2022)</li>
          </ul>
        </TabPanel>

        <TabPanel value="3" className="tabPanel custom-scrollbar kupa chuj dupa cyce wadowice">
          <ul className="card__concerts">
            <li><i className="fa-solid fa-music"></i>El Paso</li>
            <li><i className="fa-solid fa-music"></i>Berlin</li>
            <li><i className="fa-solid fa-music"></i>Warsaw</li>
            <li><i className="fa-solid fa-music"></i>Los Angeles</li>
          </ul>
        </TabPanel>

      </TabContext>
    </Box>
  );
}