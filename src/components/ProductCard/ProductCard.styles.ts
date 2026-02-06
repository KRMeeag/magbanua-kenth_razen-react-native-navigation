import { StyleSheet } from 'react-native';

export const productCardStyles = StyleSheet.create({
  card: {
    borderRadius: 12, 
    borderWidth: 1,
    marginBottom: 12, 
    overflow: 'hidden',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150, 
    backgroundColor: '#eee',
  },
  contentContainer: {
    padding: 10,
    flex: 1, 
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 18,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  addButton: {
    margin: 10,
    marginTop: 0,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center",
    fontWeight: "bold"
  }
});