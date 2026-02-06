import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

type CartScreenProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenProp>();
  const { cart, updateQuantity, totalPrice } = useCart();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={{ color: colors.text }}>Your cart is empty.</Text>}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
              <Text style={{ color: colors.text }}>
                Unit: ${item.price} | Subtotal: ${item.price * item.quantity}
              </Text>
            </View>
            
            <View style={styles.controls}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.ctrlBtn}>
                <Text style={[styles.ctrlText, { color: colors.text }]}>-</Text>
              </TouchableOpacity>
              
              <Text style={[styles.qty, { color: colors.text }]}>{item.quantity}</Text>
              
              <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.ctrlBtn}>
                <Text style={[styles.ctrlText, { color: colors.text }]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      
      {cart.length > 0 && (
        <View style={[styles.footer, { borderTopColor: colors.border }]}>
          <Text style={[styles.total, { color: colors.text }]}>Total: ${totalPrice}</Text>
          <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderRadius: 8 
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  controls: { flexDirection: 'row', alignItems: 'center' },
  ctrlBtn: { padding: 10 },
  ctrlText: { fontSize: 20, fontWeight: 'bold' },
  qty: { fontSize: 16, marginHorizontal: 10 },
  footer: { marginTop: 20, paddingTop: 20, borderTopWidth: 1 },
  total: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'right' },
});

export default CartScreen;