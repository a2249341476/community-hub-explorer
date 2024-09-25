import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CloudPartyMeeting from './components/CloudPartyMeeting'; // 云党会页面
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import HikvisionMonitoringPage from './components/HikvisionMonitoringPage'; // 海康摄像头页面
import EzvizMonitoringPage from './components/EzvizMonitoringPage'; // 萤石摄像头页面

const queryClient = new QueryClient();

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
