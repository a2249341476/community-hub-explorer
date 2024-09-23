import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import CloudPartyMeeting from './components/CloudPartyMeeting';

const queryClient = new QueryClient();

// 创建一个简化的监控页面组件
const MonitoringPage = () => {
  return (
    <div>
      <h2>监控页面</h2>
      <p>这里是监控页面的内容。由于无法使用 EZUIKit，我们暂时显示一个占位符。</p>
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
