import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// `cn` function: combines multiple class names intelligently
export function cn(...inputs: ClassValue[]) {
  // clsx: joins class names, ignores falsy values (undefined, null, false)
  // twMerge: merges Tailwind classes, removing duplicates & conflicts
  return twMerge(clsx(inputs))
}
