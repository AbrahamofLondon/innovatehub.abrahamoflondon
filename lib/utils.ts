// lib/utils.ts

/**
 * Environment variable keys for venture URLs.
 *
 * NOTE:
 * - These are the actual environment variable NAMES.
 * - Values are expected to be full URLs (e.g. "https://alomarada.com").
 */
export const ENV_KEYS = {
  ALOMARADA_URL: "NEXT_PUBLIC_ALOMARADA_URL",
  ENDURELUXE_URL: "NEXT_PUBLIC_ENDURELUXE_URL",
  INNOVATEHUB_URL: "NEXT_PUBLIC_INNOVATEHUB_URL",
  INNOVATEHUB_ALT_URL: "NEXT_PUBLIC_INNOVATEHUB_ALT_URL",
} as const;

export type EnvKeyName = (typeof ENV_KEYS)[keyof typeof ENV_KEYS];

/**
 * Safely picks the first available environment variable URL or returns default.
 *
 * Usage:
 *   pickEnvUrl(
 *     [ENV_KEYS.INNOVATEHUB_URL, ENV_KEYS.INNOVATEHUB_ALT_URL],
 *     "https://innovatehub.abrahamoflondon.org"
 *   )
 */
export function pickEnvUrl(keys: string[], defaultUrl: string): string {
  for (const key of keys) {
    const value = process.env[key];
    if (value && typeof value === "string" && value.trim() !== "") {
      return value.trim();
    }
  }
  return defaultUrl;
}

/**
 * Simple environment variable getter with fallback.
 *
 * For NEXT_PUBLIC_* keys, this is safe on both server and client in Next.js.
 */
export function getEnv(key: string, defaultValue: string = ""): string {
  const value = process.env[key];
  if (typeof value === "string" && value.trim() !== "") {
    return value.trim();
  }
  return defaultValue;
}

/**
 * Type-safe environment variable access for ventures.
 *
 * Usage:
 *   const alomaradaUrl = getVentureUrl(
 *     "ALOMARADA_URL",
 *     "https://alomarada.com"
 *   );
 */
export function getVentureUrl(
  ventureKey: keyof typeof ENV_KEYS,
  defaultValue: string
): string {
  const envVarName = ENV_KEYS[ventureKey];
  return getEnv(envVarName, defaultValue);
}