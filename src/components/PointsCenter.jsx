import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PointsCenter = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">积分中心</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">单用户积分操作</h3>
          <div className="flex space-x-2">
            <Input placeholder="用户名" />
            <Input placeholder="积分类型" />
            <Input type="number" placeholder="积分变更" />
            <Button>提交</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">批量操作</h3>
          <div className="flex space-x-2">
            <Input type="file" />
            <Button>导入</Button>
            <Button>导出失败清单</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">连续签到设置</h3>
          <div className="flex space-x-2">
            <Input placeholder="连签规则" />
            <Button>保存</Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">补签设置</h3>
          <div className="flex space-x-2">
            <Input placeholder="补签限制" />
            <Input placeholder="补签奖励" />
            <Input placeholder="积分消耗" />
            <Button>保存</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsCenter;
