import React, { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import CloudPartyMeeting from './components/CloudPartyMeeting';

const queryClient = new QueryClient();

const MonitoringPage = () => {
  const [playerInstance, setPlayerInstance] = useState(null);

  useEffect(() => {
    const initializePlayer = async () => {
      if (typeof window.EZUIKit === 'undefined') {
        console.error('EZUIKit is not loaded');
        return;
      }

      try {
        const accessToken = 'at.50mffmbj9szcr3o824fjgas25n41r7cw-8s3a15x98u-0pbpnp3-wqddrxwkr';
        const url = 'ezopen://open.ys7.com/J76228367/1.hd.live';

        const player = new window.EZUIKit.EZUIKitPlayer({
          id: 'ezuikit-player',
          url: url,
          accessToken: accessToken,
          width: 1200,
          height: 800,
        });

        setPlayerInstance(player);

        // 添加日志以便调试
        console.log('Player initialized:', player);
      } catch (error) {
        console.error('Error initializing player:', error);
      }
    };

    initializePlayer();

    return () => {
      if (playerInstance) {
        playerInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>监控页面</h2>
      <div id="ezuikit-player" style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/cloud-party-meeting" element={<CloudPartyMeeting />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
