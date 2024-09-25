import React, { useEffect, useState } from 'react';

const HikvisionMonitoringPage = () => {
  useEffect(() => {
    const rtsp = 'rtsp://101.69.216.133:8604/EUrl/PKGWPGA?params=your_rtsp_params';
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

export default HikvisionMonitoringPage;
