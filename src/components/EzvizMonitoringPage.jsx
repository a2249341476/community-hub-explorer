import React, { useEffect, useState } from 'react';

const EzvizMonitoringPage = () => {
  const [playerInstance, setPlayerInstance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState('');

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

        setDebugInfo('正在初始化播放器...');
        const player = new window.EZUIKit.EZUIKitPlayer({
          id: 'ezuikit-player',
          url: url,
          accessToken: accessToken,
          width: 600,
          height: 400,
          handleError: (e) => {
            console.error('播放器错误:', e);
            setError(`播放器错误: ${e.code} - ${e.message}`);
          },
          handleSuccess: () => {
            setDebugInfo('播放器初始化成功，正在加载视频流...');
          }
        });

        setPlayerInstance(player);
        setLoading(false);
        setDebugInfo('播放器已准备就绪，如果没有画面，请检查网络连接和摄像头状态。');
      } catch (error) {
        console.error('初始化播放器时出错:', error);
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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">萤石云摄像头画面</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div id="ezuikit-player" className="mb-4" style={{ width: '600px', height: '400px' }}></div>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-2">调试信息：</h3>
        <p>{debugInfo}</p>
      </div>
    </div>
  );
};

export default EzvizMonitoringPage;
