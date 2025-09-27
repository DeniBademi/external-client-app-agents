// import WelcomeDynamic from '@/components/welcome-dynamic';
import { APP_CONFIG_DEFAULTS } from '@/app-config';
import EmbedPopupAgentClient from '@/components/embed-popup/agent-client';
import { ApplyThemeScript } from '@/components/theme-toggle';

export default function Page() {
  return (
    <div className="bg-background">
      <ApplyThemeScript />
      {/* <WelcomeDynamic /> */}
      {/* Render the popup content directly on the main page */}
      <div className="px-4 mx-auto flex min-h-screen max-w-prose flex-col justify-center py-4 md:py-20">
        <EmbedPopupAgentClient appConfig={APP_CONFIG_DEFAULTS} />
      </div>
    </div>
  );
}
