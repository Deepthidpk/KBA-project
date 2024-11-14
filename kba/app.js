document.addEventListener('DOMContentLoaded', () => {
    const connectMetaMask = document.getElementById('connectMetaMask');
    const donateButton = document.getElementById('donateButton');
    const donationPopup = document.getElementById('donationPopup');
    const closePopup = document.getElementById('closePopup');
    const receiverForm = document.getElementById('receiverForm');
    const verificationStatus = document.getElementById('verificationStatus');
    const searchDonorsButton = document.getElementById('searchDonors');
    const withdrawButton = document.getElementById('withdrawButton');
    const requestStatus = document.getElementById('requestStatus');
    let userAddress;

   
    if (connectMetaMask) {
        connectMetaMask.addEventListener('click', async () => {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    userAddress = accounts[0];
                    alert(`Connected to MetaMask: ${userAddress}`);
                } catch (error) {
                    console.error(error);
                    alert('Failed to connect to MetaMask.');
                }
            } else {
                alert('MetaMask is not installed.');
            }
        });
    }

   
    if (donateButton) {
        donateButton.addEventListener('click', async () => {
            const receiverAddress = document.getElementById('receiverAddress').value;
            const donationAmount = document.getElementById('donationAmount').value;

            if (receiverAddress && donationAmount) {
               
                donationPopup.classList.remove('hidden');
            } else {
                alert('Please enter all required fields.');
            }
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            donationPopup.classList.add('hidden');
        });
    }

    
    if (receiverForm) {
        receiverForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const idProofType = document.getElementById('idProofType').value;
            const idProofFile = document.getElementById('idProofFile').files[0];

            if (idProofType && idProofFile) {
               
                verificationStatus.classList.remove('hidden');
            } else {
                alert('Please upload a valid ID proof.');
            }
        });
    }

    if (searchDonorsButton) {
        searchDonorsButton.addEventListener('click', () => {
            window.location.href = "receiveramt.html";
        });
    }

    if (withdrawButton) {
        withdrawButton.addEventListener('click', () => {
            requestStatus.textContent = "Approved";
            alert("Amount transferred successfully!");
        });
    }
});
