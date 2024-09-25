import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CloudPartyMeeting = () => {
  const [showHikvisionCamera, setShowHikvisionCamera] = useState(false); // 控制海康摄像头显示状态
  const [showEzvizCamera, setShowEzvizCamera] = useState(false); // 控制萤石摄像头显示状态
  const navigate = useNavigate();

  // 显示海康摄像头
  const handleViewHikvision = () => {
    setShowHikvisionCamera(true); // 点击按钮后显示海康摄像头
  };

  // 显示萤石摄像头
  const handleViewEzviz = () => {
    setShowEzvizCamera(true); // 点击按钮后显示萤石摄像头
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云党会</h3>
      <div className="space-y-4">
        <Button>发起语音通话</Button>
        <Button>发起视频通话</Button>
        <Button onClick={handleViewHikvision}>查看海康摄像头</Button> {/* 查看海康摄像头按钮 */}
        <Button onClick={handleViewEzviz}>查看萤石云摄像头</Button> {/* 查看萤石云摄像头按钮 */}
        
        {/* 条件渲染：只有在点击按钮后才显示摄像头画面 */}
        {showHikvisionCamera && (
          <div>
            <h4>海康摄像头画面</h4>
            <canvas id="hikvision-canvas" style={{ width: '600px', height: '400px' }}></canvas>
          </div>
        )}
        
        {showEzvizCamera && (
          <div>
            <h4>萤石云摄像头画面</h4>
            <div id="ezuikit-player" style={{ width: '600px', height: '400px' }}></div>
          </div>
        )}

        <div className="border p-4">
          <p>通话记录</p>
          {/* 这里可以添加通话记录列表 */}
        </div>
      </div>
    </div>
  );
};

export default CloudPartyMeeting;
