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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePlayer = async () => {
      if (typeof window.EZUIKit === 'undefined') {
        console.error('EZUIKit is not loaded');
        setError('EZUIKit 未能正确加载，请检查网络连接或刷新页面重试。');
        setLoading(false);
        return;
      }

      try {
        console.log('正在初始化 EZUIKit 播放器...');
        const accessToken = 'at.50mffmbj9szcr3o824fjgas25n41r7cw-8s3a15x98u-0pbpnp3-wqddrxwkr';
        const url = 'ezopen://open.ys7.com/J76228367/1.hd.live';

        const player = new window.EZUIKit.EZUIKitPlayer({
          id: 'ezuikit-player',
          url: url,
          accessToken: accessToken,
          width: 600,
          height: 400,
        });

        setPlayerInstance(player);
        console.log('播放器初始化成功:', player);
        setLoading(false);
      } catch (error) {
        console.error('初始化播放器时出错:', error);
        setError(`初始化播放器时出错: ${error.message}`);
        setLoading(false);
      }
    };

    initializePlayer();

    return () => {
      if (playerInstance) {
        console.log('正在销毁播放器实例');
        playerInstance.destroy();
      }
    };
  }, []);

  if (loading) {
    return <div>正在加载监控画面，请稍候...</div>;
  }

  return (
    <div>
      <h2>监控页面</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
