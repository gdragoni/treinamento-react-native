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
        width: "100%",
        padding: 12,
    },
    field: {
        justifyContent: "space-between",
        minHeight: 40,
        alignItems: "baseline",
        flexDirection: "row",
        marginVertical: 8,
        flexWrap: "wrap",
        borderBottomWidth: 1,
    },
    textField: {
        color: "#222",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 12,
        marginBottom: 12,
    },
    inputField: {
        color: "#555",
        minWidth: 100,
        textAlign: "right",
        maxWidth: "auto",
    }
});