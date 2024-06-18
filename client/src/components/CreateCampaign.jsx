/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { getContract, getSigner } from '../utils/EthereumObject';
import { TextField, Button, Box, Typography } from '@mui/material';
import { ethers } from 'ethers';

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState('');

  const createCampaign = async () => {
    const contract = getContract();
    const signer = getSigner();
    const address = await signer.getAddress();
    await contract.createCampaign(
      address, 
      title, 
      description, 
      ethers.utils.parseEther(target), 
      parseInt(deadline), 
      image
    );
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Create Campaign</Typography>
      <TextField fullWidth margin="normal" label="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <TextField fullWidth margin="normal" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <TextField fullWidth margin="normal" label="Target (ETH)" value={target} onChange={e => setTarget(e.target.value)} />
      <TextField fullWidth margin="normal" label="Deadline (Timestamp)" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <TextField fullWidth margin="normal" label="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <Button variant="contained" color="primary" onClick={createCampaign}>Create</Button>
    </Box>
  );
};

export default CreateCampaign;
