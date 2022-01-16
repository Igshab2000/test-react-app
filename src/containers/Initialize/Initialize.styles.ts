import { stylesheet } from "typestyle";

export const initializeStyle = stylesheet({
    wrapperContent: {
        width: '424px',
        background: "#FFFFFF",
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        height: 'calc(100vh - 112px)',
    },

    content: {
        paddingTop: '36px',
	    paddingLeft: '48px',
	    paddingRight: '48px',
	    paddingBottom: '24px',
    },

    linkStyle: {
        marginTop: "18px",
        display: "flex",
        flexDirection: "row",
    }
});

export const inputFieldStyle = {
    width: "100%",
    marginBottom: "12px",
};

export const buttonStyle = {
    width: "100%",
    marginTop: "12px",
    height: "36px",
};