import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import persian from "dayjs/locale/fa"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: NodeJS.Timeout;
    return function (...args: Parameters<T>): ReturnType<T> {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
        return undefined as ReturnType<T>;
    }  as T;
}

export function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({length}, (_, index) => index + start);
}

export function getTimestamp(date: string | Date) {
    return dayjs(date).locale(persian).fromNow();
}


interface Options {
  url?: string;
  params?: Record<string, string | null | undefined>;
  hash?: string | null | undefined;
}

/**
 * Builds a URL with the given options.
 * @param options - The options object containing the URL, query parameters, and hash.
 * @returns The constructed URL as a string.
 */
export function buildURL(options: Options): string {
  // Use the current URL if no URL is provided
  let url = options.url || window.location.href;

  // If the URL starts with '/', consider it a path relative to the current URL
  if (url.startsWith("/")) {
    url = new URL(window.location.origin + url).href;
  }
  // Parse the URL
  const urlObj = new URL(url);

  // Set query parameters
  if (options.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== null && value !== undefined) {
        urlObj.searchParams.set(key, value);
      } else {
        urlObj.searchParams.delete(key);
      }
    }
  }

  // Set the hash
  if (options.hash !== null && options.hash !== undefined) {
    urlObj.hash = options.hash;
  } else {
    urlObj.hash = "";
  }

  // Return the updated URL
  return urlObj.toString();
}