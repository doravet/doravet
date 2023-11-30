import { ethers } from "ethers";
import abi from "../../contract/doravetABI.json";


const contractAddr = "0x9b901cac3fe40056635fe1e5bb53a6e3e06cc582";

const getContract = async () => {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
        var signer = await provider.getSigner(); // Holds your private key and can sign things
        const Contract = new ethers.Contract(contractAddr, abi, signer);
        console.log(Contract)
        return Contract;
    } else {
        alert("No wallet detected");
    }
};

export async function join(firstname, lastname, mail, organization) {
    const doravetContract = await getContract();
    try {
        var tx = await doravetContract.join(
            firstname,
            lastname,
            mail,
            organization
        );
        await tx.wait();
        console.log(tx.hash)
    } catch (error) {
        console.log(error);
    }
}

export async function AllUserCampaigns(owner) {
    const doravetContract = await getContract();
    try {
        var user = await doravetContract.AllUserCampaigns(owner);
        return user;
    } catch (error) {
        console.log(error);
    }
}

export async function createCampaign(title, description, startdate, enddate) {
    const doravetContract = await getContract();
    try {
        var tx = await doravetContract.createCampaign(title, description, startdate, enddate);
        await tx.wait();
    } catch (error) {
        console.log(error);
    }
}

export async function getCampaign(owner) {
    const doravetContract = await getContract();
    try {
        var user = await doravetContract.getCampaign(owner);
        return user;
    } catch (error) {
        console.log(error);
    }
}
