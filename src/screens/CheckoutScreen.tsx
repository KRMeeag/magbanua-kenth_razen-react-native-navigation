import React from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

type CheckoutScreenProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

const CheckoutScreen = () => {
  const navigation = useNavigation<CheckoutScreenProp>();
  const { cart, totalPrice, clearCart } = useCart();
  const { colors } = useTheme();

  const handleCheckout = () => {
    Alert.alert(
      "Success",
      "Checkout successful",
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
      <Text style={[styles.header, { color: colors.text }]}>Order Summary</Text>
      
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={{ color: colors.text, flex: 1 }}>{item.name} x {item.quantity}</Text>
            <Text style={{ color: colors.text, fontWeight: 'bold' }}>${item.price * item.quantity}</Text>
          </View>
        )}
      />
      
      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <View style={styles.row}>
          <Text style={[styles.total, { color: colors.text }]}>Grand Total:</Text>
          <Text style={[styles.total, { color: colors.text }]}>${totalPrice}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Checkout" onPress={handleCheckout} disabled={cart.length === 0} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  footer: { marginTop: 20, paddingTop: 10, borderTopWidth: 1 },
  total: { fontSize: 18, fontWeight: 'bold' }
});

export default CheckoutScreen;