import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import CloudPartyMeeting from './components/CloudPartyMeeting';
import EZUIKit from './lib/ezuikit'; // 引入 ezuikit.js 文件

const queryClient = new QueryClient();

// 创建监控页面组件，并使用 EZUIKit 播放器
const MonitoringPage = () => {
  useEffect(() => {
    // 初始化 EZUIKit 播放器实例
    const UIKitDEMO = new EZUIKit.EZUIKitPlayer({
      id: 'ezuikit-player', // 对应 HTML 中播放器的 div ID
      url: 'ezopen://open.ys7.com/J76228367/1.hd.live', // 替换为您的视频流地址
      accessToken: 'at.50mffmbj9szcr3o824fjgas25n41r7cw-8s3a15x98u-0pbpnp3-wqddrxwkr', // 替换为您的 accessToken
      width: 600, // 可选：设置播放器宽度
      height: 400, // 可选：设置播放器高度
    });

    // 清理函数，用于在组件卸载时销毁播放器实例
    return () => {
      if (UIKitDEMO) {
        UIKitDEMO.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>监控页面</h2>
      {/* 播放器挂载的 div */}
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
          <Route path="/monitoring" element={<MonitoringPage />} /> {/* 监控页面路由 */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
