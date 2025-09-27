import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'DenixLabs',
  pageTitle: 'LiveKit Embed',
  pageDescription: 'A web embed connected to an agent, built with LiveKit',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/denixlabs-logo.svg',
  accent: '#002cf2',
  logoDark: '/denixlabs-logo-dark.svg',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',
};
