import React, { useState } from 'react';
import { Text, Pressable, View, Modal, Dimensions, Image } from "react-native";
import { productCardStyles } from "./ProductCard.styles";
import { useTheme } from "../../contexts/ThemeContext";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../types";

const { width } = Dimensions.get('window');

// CONFIGURATION
const GAP = 12;
const PADDING = 16;
const CARD_WIDTH = (width - (PADDING * 2) - GAP) / 2;

interface ProductInstanceProps {
  item: Product;
}

export default function ProductInstance({ item }: ProductInstanceProps) {
  const { colors } = useTheme();
  const { addToCart } = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const styles = productCardStyles;

  const handleAddToCart = () => {
    addToCart(item);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 1500);
  };

  return (
    <View style={[
      styles.card, 
      { 
        backgroundColor: colors.card, 
        borderColor: colors.border,
        width: CARD_WIDTH
      }
    ]}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.image} 
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={[styles.productName, { color: colors.text }]}>
            {item.name}
        </Text>
        <Text style={[styles.productPrice, { color: colors.text }]}>
            ₱{item.price}
        </Text>
      </View>
      
      <Pressable 
        onPress={handleAddToCart}
        style={({ pressed }) => [
          styles.addButton, 
          { 
            backgroundColor: colors.primary,
            opacity: pressed ? 0.7 : 1 // Visual feedback
          }
        ]} 
      >
        <Text style={styles.btnText}>Add to Cart</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.modalText, { color: colors.text }]}>
              ✅ Added {item.name} to cart!
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}