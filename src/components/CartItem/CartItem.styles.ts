import { StyleSheet } from "react-native";

export const cartItemRowStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
  },
  name: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  controls: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  ctrlBtn: { padding: 8, borderWidth: 1, borderColor: "#ccc", borderRadius: 8 },
  qty: { fontSize: 16, marginHorizontal: 12, fontWeight: "bold" },
});
