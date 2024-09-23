import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import EZUIKit from 'ezuikit-js';
import CloudPartyMeeting from './components/CloudPartyMeeting'; // 从components/ui中引入CloudPartyMeeting组件

const queryClient = new QueryClient();

// 创建一个监控页面组件
const MonitoringPage = () => {
  useEffect(() => {
    // 初始化EZUIKit播放器实例
    const UIKitDEMO = new EZUIKit.EZUIKitPlayer({
      id: 'ezuikit-player',
      url: 'ezopen://YOUR_STREAM_URL', // 替换为您的视频流地址
      accessToken: 'YOUR_ACCESS_TOKEN' // 替换为您的accessToken
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
      {/* 用于挂载播放器的div元素 */}
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
          <Route path="/cloud-party-meeting" element={<CloudPartyMeeting />} /> {/* 新增云党会页面路由 */}
          <Route path="/monitoring" element={<MonitoringPage />} /> {/* 新增监控页面路由 */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
