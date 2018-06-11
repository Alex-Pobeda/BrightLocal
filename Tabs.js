import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Client Information</Tab>
      <Tab>Locations (4)</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
  </Tabs>
);