import React from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import { create } from "zustand";
import { Card } from "react-native-paper";
import { GiTwoCoins } from "react-icons/gi";
import { useStore } from "@/stateManagement";

// Zustand store for managing coins
// const useStore = create((set) => ({
  
// }));

const redeemableItems = [
  { id: "1", name: "Gift Card", cost: 200 },
  { id: "2", name: "Discount Coupon", cost: 150 },
  { id: "3", name: "T-Shirt", cost: 300 },
];

const Redeem = () => {
  const { coins, redeemItem } = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.coinText}><GiTwoCoins color="#795BF6"/> Coins: {coins}</Text>

      <FlatList
        data={redeemableItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.itemText}>
                {item.name} - {item.cost} Coins
              </Text>
              <Button title="Redeem" onPress={() => redeemItem(item.cost)} disabled={item.cost > coins ? true : false} />
            </View>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "black" },
  coinText: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color:'white' },
  card: { padding: 15, marginVertical: 8, backgroundColor: "#fff", borderRadius: 10 },
  cardContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  itemText: { fontSize: 18 },
});

export default Redeem;
