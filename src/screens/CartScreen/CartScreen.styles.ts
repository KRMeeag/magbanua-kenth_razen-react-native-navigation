import { StyleSheet } from "react-native";

export const cartScreenStyles = StyleSheet.create({
  container: { flex: 1 },
  card: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    marginHorizontal: 16,
    marginTop: 10,
    borderWidth: 1, 
    borderRadius: 12,
  },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },

  controls: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
  ctrlBtn: { padding: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  qty: { fontSize: 16, marginHorizontal: 12, fontWeight: 'bold' },

  footer: { 
    padding: 20, 
    borderTopWidth: 1, 
    paddingBottom: 40, 
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: { fontSize: 18, fontWeight: '500' },
  totalPrice: { fontSize: 20, fontWeight: 'bold' },

  centerEmpty: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.6,
  },
});