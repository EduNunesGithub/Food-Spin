import Box from "@mui/material/Box";
import {
    useEffect,
    useRef,
    useState,
} from "react";

import { AspectRatio } from "./DishesWheel";
import { Dish } from "../../pages/Home/Home";

import { pxToRem } from "../../utils/unitConverter";

import decoration from "/SVG/spin-background.svg";

type WheelItem = {
    dish: Dish;
    rotation: number;
    x: number;
    y: number;
};

type WheelProps = {
    angularDistance: number;
    aspectRatio: AspectRatio;
    dishes: Dish[];
    index: number;
};

export const Wheel = ({
    angularDistance = 45,
    aspectRatio = { width: 660, height: 480 },
    dishes = [],
    index = 0
}: WheelProps) => {
    const [cullingAngle, setCullingAngle] = useState<number>(135);
    const [wheelItems, setWheelItems] = useState<WheelItem[]>([]);
    const [wheelSize, setWheelSize] = useState<number>(0);

    const wheel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = wheel.current;

        if (element === null) return;

        const observer = new ResizeObserver((callback) => {
            setWheelSize(callback[0]?.contentRect.width ?? 0);
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const dishesAux: WheelItem[] = [];

        dishes.reduce((angle, item) => {
            const x = Math.cos(angle * Math.PI / 180);
            const y = Math.sin(angle * Math.PI / 180);

            dishesAux.push({
                dish: item,
                rotation: angle,
                x: x,
                y: y
            });

            return angle + angularDistance;
        }, 0);

        setWheelItems(dishesAux);
    }, [dishes]);

    return (
        <Box
            sx={{
                background: `${dishes[index]?.color ?? "#FF922C"}40`,
                backgroundImage: `url(${decoration})`,
                backgroundPositionX: "center",
                backgroundPositionY: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: `${100 * 560 / 1180}% ${100 * 280 / 1180}%`,
                position: "absolute",
                bottom: `${100 * 150 / aspectRatio.height}%`,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: -100,
                pointerEvents: "none",
                transitionDuration: "0.4s",
                transitionProperty: "background",
                transitionTimingFunction: "ease-in-out",
                aspectRatio: "1 / 1",
                width: `${100 * 1180 / aspectRatio.width}%`,
            }}
        >
            <Box
                ref={wheel}
                sx={{
                    transform: `rotate(${- index * angularDistance}deg)`,
                    borderRadius: "50%",
                    marginBottom: pxToRem(- wheelSize / 2),
                    transitionDuration: '0.4s',
                    transitionProperty: "transform",
                    transitionTimingFunction: "ease-in-out",
                    width: `${100 * 560 / 1180}%`,
                    height: `${100 * 560 / 1180}%`
                }}
            >
                {wheelItems.map((item, mapIndex) => {
                    if (
                        item.rotation >= cullingAngle + index * angularDistance ||
                        item.rotation <= - cullingAngle + index * angularDistance
                    ) return null;

                    return (
                        <Box
                            key={mapIndex}
                            sx={{
                                backgroundColor: item.dish.color ?? "#FF922C",
                                backgroundImage: `url(${item.dish.image})`,
                                backgroundPosition: "center",
                                backgroundSize: `105% 105%`,
                                position: "absolute",
                                top: pxToRem((wheelSize / 2) - item.x * (wheelSize / 2)),
                                left: pxToRem((wheelSize / 2) + item.y * (wheelSize / 2)),
                                transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
                                borderRadius: "50%",
                                width: `${100 * 100 / 560}%`,
                                height: `${100 * 100 / 560}%`
                            }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};