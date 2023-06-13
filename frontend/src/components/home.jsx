import React, { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';


function Home() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState(null);
  const [signerAddress,setSignerAddress] = useState(null);

  const connectToProvider = async () => {
    const ethereumProvider = window.ethereum;
    // console.log(ethereumProvider);
    if (ethereumProvider) {
      try {
        await ethereumProvider.request({ method: 'eth_requestAccounts' });
        
        const web3Provider = new ethers.providers.Web3Provider(ethereumProvider);
        setProvider(web3Provider);
        const web3Signer = web3Provider.getSigner();
        setSigner(web3Signer);
        const _signerAddress = await signer.getAddress();
        setSignerAddress(_signerAddress);
      
        console.log(signer);
      } catch (err) {
        console.log(err);
      }
    }
    console.log(ethereumProvider);

    // setTimeout(() => console.log('signed', signer), 0);
  };

  const checkBalance = async () => {
    console.log(signer);
    if (signer) {
      const accounts = await provider.listAccounts();
      console.log(accounts)
      const balance = await provider.getBalance(accounts[0]);
      setBalance(ethers.utils.formatEther(balance));
    }
  };

  const contractAddress = async () => {
    const payload = {
      "Signer": {
        "address": signerAddress,
        // Other signer-related data you may need
      },
      // "transactionDetails": {
      //   // Include any other necessary transaction details
      //   value: ethers.utils.parseEther(valueToAdd),
      // },
    };
    const response = await axios.post("http://localhost:3845/ContractAddress",payload);
    console.log(response.statusText);
    setAddress(response.data['result']);
    // console.log(response.data['result']);
  }
  const campaignCreation = async (_minimumnContribution, _target, _deadline, _description) => {
    const payload = {
      "Signer": {
        "address": signerAddress,
        // Other signer-related data you may need
      },
      "minimumContribution": _minimumnContribution,
      "target": _target,
      "deadline": _deadline,
      "description": _description,
    }
    const response = await axios.post("http://localhost:3845/SetCampaign",payload);
    console.log(response.data);
  }

  return (
    <div>
      {provider ? (
        <><button onClick={checkBalance}>
          Check Account Balance
        </button><button onClick={contractAddress}>
            Contract Address
          </button>
          <button onClick={campaignCreation}>
            Create Campaign
          </button>
          
          </>
        
      ) : (
        <button onClick={connectToProvider}>
          Connect to Ethereum Provider
        </button>
      )}
      {balance && <p>Account balance: {balance} ETH</p>}
      {address && <p>{address}</p>}
    </div>
  );
}

export default Home;
