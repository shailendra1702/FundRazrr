const express = require("express");
const cors = require('cors');
// const {ethers} = require("hardhat");
const CC = require("./CreateCampaign.json");
const { ethers } = require("hardhat");
const contractABI = CC.abi;
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const rpcEndpoint = "Enter your RPC server endpoint";
// console.log(contractABI);
const app = express();
app.use(cors());
app.use(express.json());
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const contract = new ethers.Contract(contractAddress, contractABI, provider);

app.post("/ContractAddress", async (req, res) => {
  try {
    console.log("request body",req.body);
    // const signer = provider.getSigner();
    const signer = req.body.Signer;
    // console.log(signer);
    const result = await contract.connect(signer.address).getContractAddress();

    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.get("/Balance", async (req, res) => {
  try {
    const signer = provider.getSigner();
    console.log(signer);
    const result = await contract.connect(signer).getContractBalance();
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.post("/SetCampaign", async(req,res)=>{
  try{
    const {minimumnContribution, target, deadline, description} = req.body;
    const result = await contract.connect(signer).setCampaign(minimumnContribution,target,deadline,description);
    res.json({result});
  }catch(error){
    console.error(error);
    res.status(500).json({error: "Internal server error"});
  }

})
app.post("/contribute", async(req,res)=>{
  try{
    const {amount} = req.body;
    const result = await contract.connect(signer).setCampaign(minimumnContribution,target,deadline,description);
    res.json({result});
  }catch(error){
    console.error(error);
    res.status(500).json({error: "Internal server error"});
  }

})

app.listen(3845, () => {
  console.log('Server listening on port 3845');
});
