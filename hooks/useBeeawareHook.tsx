import { useContext } from "react";
import { BeeawareContext } from "@/context/BeeawareContext";

export const useBeeawareHook = () => {
    const context = useContext(BeeawareContext);
    return context;
}
