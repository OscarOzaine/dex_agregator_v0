import './App.css';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import DexAggregatorABI from './artifacts/src/contracts/DexAggregator.sol/DexAggregator.json';
import WETHContract from '../src/ABIs/WETHContract.json';
import USDCContractABI from '../src/ABIs/USDCContract.json';
import Swap from './components/Swap';

const DexAggregatorAddress = '0xD28F3246f047Efd4059B24FA1fa587eD9fa3e77F';
const usdcContractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; //0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
const wethContractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState('');
  const [loading, setLoading] = useState(false);
  const [USDCContract, setUSDCContract] = useState('')
  const [USDCBalance, setUSDCBalance] = useState(0);
  const [WETHBalance, setWETHBalance] = useState(0);

  useEffect(() => {
    checkIfWalletIsConnected();

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0]);
      await checkIfWalletIsConnected();
      window.location.reload();
    });
  },[]);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) {
        alert('No web3 provider detected. Please install Metamask');
      } else {
        setLoading(true);
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length !== 0) {
          setAccount(accounts[0]);
          loadContracts();
        } else {
          console.log('Please connect your wallet');
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //Connect Wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('No Web3 Provider Detected. Kindly Install Metamask');
      } else {
        setLoading(true);
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
        loadContracts();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //Load the DexAggregator, USDC and WETH Contracts
  const loadContracts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const usdcCont = new ethers.Contract(
        usdcContractAddress,
        USDCContractABI.abi,
        signer
      );

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      setUSDCContract(usdcCont);

      let USDCBal = await usdcCont.balanceOf(accounts[0]);
      setUSDCBalance(USDCBal.toString() / 10 ** 6);

      const wethCont = new ethers.Contract(
        wethContractAddress,
        WETHContract.abi,
        signer
      );

      let WETHBal = await wethCont.balanceOf(accounts[0]);
      setWETHBalance(WETHBal.toString() / 10 ** 18);

      const dex = new ethers.Contract(
        DexAggregatorAddress,
        DexAggregatorABI.abi,
        signer
      );
      setContract(dex);

      console.log('Contracts Loaded!');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar
        account={account}
        connectWallet={connectWallet}
        loading={loading}
      />
      <Swap
        account={account}
        contract={contract}
        USDCBalance={USDCBalance}
        WETHBalance={WETHBalance}
        USDCContract={USDCContract}
      />
    </div>
  );
}

export default App;
