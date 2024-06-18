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
      <TextField
        fullWidth
        margin="normal"
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        sx={{
          '& .MuiInputBase-root': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        sx={{
          '& .MuiInputBase-root': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Target (ETH)"
        value={target}
        onChange={e => setTarget(e.target.value)}
        sx={{
          '& .MuiInputBase-root': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Deadline (Timestamp)"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
        sx={{
          '& .MuiInputBase-root': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        sx={{
          '& .MuiInputBase-root': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />
      <div className="w-full flex items-center justify-center my-5">
        {/* <Button variant="contained" className='bg-blue-800 w-4/5' onClick={createCampaign}>Create</Button> */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'aqua',
            width: '100%',
            borderRadius: '999px',
            color: 'black',
            '&:hover': {
              backgroundColor: 'darkcyan',
              color: 'white',
            },
          }}
          onClick={createCampaign}
        >
          Create
        </Button>
      </div>
    </Box>
  );
};

export default CreateCampaign;
