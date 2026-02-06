import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useTheme } from '../../contexts/ThemeContext';
import { cartScreenStyles } from './CartScreen.styles';
import CartItemRow from '../../components/CartItem/CartItemRow';

type CartScreenProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenProp>();
  const { cart, totalPrice } = useCart();
  const { colors, theme } = useTheme();
  const styles = cartScreenStyles;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: colors.card },
      headerTintColor: colors.text,
      title: 'My Cart',
    });
  }, [navigation, colors]);

  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <MaterialCommunityIcons 
        name="cart-off" 
        size={100} 
        color={theme === 'light' ? '#ccc' : '#444'} 
      />
      <Text style={[styles.emptyText, { color: colors.text }]}>Your cart is empty.</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={cart.length === 0 ? styles.centerEmpty : null}
        ListEmptyComponent={renderEmptyCart}
        renderItem={({ item }) => <CartItemRow item={item} />}
      />
      
      {cart.length > 0 && (
        <View style={[styles.footer, { borderTopColor: colors.border, backgroundColor: colors.card }]}>
          <View style={styles.totalRow}>
            <Text style={[styles.totalLabel, { color: colors.text }]}>Total:</Text>
            <Text style={[styles.totalPrice, { color: colors.text }]}>₱{totalPrice}</Text>
          </View>
          <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
        </View>
      )}
    </View>
  );
};

export default CartScreen;