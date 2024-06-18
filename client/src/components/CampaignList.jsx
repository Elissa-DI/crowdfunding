
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
      <List>
        {campaigns.map((campaign, index) => (
          <ListItem button key={index} onClick={() => onCampaignSelect(index)}>
            <ListItemText 
              primary={campaign.title} 
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {campaign.description}
                  </Typography>
                  <br />
                  Target: {ethers.utils.formatEther(campaign.target)} ETH
                  <br />
                  Collected: {ethers.utils.formatEther(campaign.amountCollected)} ETH
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
