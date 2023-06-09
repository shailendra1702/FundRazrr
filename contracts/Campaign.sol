// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CampaignFactory{
    // ==== Fields ====
    address[] public deployedCampaigns;
    
    // ==== Modifier ====
    // ==== create a new contract ====
    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum,msg.sender);
        address campaignAddress = address(newCampaign);
        deployedCampaigns.push(campaignAddress);
    }
    
    // ==== returning all the address of the deployed contract
    function getDeployedCampaigns() public view returns (address[] memory){
        return deployedCampaigns;
    }
    
}

contract Campaign{
    // collection of key value pairs
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
    }
    
    // === Fields ===
    Request[] public requests;
    mapping(address => bool) approvals;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    
    // === Methods ===
    
    // == Modifier ==
    modifier authorization(){
        require(msg.sender == manager);
        _;
    }
    
    // == constructor ==
    //Setting the manager and minimum amount to contribute
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    //donate money to compaign and became an approver
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        if(approvers[msg.sender]!= true){
            approvers[msg.sender] = true;
            approversCount++;
        }
    }
    
    //creating a new request by the manager
    function createRequest(string memory description, uint value, address recipient)
        public authorization{
            Request memory newReq = Request({
                description : description,
                value : value,
                recipient : recipient,
                complete : false,
                approvalCount : 0
            });
            
            requests.push(newReq);
        }
        
    //approving a particular request by the user
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!approvals[msg.sender]);
        require(!request.complete);
        
        approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    //final approval of request by the manager and sending the amount
    function finalizeRequest(uint index) public authorization{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        
        payable(request.recipient).transfer(request.value);
        request.complete = true;
        
    }

    // function to retrieve Campaign balance, minimumContribution , no of requests , no of Contributors and manager address
    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
            ); 
    }

    // returing no of requests
    function getRequestsCount() public view returns (uint) {
        return  requests.length;
    }
    
}