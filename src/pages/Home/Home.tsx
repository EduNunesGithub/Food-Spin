import Box from "@mui/material/Box";
import {
    useEffect,
    useState
} from "react";

import { DishDescription } from "../../components/DishDescription/DishDescription";
import { DishesWheel } from "../../components/DishesWheel/DishesWheel";
import { Header } from "../../components/Header/Header";

import { pxToRem } from "../../utils/unitConverter";

export interface Dish {
    color: string;
    description: string;
    image: string;
    price: number;
    title: string;
};

export const Home = () => {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        fetch("/JSON/data.json")
            .then(response => response.json())
            .then(data => setDishes(data))
            .catch(error => {
                setDishes([]);
            });
    }, []);

    useEffect(() => {
        const root = document.querySelector(":root");

        if (root === null) return;

        // @ts-ignore
        root.style.setProperty("--scroll-color", `${dishes[index]?.color ?? "#FF922C"}`);
    }, [dishes, index]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                margin: "auto",
                width: "100%",
                maxWidth: pxToRem(1080),
            }}
        >
            <Header />

            <Box
                sx={{
                    display: "flex",
                    gap: {
                        xs: pxToRem(75 - 75 * 0.2),
                        md: pxToRem(75)
                    },
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    flexGrow: 1,
                    alignItems: "center",
                    justifyContent: {
                        xs: "center",
                        lg: "space-between"
                    },
                    py: {
                        xs: pxToRem(128 - 128 * 0.2),
                        md: pxToRem(128)
                    },
                    width: "100%"
                }}
            >
                <DishDescription
                    dish={dishes[index]}
                    sx={{
                        flexShrink: 0
                    }}
                />

                <DishesWheel
                    dishes={dishes}
                    index={index}
                    setIndex={setIndex}
                />
            </Box>
        </Box>
    );
};