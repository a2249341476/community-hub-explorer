import React from 'react';
import { Button } from "@/components/ui/button";

const CloudPartyMeeting = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云党会</h3>
      <div className="space-y-4">
        <Button>发起语音通话</Button>
        <Button>发起视频通话</Button>
        <div className="border p-4">
          <p>通话记录</p>
          {/* 这里可以添加通话记录列表 */}
        </div>
      </div>
    </div>
  );
};

export default CloudPartyMeeting;