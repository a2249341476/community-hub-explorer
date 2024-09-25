import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CloudPartyMeeting from './components/CloudPartyMeeting'; // 云党会页面
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

// 海康RTSP流的监控页面
const HikvisionMonitoringPage = () => {
  useEffect(() => {
    const rtsp = 'rtsp://101.69.216.133:8604/EUrl/PKGWPGA?params=eyJwcm90b2NvbCI6InJ0c3AiLCJleHBhbmQiOiJzdHJlYW1mb3JtPXJ0cCIsInVzZXJJZCI6IuWMluWtpuWTgeivleWJguS7k+W6kzQiLCJ0IjoxLCJhIjoiZWQ2MDViYTQ3N2VmNDI2NmFhYjgxNTM4ZTA3MTVjMzl8MXwwfDF8b3Blbl9hcGkifQ==';
    const player = new JSMpeg.Player(`ws://localhost:9999/rtsp?url=${btoa(rtsp)}`, {
      canvas: document.getElementById('hikvision-canvas'),
    });

    return () => {
      player.destroy(); // 清理播放器实例
    };
  }, []);

  return (
    <div>
      <h2>海康摄像头画面</h2>
      <canvas id="hikvision-canvas" style={{ width: '600px', height: '400px' }}></canvas>
    </div>
  );
};

// 萤石云摄像头的监控页面
const EzvizMonitoringPage = () => {
  const [playerInstance, setPlayerInstance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePlayer = async () => {
      if (typeof window.EZUIKit === 'undefined') {
        setError('EZUIKit 未能正确加载，请检查网络连接或刷新页面重试。');
        setLoading(false);
        return;
      }

      try {
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
        setLoading(false);
      } catch (error) {
        setError(`初始化播放器时出错: ${error.message}`);
        setLoading(false);
      }
    };

    initializePlayer();

    return () => {
      if (playerInstance) {
        playerInstance.destroy();
      }
    };
  }, []);

  if (loading) {
    return <div>正在加载萤石云监控画面，请稍候...</div>;
  }

  return (
    <div>
      <h2>萤石云摄像头画面</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div id="ezuikit-player" style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
};

// 主应用程序
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/cloud-party-meeting" element={<CloudPartyMeeting />} />
          <Route path="/hikvision-monitoring" element={<HikvisionMonitoringPage />} />
          <Route path="/ezviz-monitoring" element={<EzvizMonitoringPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

