import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CloudPartyMeeting = () => {
  const navigate = useNavigate(); // 用于导航到监控页面

  // 处理查看监控按钮点击事件
  const handleViewMonitoring = () => {
    navigate('/monitoring'); // 导航到监控页面
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云党会</h3>
      <div className="space-y-4">
        <Button>发起语音通话</Button>
        <Button>发起视频通话</Button>
        <Button onClick={handleViewMonitoring}>查看监控</Button> {/* 新增查看监控按钮 */}
        <div className="border p-4">
          <p>通话记录</p>
          {/* 这里可以添加通话记录列表 */}
        </div>
      </div>
    </div>
  );
};

export default CloudPartyMeeting;
