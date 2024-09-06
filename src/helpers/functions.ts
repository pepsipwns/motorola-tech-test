import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// cn = ClassNames (Tailwind merge + clsx)

export const classMerge = (...classes: string[]) => twMerge(clsx(classes));
