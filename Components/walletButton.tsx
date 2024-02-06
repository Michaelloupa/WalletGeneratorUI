import React from 'react';
import { View, Button, Alert } from 'react-native';

const CreateWalletBtn = () => {
  const onButtonPress = () => {
    
  };

  return (
    <View>
      <Button
        title="Create Wallet"
        onPress={onButtonPress}
        color="#007AFF" // You can customize the button color here
      />
    </View>
  );
};

export default CreateWalletBtn;
