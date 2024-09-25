import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import Index from './pages/Index';
import CloudPartyMeeting from './components/CloudPartyMeeting';
import HikvisionMonitoringPage from './components/HikvisionMonitoringPage';
import EzvizMonitoringPage from './components/EzvizMonitoringPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cloud-party-meeting" element={<CloudPartyMeeting />} />
          <Route path="/hikvision-monitoring" element={<HikvisionMonitoringPage />} />
          <Route path="/ezviz-monitoring" element={<EzvizMonitoringPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
