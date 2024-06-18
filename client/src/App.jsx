/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

import { loadWeb3 } from './utils/EthereumObject';
import  "./index.css"

import CreateCampaign from './components/CreateCampaign';
import CampaignList from './components/CampaignList';
import CampaignDetails from './components/CampaignDetails';
import { Container, Typography } from '@mui/material';


const App = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [web3Initialized, setWeb3Initialized] = useState(false);

  useEffect(() => {
    const initializeWeb3 = async () => {
      await loadWeb3();
      setWeb3Initialized(true);
    };

    initializeWeb3();
  }, []);

  if (!web3Initialized) {
    return <div className='m-4 text-[blue]'>Ooops! Waiting for Wallet Confirmation...</div>;
  }

  return (
    <Container className="mt-4]">
      <Typography variant="h3" color="indigo" gutterBottom>Crowdfunding Dapp</Typography>
      <CreateCampaign />
      <CampaignList onCampaignSelect={setSelectedCampaign} />
      {selectedCampaign !== null && <CampaignDetails campaignId={selectedCampaign} />}
    </Container>
  );
};

export default App;
