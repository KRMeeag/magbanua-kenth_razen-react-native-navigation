import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useTheme } from '../../contexts/ThemeContext';
import { checkoutScreenStyles } from './CheckoutScreen.styles';

type CheckoutScreenProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

const CheckoutScreen = () => {
  const navigation = useNavigation<CheckoutScreenProp>();
  const { cart, totalPrice, clearCart } = useCart();
  const { colors } = useTheme();
  const styles = checkoutScreenStyles;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Checkout',
      headerStyle: { backgroundColor: colors.card },
      headerTintColor: colors.text,
    });
  }, [navigation, colors]);

  const handleCheckout = () => {
    Alert.alert(
      "Success",
      "Payment Received! Thank you for shopping.",
      [
        {
          text: "OK",
          onPress: () => {
            clearCart();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }
        }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      {/* 2. Visual: Receipt Card Container */}
      <View style={[styles.receiptCard, { backgroundColor: colors.card }]}>
        <View style={styles.receiptHeader}>
          <Text style={[styles.logoText, { color: colors.text }]}>STORE RECEIPT</Text>
          <Text style={{ color: colors.text, opacity: 0.6 }}>One more step!</Text>
        </View>

        {/* Dashed Divider */}
        <View style={[styles.divider, { borderColor: colors.border }]} />

        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={[styles.itemText, { color: colors.text }]}>
                {item.name} <Text style={{ fontSize: 12, opacity: 0.7 }}>x{item.quantity}</Text>
              </Text>
              <Text style={[styles.priceText, { color: colors.text }]}>
                ₱{item.price * item.quantity}
              </Text>
            </View>
          )}
        />

        <View style={[styles.divider, { borderColor: colors.border }]} />

        <View style={styles.totalContainer}>
          <View style={styles.row}>
            <Text style={[styles.totalLabel, { color: colors.text }]}>GRAND TOTAL</Text>
            <Text style={[styles.grandTotal, { color: colors.text }]}>₱{totalPrice}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title={`Pay ₱${totalPrice}`} 
          onPress={handleCheckout} 
          disabled={cart.length === 0} 
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;