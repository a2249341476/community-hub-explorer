import React, { useEffect, useState } from 'react';

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
        const accessToken = 'your_ezviz_access_token';
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

export default EzvizMonitoringPage;
