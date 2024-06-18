// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Crowdfunding {
    // states
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaings = 0;

    // create campaign
    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns(uint256) {
        Campaign storage campaign = campaigns[numberOfCampaings];

        require(campaign.deadline < block.timestamp, "The deadline shoulf be a date in the future!");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target =  _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaings++;

        return numberOfCampaings - 1;
    }

    // donate to campaign
    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        // transfer funds
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        require(sent, "Transfer of funds failed");

        if (sent) {
            campaign.amountCollected += amount;
        }

        else {
            revert("Transfer failed");
        }
    }

    // get donators
    function getAllDonators(uint256 _id) public view returns(address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    // get all the campaigns
    function getAllCampaigns() public view returns(Campaign[] memory) {
        Campaign[] memory allCampains = new Campaign[](numberOfCampaings);

        for(uint i = 0; i < numberOfCampaings; i++) {
            Campaign storage item = campaigns[i];

            allCampains[i] = item;
        }

        return allCampains;

    }
}