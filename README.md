-Project Name: SmartLC - Smart Letter of Credit on Blockchain

-Team Members:

Trần Thị Linh Chi

Lê Diệu Linh

Lê Hữu Sơn

Lê Ngọc Minh

-Representative Name and Email:

Lê Ngọc Minh - minhle.06666666@gmail.com

-Project Description:

SmartLC is a project that builds an intelligent Letter of Credit (L/C) management system based on the Stacks blockchain. It uses Clarity smart contract language and integrates with Stacks SDK libraries.

-Objectives:

Create and manage LC contracts on the Stacks blockchain.

Manage LC contract statuses (Created, Verified, Document Submission, Payment, LC Closure).

Build APIs for backend and smart contract communication.

Manage document data using hash (SHA256).

-Project Structure:

<img width="732" height="207" alt="Image" src="https://github.com/user-attachments/assets/b06c4f70-f3c4-48ee-b050-3c8b7fff427b" />

-Installation:

git clone https://github.com/Minlee252/SmartLC.git
cd pj-smartLC
npm install

-Usage:

+Deploy Clarity Smart Contract:

Example of deploying contract to testnet:

clarinet deploy

+Interact with Smart Contract via API:

npm run start

Then visit: http://localhost:5173/

-Main Components:

contracts/: LC logic written in Clarity.

api/: NodeJS backend using Stacks.js to interact with the blockchain.

scripts/: Scripts to support build/deploy/test contracts.

-Technologies Used:

Stacks Blockchain & Clarity Smart Contract

Node.js & Stacks.js SDK

Clarinet: Clarity development environment.

-Project Evaluation Criteria:

SmartLC is currently in the development phase. The core backend logic and smart contracts have been built. The UI prototype is under development and not yet fully functional. The Stacks Wallet is integrated via Leather Wallet, supporting experimental operations with smart contracts.

To meet the evaluation criteria, the project commits to fulfilling the following:

1. Technical Quality

Smart contracts written in Clarity have been logic-tested and successfully deployed to the testnet.

Backend API is under development, currently at the stage of testing LC creation, status updates, and document verification; advanced features and stable operations will be completed in future phases.

2. Prototype/UI

A simple web interface connected directly to the Stacks wallet.

Functions demonstrating the LC workflow: create LC, verify, update documents, complete payment.

The UI is still in development, with business functions being added and refined.

3. Creativity and Scalability

The idea of applying LC on blockchain helps reduce intermediary costs and increase transparency.

The system is designed openly, allowing for expansion to integrate various types of documents (bill of lading, insurance, customs documents).

4. Accompanying Documentation

Public GitHub repository with complete source code.

README file detailing the project idea, main functions, and installation guide.

5. Stacks Wallet Addresses

Stacks wallet addresses (STX Address) will be provided below.The development team commits to providing complete wallet information in this README file.

-Deployment Proof Images:

Buyer's wallet address: ST2PRNFXSYNDK0HQXXQ1SQAQWNEVVFV0W00QW28TC.

Seller's wallet address: ST28Z6NNES2H7406W5WZY8XNPASFSMHH8K0DZM7BZ.

Below are screenshots as proof of actions performed on the Stacks network:

Seller submits LC creation request (submit):

<img width="1435" height="630" alt="Image" src="https://github.com/user-attachments/assets/3400ee1e-1a83-4fac-b13f-74e172693a96" />

Seller submits documents (submit document):

<img width="1434" height="627" alt="Image" src="https://github.com/user-attachments/assets/9ceb6e40-dc09-4dd8-b492-833177dcc54c" />

Buyer confirms delivery (confirm delivery):

<img width="1434" height="632" alt="Image" src="https://github.com/user-attachments/assets/0bda0c9c-b115-4da8-a301-f3cdf30d72e9" />

Buyer cancel delivery (cancel delivery):

<img width="1446" height="630" alt="Image" src="https://github.com/user-attachments/assets/359f7af3-3f83-4906-a62b-7b0975dfe0a0" />
