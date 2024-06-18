/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { getContract, getProvider } from '../utils/EthereumObject';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { ethers } from 'ethers';
import Crowdfunding from "../contract/Crowdfunding.json"

const CampaignList = ({ onCampaignSelect }) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      const contract = getContract();
      const campaigns = await contract.getAllCampaigns();
      setCampaigns(campaigns);
    };

    loadCampaigns();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Campaigns</Typography>
      <List className='grid grid-cols-3 gap-3'>
        {campaigns.map((campaign, index) => (
          <ListItem button key={index} onClick={() => onCampaignSelect(index)}>
            <ListItemText
              className='bg-slate-700 p-5 w-full h-full rounded'
              primary={campaign.title}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="gray" className='pt-2'>
                    {campaign.description}
                  </Typography>
                  <br />
                  <div className='flex items-center gap-x-5 pt-5'>
                    <p className='text-slate-400'>
                      Target: {ethers.utils.formatEther(campaign.target)} ETH
                    </p>
                    <p className='text-slate-400'>
                      Collected: {ethers.utils.formatEther(campaign.amountCollected)} ETH
                    </p>
                  </div>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CampaignList;
