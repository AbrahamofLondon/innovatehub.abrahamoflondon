// lib/utils.ts

/**
 * Environment variable keys for venture URLs
 */
export const ENV_KEYS = {
  ALOMARADA_URL: 'NEXT_PUBLIC_ALOMARADA_URL',
  ENDURELUXE_URL: 'NEXT_PUBLIC_ENDURELUXE_URL', 
  INNOVATEHUB_URL: 'NEXT_PUBLIC_INNOVATEHUB_URL',
  INNOVATEHUB_ALT_URL: 'NEXT_PUBLIC_INNOVATEHUB_ALT_URL',
} as const;

/**
 * Safely picks the first available environment variable URL or returns default
 */
export function pickEnvUrl(keys: string[], defaultUrl: string): string {
  if (typeof window !== 'undefined') {
    // Client-side: just return default to avoid build issues
    return defaultUrl;
  }

  // Server-side: check environment variables
  for (const key of keys) {
    const value = process.env[key];
    if (value && typeof value === 'string' && value.trim() !== '') {
      return value.trim();
    }
  }
  return defaultUrl;
}

/**
 * Simple environment variable getter with fallback
 */
export function getEnv(key: string, defaultValue: string = ''): string {
  if (typeof window !== 'undefined') {
    return defaultValue;
  }
  return process.env[key] || defaultValue;
}

/**
 * Type-safe environment variable access for ventures
 */
export function getVentureUrl(
  ventureKey: keyof typeof ENV_KEYS, 
  defaultValue: string
): string {
  const key = ENV_KEYS[ventureKey];
  return getEnv(key, defaultValue);
}