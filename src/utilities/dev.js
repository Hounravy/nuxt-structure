export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () =>
  isDebug() ? 'http://localhost:3000' : process?.env?.NEXT_PUBLIC_API_URL;

export const getVideoUrl = () => '';

export const getCMSDomain = () =>
  process?.env?.NUXT_PUBLIC_CMS_URL || '';

export const getGAID = () => process?.env?.NUXT_PUBLIC_GA_ID || '';

export const getPlayLink = () => '';

export const getMsmId = () => process?.env?.NUXT_PUBLIC_MSM_ID || '';