import { stylesheet } from "typestyle";

export const inputStyles = stylesheet({
    input: {
        background: '#FFFFFF',
        border: '1px solid #D6DCE9',
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "6px",
        paddingBottom: "6px",
        borderRadius: "4px",
        color: "#6879BB",
        outline: "none",
        width: "inherit",
        boxSizing: "border-box",
        lineHeight: "22px",

        $nest: {
            "&:hover": {
                color: '#415FD5',
                outline: '#415FD5'
            },

            "&:default": {
                color: '#CCCCCC',
            },
    
        },
    },
});

