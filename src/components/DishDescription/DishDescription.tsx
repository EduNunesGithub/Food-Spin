import {
    SxProps,
    Theme
} from "@mui/material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import { pxToRem } from "../../utils/unitConverter";

import { Dish } from "../../pages/Home/Home";

type DishDescriptionProps = {
    dish: Dish;
    sx?: SxProps<Theme> | undefined;
};

export const DishDescription = ({
    dish,
    sx
}: DishDescriptionProps) => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: pxToRem(345),
                height: "fit-content",
                ...sx
            }}
        >
            <Typography
                component="span"
                sx={{
                    color: dish?.color ?? "#FF922C",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                        xs: pxToRem(44 - 44 * 0.2),
                        md: pxToRem(44)
                    },
                    fontWeight: 600,
                    lineHeight: {
                        xs: pxToRem(66 - 66 * 0.2),
                        md: pxToRem(66)
                    },
                    letterSpacing: "normal",
                    transitionDuration: "0.4s",
                    transitionProperty: "color",
                    transitionTimingFunction: "ease-in-out"
                }}
            >
                ${dish?.price ?? 0}
            </Typography>

            <Typography
                component="h2"
                sx={{
                    color: "#333333",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                        xs: pxToRem(36 - 36 * 0.2),
                        md: pxToRem(36)
                    },
                    fontWeight: 500,
                    lineHeight: {
                        xs: pxToRem(50 - 50 * 0.2),
                        md: pxToRem(50)
                    },
                    letterSpacing: "normal"
                }}
            >
                {dish?.title ?? "..."}
            </Typography>

            <Typography
                component="p"
                sx={{
                    color: "#333333",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                        xs: pxToRem(13 - 13 * 0.2),
                        md: pxToRem(13)
                    },
                    fontWeight: 400,
                    lineHeight: {
                        xs: pxToRem(19.5 - 19.5 * 0.2),
                        md: pxToRem(19.5)
                    },
                    letterSpacing: "normal",
                    textTransform: "capitalize",
                    marginTop: {
                        xs: pxToRem(12 - 12 * 0.2),
                        md: pxToRem(12)
                    },
                    marginBottom: {
                        xs: pxToRem(28 - 28 * 0.2),
                        md: pxToRem(28)
                    }
                }}
            >
                {dish?.description ?? "..."}
            </Typography>

            <ButtonBase
                sx={{
                    background: dish?.color ?? "#FF922C",
                    color: "#FFFFFF",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                        xs: pxToRem(13 - 13 * 0.2),
                        md: pxToRem(13)
                    },
                    fontWeight: 700,
                    lineHeight: {
                        xs: pxToRem(19.5 - 19.5 * 0.2),
                        md: pxToRem(19.5)
                    },
                    borderRadius: pxToRem(100),
                    boxShadow: {
                        xs: `0 ${pxToRem(20 - 20 * 0.2)} ${pxToRem(40 - 40 * 0.2)} 0 ${dish?.color === undefined ? "#FF922C40" : dish?.color + "40"}`,
                        md: `0 ${pxToRem(20)} ${pxToRem(40)} 0 ${dish?.color === undefined ? "#FF922C40" : dish?.color + "40"}`
                    },
                    px: {
                        xs: pxToRem(42 - 42 * 0.2),
                        md: pxToRem(42)
                    },
                    py: {
                        xs: pxToRem(14 - 14 * 0.2),
                        md: pxToRem(14)
                    },
                    transitionDuration: "0.4s",
                    transitionProperty: "background, box-shadow",
                    transitionTimingFunction: "ease-in-out"
                }}
            >
                ORDER NOW
            </ButtonBase>
        </Box>
    );
};