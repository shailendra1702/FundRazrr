// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library MyLibrary {
    struct Campaign{
        uint minimumContribution;
        uint deadline;
        uint target;
        string description;
        uint uniqueId; 
        uint raisedAmount;
        bool isFunded;
    }
}

contract CreateCampaign {
    struct Owner{
        address payable ownerAdd;
        bool isClosed;
        uint timeStamp;
    }
    using MyLibrary for MyLibrary.Campaign;
    MyLibrary.Campaign[] public campaignList;
    mapping(uint=>Owner) public managers;
    mapping(uint=>mapping(address => uint)) public campaignContributors;
    uint public count;
    uint public feePercentage;
    uint uid;

    constructor(){
        count = 0;
        feePercentage = 3;
        uid = 1;
    }

    function setCampaign(uint _minimumnContribution,uint _target, uint _deadline, string memory _desc) external {
        MyLibrary.Campaign memory campaign;
        Owner memory manager;

        manager.ownerAdd = payable(msg.sender);
        manager.isClosed = false;
        manager.timeStamp = block.timestamp;

        campaign.minimumContribution = _minimumnContribution;
        campaign.target = _target;
        campaign.deadline = _deadline + block.timestamp;
        campaign.description = _desc;
        campaign.uniqueId = uid;
        campaign.raisedAmount = 0;
        campaign.isFunded = false;

        managers[uid] = manager;
        campaignList.push(campaign);

        count++;
        uid++;
    }
    function getCampaign(uint val) public view returns (MyLibrary.Campaign memory){
        return campaignList[val];
    }

    function getContractBalance() public view returns(uint){
        return address(this).balance;
    }
    function getContractAddress() public view returns(address){
        return address(this);
    }
    function getContributorInfo(uint val) public view returns(uint){
        return campaignContributors[val][msg.sender];
    }

    //send ether using custom made or any software wallets
    function contribute(uint val) public payable {
        // MyLibrary.Campaign memory campaign = getCampaign(val);
        require(!campaignList[val].isFunded,"Campaign already funded");
        require(block.timestamp<campaignList[val].deadline, "Beyond Deadline");
        require(msg.value > campaignList[val].minimumContribution,"Contribution amount must be greater than minimum amount");
        
        //we can constrain number of contributors and also amount they can contribute using require
        campaignContributors[campaignList[val].uniqueId][msg.sender] += msg.value;
        campaignList[val].raisedAmount += msg.value;
        
       //make a function call for checking raisedAmount > target 
       //and return a bool based on which close the campaign and also
       //set isClosed to true in Owner
    }
    
    function withdrawalRequest(uint val) public {
        MyLibrary.Campaign memory campaign = getCampaign(val);
        require(!campaign.isFunded,"Withdrawal cannot be made");
        require(msg.sender == managers[campaign.uniqueId].ownerAdd, "Only Campaign Creator can withdraw");
        require(campaign.target <= campaign.raisedAmount, "Project is not fully funded");
        
        managers[campaign.uniqueId].ownerAdd.transfer(campaign.raisedAmount);
        campaign.raisedAmount = 0;
        campaign.isFunded = true;
    }
    

    // function checkPayableFallback(address _contractAddress) public returns (bool) {
    //     bytes memory payload = abi.encodeWithSignature("fallback()");
    //     (bool success, ) = _contractAddress.call{value: 0}(payload);
    //     return success;
    // }
}
