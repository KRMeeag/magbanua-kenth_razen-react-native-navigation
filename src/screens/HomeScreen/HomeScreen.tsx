import React, { useLayoutEffect, useState, useMemo } from "react";
import {
  View,
  FlatList,
  Pressable, 
  TextInput,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../../types";
import { useTheme } from "../../contexts/ThemeContext";
import { homeScreenStyles } from "./HomeScreen.styles";
import { PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const { colors, toggleTheme, theme } = useTheme();
  const styles = homeScreenStyles;

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        // UPDATED: Theme Toggle Button
        <Pressable 
          onPress={toggleTheme} 
          style={({ pressed }) => ({ 
            marginRight: 10,
            opacity: pressed ? 0.5 : 1 
          })}
        >
          <MaterialCommunityIcons
            name={theme === "light" ? "weather-night" : "white-balance-sunny"}
            size={24}
            color={colors.text}
          />
        </Pressable>
      ),
      title: "TeKnowledge Online Store",
      headerStyle: { backgroundColor: colors.card },
      headerTintColor: colors.text,
    });
  }, [navigation, theme, colors, toggleTheme]);

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <MaterialCommunityIcons
        name="package-variant-closed"
        size={100}
        color={theme === "light" ? "#ccc" : "#444"}
      />
      <Text style={[styles.emptyText, { color: colors.text }]}>
        No products found for "{searchQuery}"
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <MaterialCommunityIcons
          name="magnify"
          size={20}
          color={colors.text}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search products..."
          placeholderTextColor={theme === "light" ? "#999" : "#666"}
          style={[styles.searchInput, { color: colors.text }]}
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>

      <FlatList
        key={filteredProducts.length === 0 ? "empty-list" : "grid-list"}
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={filteredProducts.length === 0 ? 1 : 2}
        columnWrapperStyle={
          filteredProducts.length === 0 ? undefined : styles.row
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: 100 },
          filteredProducts.length === 0 && {
            flex: 1,
            justifyContent: "center",
          },
        ]}
        ListEmptyComponent={renderEmptyState}
      />

      <Pressable
        onPress={() => navigation.navigate("Cart")}
        style={({ pressed }) => [
          styles.fab, 
          { 
            backgroundColor: colors.primary,
            opacity: pressed ? 0.8 : 1
          }
        ]}
      >
        <MaterialCommunityIcons name="cart-outline" size={28} color="white" />
      </Pressable>
    </View>
  );
};

export default HomeScreen;