import React, {useState, useEffect} from "react";
import {TextField, Button, Typography} from "@mui/material";
import { ethers } from "ethers";

const CampaignForm = ({contract, provider}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [target, setTarget] = useState("");
    const [image, setImage] = useState("");

    const createCampaign = async() => {
        if (!contract) return;

        const signer = provider.getSigner();
        const tx = await contract.connect(signer).createCampaign(
            await signer.getAddress(),
            title,
            description,
            ethers.utils.parseUnits(target, "ether"),
            new Date(deadline).getTime() / 1000,
            image
        );

        await tx.wait();
        alert("Campaign created successfully");
    };

    return (
        <div>
            <Typography variant="h6">Create Campaign</Typography>
            <TextField
            label="Title"
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
            fullWidth
            margin="normal"/>

            <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            />

            <TextField
            label="Target (ETH)"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            fullWidth
            margin="normal"
            />

            < TextField
            label="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{shrink: true}}
            />

            < TextField
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
            margin="normal"
            />

            <Button variant="contained" color="primary" onclick={createCampaign}>
                create
            </Button>
        </div>
    )
};

export default CampaignForm