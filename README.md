# swap-auto
## Puppeteer Web Scraping and Swapping Script

This is a Puppeteer script that automates web scraping and swapping functionality on a website. It performs the following actions:

1. Selecting the Chain ID
2. Providing No. of Token to swap to
3. Providing Tokens Name to swap from and to
4. Selecting Route to perform a swap

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone this repository or download the code files.

2. Install the dependencies by running the following command in the project directory:

   ```
   npm install
   ```

3. Run the script using the following command:

   ```
   node index.js
   ```

4. The script will launch a headless Chrome browser and perform the web scraping and swapping actions. Make sure you have a stable internet connection.

## Script Actions

### 1. Selecting the Chain ID

- The script navigates to the target website.
- It selects the desired Chain ID by providing the required input.

### 2. Providing No. of Token to swap to

- The script enters the no. of token involved in the swapping process.

### 3. Providing Tokens Name to swap from and to

- The script selects the Tokens name from the dropdown menus.
- It selects the Tokens name from which user wants to swap to.

### 3. Selecting Route Information

- The script selects the route information required for swapping.
- It interacts with the relevant UI elements to choose the desired route.

## Customization

- Modify the script code in `index.js` to suit your specific web scraping and swapping requirements.
- Update the ChainID, sellAmt, or interactions based on requirements.