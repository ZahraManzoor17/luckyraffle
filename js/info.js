const contractAddress = '0xE31ED3e36c4337877e041BF8908e893a06F2DA08';

// The ABI for the smart contract
const contractABI = [{
        "inputs": [],
        "name": "getTickets",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lotteryId",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];
async function getTicketCount1() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentTicketCount = (await contract.methods.getTickets().call()).toString();
        const ticketCountResult1 = document.getElementById("ticketCountResult1");
        ticketCountResult1.textContent = `${currentTicketCount} out of 25`;
    } catch (error) {
        console.error(error);
    }
}
async function getTicketCount2() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentTicketCount = (await contract.methods.getTickets().call()).toString();
        const ticketCountResult2 = document.getElementById("ticketCountResult2");
        ticketCountResult2.textContent = `${currentTicketCount} out of 25`;
    } catch (error) {
        console.error(error);
    }
}
async function getTicketCount3() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentTicketCount = (await contract.methods.getTickets().call()).toString();
        const ticketCountResult3 = document.getElementById("ticketCountResult3");
        ticketCountResult3.textContent = `${currentTicketCount} out of 25`;
    } catch (error) {
        console.error(error);
    }
}
async function getTicketCount4() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentTicketCount = (await contract.methods.getTickets().call()).toString();
        const ticketCountResult4 = document.getElementById("ticketCountResult4");
        ticketCountResult4.textContent = `${currentTicketCount} out of 25`;
    } catch (error) {
        console.error(error);
    }
}

async function checkLotteryId1() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentLotteryId = (await contract.methods.lotteryId().call()).toString();
        const drawCountResult1 = document.getElementById("drawCountResult1");
        drawCountResult1.textContent = `Total: ${parseInt(currentLotteryId) - 1}`;
    } catch (error) {
        console.error(error);
    }
}
async function checkLotteryId2() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentLotteryId = (await contract.methods.lotteryId().call()).toString();
        const drawCountResult2 = document.getElementById("drawCountResult2");
        drawCountResult2.textContent = `Total: ${parseInt(currentLotteryId) - 1}`;
    } catch (error) {
        console.error(error);
    }
}
async function checkLotteryId3() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentLotteryId = (await contract.methods.lotteryId().call()).toString();
        const drawCountResult3 = document.getElementById("drawCountResult3");
        drawCountResult3.textContent = `Total: ${parseInt(currentLotteryId) - 1}`;
    } catch (error) {
        console.error(error);
    }
}
async function checkLotteryId4() {
    try {
        const web3 = new Web3('https://bsc-dataseed.binance.org');
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const currentLotteryId = (await contract.methods.lotteryId().call()).toString();
        const drawCountResult4 = document.getElementById("drawCountResult4");
        drawCountResult4.textContent = `Total: ${parseInt(currentLotteryId) - 1}`;
    } catch (error) {
        console.error(error);
    }
}

document.querySelector('.ticket-count-btn1').addEventListener('click', getTicketCount1);
document.querySelector('.draw-count-btn1').addEventListener('click', checkLotteryId1)

document.querySelector('.ticket-count-btn2').addEventListener('click', getTicketCount2);
document.querySelector('.draw-count-btn2').addEventListener('click', checkLotteryId2)

document.querySelector('.ticket-count-btn3').addEventListener('click', getTicketCount3);
document.querySelector('.draw-count-btn3').addEventListener('click', checkLotteryId3)

document.querySelector('.ticket-count-btn4').addEventListener('click', getTicketCount4);
document.querySelector('.draw-count-btn4').addEventListener('click', checkLotteryId4)