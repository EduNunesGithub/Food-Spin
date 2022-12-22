import { ShoppingBagOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { ButtonBase } from "@mui/material";
import Link from "@mui/material/Link";

import { pxToRem } from "../../utils/unitConverter";

import logo from "/SVG/logo.svg";

export const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                display: "flex",
                gap: {
                    xs: `${pxToRem(32 - 32 * 0.2)} ${pxToRem(170 - 170 * 0.2)}`,
                    md: `${pxToRem(32)} ${pxToRem(170)}`
                },
                flexWrap: "wrap",
                alignItems: "center",
                paddingTop: {
                    xs: pxToRem(48 - 48 * 0.2),
                    md: pxToRem(48)
                }
            }}
        >
            <Box
                alt="FoodSpin"
                component="img"
                src={logo}
                sx={{
                    objectFit: "cover",
                    width: {
                        xs: pxToRem(105 - 105 * 0.2),
                        md: pxToRem(105)
                    },
                    height: {
                        xs: pxToRem(27 - 27 * 0.2),
                        md: pxToRem(27)
                    }
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    gap: {
                        xs: pxToRem(60 - 60 * 0.2),
                        md: pxToRem(60),
                        lg: pxToRem(170)
                    },
                    flexGrow: 1,
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Box
                    component="nav"
                    sx={{
                        display: "flex",
                        gap: {
                            xs: pxToRem(60 - 60 * 0.2),
                            md: pxToRem(60)
                        },
                        alignItems: "center",
                        "a": {
                            color: "#333333",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: {
                                xs: pxToRem(14 - 14 * 0.2),
                                md: pxToRem(14)
                            },
                            fontWeight: 500,
                            lineHeight: {
                                xs: pxToRem(21 - 21 * 0.2),
                                md: pxToRem(21)
                            },
                            textDecoration: "none",
                            transitionDuration: "0.2s",
                            transitionProperty: "color",
                            transitionTimingFunction: "ease-in-out",
                            ":hover": {
                                color: "#33333380"
                            }
                        }
                    }}
                >
                    <Link
                        href="#"
                    >
                        Breakfast
                    </Link>

                    <Link
                        href="#"
                    >
                        Lunch
                    </Link>

                    <Link
                        href="#"
                    >
                        Dinner
                    </Link>
                </Box>

                <ButtonBase
                    sx={{
                        borderRadius: {
                            xs: pxToRem(4 - 4 * 0.2),
                            md: pxToRem(4)
                        },
                        marginLeft: "auto",
                        width: {
                            xs: pxToRem(24 - 24 * 0.2),
                            md: pxToRem(24)
                        },
                        height: {
                            xs: pxToRem(24 - 24 * 0.2),
                            md: pxToRem(24)
                        }
                    }}
                >
                    <ShoppingBagOutlined
                        sx={{
                            color: "#090909",
                            fontSize: {
                                xs: pxToRem(24 - 24 * 0.2),
                                md: pxToRem(24)
                            },
                            strokeWidth: {
                                xs: pxToRem(2 - 2 * 0.2),
                                md: pxToRem(2)
                            }
                        }}
                    />
                </ButtonBase>
            </Box>
        </Box>
    );
};