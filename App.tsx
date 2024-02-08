// Import React and necessary React Native components
import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

// Import your library
import { multichain } from 'multichain-wallet-react-native';

const App = () => {
  // State to store wallet info and loading state
  const [walletInfo, setWalletInfo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateWallet = async () => {
    setIsLoading(true); // Start loading

    try {
      console.log('About to generate wallet...');
      const memonic = [
        'cream',   'frozen', 
        'weather', 'group',  
        'track',   'parrot', 
        'stove',   'just',   
        'license', 'collect',
        'mandate', 'arrest'  
      ]
      const memonic2 = memonic.join(' ')
      const password = "kash"
      const wallet = await multichain.getAddressFromMnemonic(memonic2)
      console.log('Generated wallet:', wallet);

      // For demonstration, converting the response to a string to display
      setWalletInfo(JSON.stringify(wallet, null, 2));
    } catch (error) {
      console.error('Error generating wallet:', error);
      setWalletInfo('Failed to create wallet.');
    }

    setIsLoading(false); // Stop loading
  };

  return (
    <View style={styles.container}>
      <Button title="Generate Wallet" onPress={generateWallet} disabled={isLoading} />
      {isLoading && <ActivityIndicator size="large" />}
      {walletInfo && <Text style={styles.walletInfo}>{walletInfo}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  walletInfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default App;