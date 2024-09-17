import React from 'react';
import { Button } from "@/components/ui/button";

const PortalCustomization = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">门户自定义</h3>
      <div className="space-y-4">
        <div>
          <p className="mb-2">组件列表（拖拽功能待实现）</p>
          <div className="border p-4 mb-2">组件1</div>
          <div className="border p-4 mb-2">组件2</div>
          <div className="border p-4 mb-2">组件3</div>
        </div>
        <div>
          <p className="mb-2">背景选择</p>
          <div className="flex space-x-2">
            <div className="w-10 h-10 bg-blue-500"></div>
            <div className="w-10 h-10 bg-green-500"></div>
            <div className="w-10 h-10 bg-red-500"></div>
          </div>
        </div>
        <Button>保存自定义</Button>
      </div>
    </div>
  );
};

export default PortalCustomization;