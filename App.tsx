import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { CartProvider } from './src/contexts/CartContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <CartProvider>
          <AppNavigator />
        </CartProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}