import { multichain } from 'multichain-wallet-react-native';
import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';


// State to store wallet info
const [walletInfo, setWalletInfo] = useState<string | null>(null);

const generateWallet = async () => {
  try {
    // Assuming createWallet function needs a password, you can adjust parameters as needed
    const wallet = await multichain.createWallet('your_secure_password');
    // For demonstration, converting the response to a string to display
    // Adjust according to what information you want to show
    setWalletInfo(JSON.stringify(wallet, null, 2));
  } catch (error) {
    console.error(error);
    setWalletInfo('Failed to create wallet.');
  }
}; 
console.log(walletInfo)
const CreateWalletBtn = () => {
  

  return (
    <View>
      <Button
        title="Create Wallet"
        onPress={generateWallet}
        color="#007AFF" // You can customize the button color here
      />
    </View>
  );
};

export default CreateWalletBtn;
