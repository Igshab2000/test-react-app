import { stylesheet } from "typestyle";

export const inputFieldStyle = stylesheet({
    fieldStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    inputContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    errorMessage: {
        color: '#EE4141',
        fontSize: '15px',
        fontWeight: 'normal',
    },

    wrapperInput: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export const passwordFieldIconStyle = {
    fill: "#6879BB",
    position: "absolute",
    padding: "5px 16px",
    cursor: "pointer",
    width: "12px",
    height: "12px",
} as const;