import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EventCenter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">事件中心</h3>
      <div className="space-y-4">
        <div>
          <Input placeholder="流程名称" className="mb-2" />
          <Input placeholder="事件流转范围" className="mb-2" />
          <Input placeholder="事件整体处置时限" className="mb-2" />
          <Input placeholder="节点临期提醒时长" className="mb-2" />
        </div>
        <div>
          <p className="mb-2">流程节点配置（拖拽功能待实现）</p>
          <div className="border p-4 mb-2">节点1</div>
          <div className="border p-4 mb-2">节点2</div>
          <div className="border p-4 mb-2">节点3</div>
        </div>
        <Button>保存配置</Button>
      </div>
    </div>
  );
};

export default EventCenter;