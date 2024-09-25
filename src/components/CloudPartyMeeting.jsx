import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CloudPartyMeeting = () => {
  const navigate = useNavigate(); // 用于导航到不同的监控页面

  // 处理查看海康摄像头的按钮点击事件
  const handleViewHikvision = () => {
    navigate('/hikvision-monitoring'); // 导航到海康摄像头页面
  };

  // 处理查看萤石云摄像头的按钮点击事件
  const handleViewEzviz = () => {
    navigate('/ezviz-monitoring'); // 导航到萤石云摄像头页面
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云党会</h3>
      <div className="space-y-4">
        <Button>发起语音通话</Button>
        <Button>发起视频通话</Button>
        <Button onClick={handleViewHikvision}>查看海康摄像头</Button> {/* 查看海康摄像头 */}
        <Button onClick={handleViewEzviz}>查看萤石云摄像头</Button> {/* 查看萤石云摄像头 */}
        <div className="border p-4">
          <p>通话记录</p>
          {/* 这里可以添加通话记录列表 */}
        </div>
      </div>
    </div>
  );
};

export default CloudPartyMeeting;
