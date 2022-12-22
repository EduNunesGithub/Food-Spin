import GlobalStyles from "@mui/material/GlobalStyles";

import { pxToRem } from "../../utils/unitConverter";

export const GlobalStylesComponent = () => {
    return (
        <GlobalStyles
            styles={(theme) => ({
                "*": {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    overflowWrap: "break-word",
                    minWidth: 0
                },
                "body": {
                    overflowX: "hidden",
                    overflowY: "scroll",
                    minWidth: "100vw",
                },
                [theme.breakpoints.down("sm")]: {
                    "html": {
                        fontSize: `${(16 / theme.breakpoints.values.sm) * 100}vw`
                    }
                }
            })}
        />
    );
};