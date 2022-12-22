import {
    ArrowDownwardRounded
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import {
    useEffect,
    useState
} from "react";

import { Wheel } from "./Wheel";

import { pxToRem } from "../../utils/unitConverter";

import { Dish } from "../../pages/Home/Home";

export type AspectRatio = {
    width: number;
    height: number;
};

type DishesWheelProps = {
    dishes: Dish[];
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
};

type Image = {
    "0": string;
    "1": string;
};

export const DishesWheel = ({
    dishes = [],
    index = 0,
    setIndex
}: DishesWheelProps) => {
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>({
        width: 660,
        height: 480
    });
    const [image, setImage] = useState<Image>({
        "0": "",
        "1": "",
    });
    const [imageIndex, setImageIndex] = useState<"0" | "1">("0");

    useEffect(() => {
        if (imageIndex === "0") {
            setImage({
                "0": image["0"],
                "1": dishes[index]?.image ?? ""
            });
            setImageIndex("1");

            return;
        } else {
            setImage({
                "0": dishes[index]?.image ?? "",
                "1": image["1"]
            });
            setImageIndex("0");

            return;
        };
    }, [dishes, index]);

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                aspectRatio: `${aspectRatio.width} / ${aspectRatio.height}`,
                width: "100%",
                maxWidth: pxToRem(660)
            }}
        >
            <ButtonBase
                aria-label="Rotate Left"
                onClick={() => {
                    if (index === dishes.length - 1) return;

                    setIndex(index + 1);
                }}
                sx={{
                    background: dishes[index]?.color ?? "#FF922C",
                    transform: "translateX(-50%)",
                    borderRadius: "50%",
                    marginLeft: `${100 * 50 / aspectRatio.width}%`,
                    transitionDuration: "0.4s",
                    transitionProperty: "background",
                    transitionTimingFunction: "ease-in-out",
                    aspectRatio: "1 / 1",
                    width: `${100 * 40 / aspectRatio.width}%`,
                    "svg": {
                        width: "60%",
                        height: "60%"
                    }
                }}
            >
                <ArrowDownwardRounded
                    sx={{
                        color: "#FFFFFF",
                        strokeWidth: pxToRem(2)
                    }}
                />
            </ButtonBase>

            <Box
                sx={{
                    background: "#FFFFFF",
                    position: "relative",
                    borderRadius: "50%",
                    transitionDuration: "0.4s",
                    transitionProperty: "background",
                    transitionTimingFunction: "linear",
                    aspectRatio: "1 / 1",
                    width: `${100 * 300 / aspectRatio.width}%`,
                    "::before": {
                        content: "''",
                        backgroundImage: `url(${image[0]})`,
                        backgroundPosition: "center",
                        backgroundSize: `105% 105%`,
                        opacity: imageIndex === "0" ? 1 : 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: "50%",
                        transitionDuration: "0.4s",
                        transitionProperty: "opacity",
                        transitionTimingFunction: "linear",
                        width: "100%",
                        height: "100%"
                    },
                    "::after": {
                        content: "''",
                        backgroundImage: `url(${image[1]})`,
                        backgroundPosition: "center",
                        backgroundSize: `105% 105%`,
                        opacity: imageIndex === "1" ? 1 : 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: "50%",
                        transitionDuration: "0.4s",
                        transitionProperty: "opacity",
                        transitionTimingFunction: "linear",
                        width: "100%",
                        height: "100%"
                    }
                }}
            />

            <ButtonBase
                aria-label="Rotate Right"
                onClick={() => {
                    if (index === 0) return;

                    setIndex(index - 1);
                }}
                sx={{
                    background: dishes[index]?.color ?? "#FF922C",
                    transform: "translateX(50%)",
                    borderRadius: "50%",
                    marginRight: `${100 * 50 / aspectRatio.width}%`,
                    transitionDuration: "0.4s",
                    transitionProperty: "background",
                    transitionTimingFunction: "ease-in-out",
                    aspectRatio: "1 / 1",
                    width: `${100 * 40 / aspectRatio.width}%`,
                    "svg": {
                        width: "60%",
                        height: "60%"
                    }
                }}
            >
                <ArrowDownwardRounded
                    sx={{
                        color: "#FFFFFF",
                        strokeWidth: pxToRem(2)
                    }}
                />
            </ButtonBase>

            <Wheel
                angularDistance={40}
                aspectRatio={aspectRatio}
                dishes={dishes}
                index={index}
            />
        </Box>
    );
};