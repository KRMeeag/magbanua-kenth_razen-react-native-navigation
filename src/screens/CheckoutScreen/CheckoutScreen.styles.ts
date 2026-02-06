import { StyleSheet } from "react-native";

export const checkoutScreenStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
  },
  
  receiptCard: {
    flex: 1,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  receiptHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '900', 
    letterSpacing: 2,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 12,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
  },
  
  divider: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    marginVertical: 15,
    opacity: 0.5,
  },
  totalContainer: {
    marginTop: 5,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  grandTotal: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  footer: {
    paddingBottom: 40,
  }
});