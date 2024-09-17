import React from 'react';
import { Button } from "@/components/ui/button";

const CloudCollaboration = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云协作</h3>
      <div className="space-y-4">
        <Button>分享屏幕</Button>
        <Button>发起协作</Button>
        <div className="border p-4 h-64">
          <p>协作画板</p>
          {/* 这里可以添加协作画板的实现 */}
        </div>
      </div>
    </div>
  );
};

export default CloudCollaboration;