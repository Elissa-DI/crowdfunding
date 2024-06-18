import React, {useState} from "react";
import { getContract, getSigner } from "../utils/EthereumObject";
import { TextField, Box, Button} from "@mui/material";
import { ethers } from "ethers";

const Donate = ({campaignId}) => {
    const [amount, setAmount] = useState("");

    const donate = async() => {
        const contract = getContract();
        const signer = getSigner();
        const tx = await contract.donateToCampaign(campaignId, {
            value: ethers.utils.parseEther(amount)
        });
        await tx.await();
    };

    return (
        <Box sx={{marginTop: 2}}>
            <TextField 
            label="amount"
            value={amount}
            fullWidth
            margin="normal"
            onChange={(e) => setAmount(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={donate}>Donate</Button>
        </Box>
    );
}

export default Donate