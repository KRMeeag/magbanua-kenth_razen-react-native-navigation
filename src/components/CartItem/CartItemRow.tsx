import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartItem } from '../../types'; 
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { cartItemRowStyles } from './CartItem.styles';

interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { colors } = useTheme();
  const { updateQuantity } = useCart();
  const styles = cartItemRowStyles;

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>          
      <View style={{ flex: 1 }}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={{ color: colors.text }}>
          ₱{item.price} x {item.quantity}
        </Text>
        <Text style={{ color: colors.primary, fontWeight: 'bold', marginTop: 4 }}>
          Subtotal: ₱{item.price * item.quantity}
        </Text>
      </View>
      
      <View style={styles.controls}>
        <Pressable 
          onPress={() => updateQuantity(item.id, 'decrease')} 
          style={({ pressed }) => [
            styles.ctrlBtn,
            { opacity: pressed ? 0.5 : 1 }
          ]}
        >
          <MaterialCommunityIcons name="minus" size={20} color={colors.text} />
        </Pressable>
        
        <Text style={[styles.qty, { color: colors.text }]}>{item.quantity}</Text>
        
        <Pressable 
          onPress={() => updateQuantity(item.id, 'increase')} 
          style={({ pressed }) => [
            styles.ctrlBtn,
            { opacity: pressed ? 0.5 : 1 }
          ]}
        >
          <MaterialCommunityIcons name="plus" size={20} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
};