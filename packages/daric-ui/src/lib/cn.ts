import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge class names and resolve Tailwind conflicts. Used by every primitive. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
