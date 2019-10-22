import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    form: {
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "#ddd",
        width: "100%",
        padding: 12,
    },
    field: {
        marginVertical: 8
    },
    textField: {
        color: "#222",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12,
    },
    inputField: {
        color: "#555"
    }
});