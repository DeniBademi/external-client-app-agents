import { ApplyThemeScript } from '@/components/theme-toggle';
import { APP_CONFIG_DEFAULTS } from '@/app-config';
import EmbedPopupAgentClient from '@/components/embed-popup/agent-client';

export default function Page() {
  return (
    <div className="bg-background">
      <ApplyThemeScript />
      <div className="mx-auto flex min-h-screen max-w-prose flex-col justify-center py-4 md:py-20 px-4">
        <EmbedPopupAgentClient appConfig={APP_CONFIG_DEFAULTS} />
      </div>
    </div>
  );
}


