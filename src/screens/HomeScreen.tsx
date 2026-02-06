import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: 100 },
  { id: '2', name: 'Smart Watch', price: 250 },
  { id: '3', name: 'Gaming Mouse', price: 50 },
  { id: '4', name: 'Mechanical Keyboard', price: 120 },
];

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const { addToCart } = useCart();
  const { colors, toggleTheme, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Button title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`} onPress={toggleTheme} />
        <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      </View>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View>
              <Text style={[styles.productName, { color: colors.text }]}>{item.name}</Text>
              <Text style={[styles.productPrice, { color: colors.text }]}>${item.price}</Text>
            </View>
            <TouchableOpacity 
              style={[styles.addButton, { backgroundColor: colors.primary }]} 
              onPress={() => addToCart(item)}
            >
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' },
  card: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 16, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderRadius: 8 
  },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 14, marginTop: 4 },
  addButton: { padding: 10, borderRadius: 5 },
  btnText: { color: 'white', fontWeight: 'bold' }
});

export default HomeScreen;