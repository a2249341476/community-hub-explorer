import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

const EventCenter = () => {
  const [flowName, setFlowName] = useState('');
  const [flowScope, setFlowScope] = useState('');
  const [processTimeLimit, setProcessTimeLimit] = useState('');
  const [nodeDelayTime, setNodeDelayTime] = useState('');

  const handleSave = async () => {
    try {
      const { data, error } = await supabase
        .from('event_flows')
        .insert([
          {
            flow_name: flowName,
            flow_scope: flowScope,
            process_time_limit: processTimeLimit,
            node_delay_time: nodeDelayTime
          }
        ]);

      if (error) throw error;

      toast.success('事件流程保存成功');
      // 清空输入框
      setFlowName('');
      setFlowScope('');
      setProcessTimeLimit('');
      setNodeDelayTime('');
    } catch (error) {
      toast.error('保存失败: ' + error.message);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">事件中心</h3>
      <div className="space-y-4">
        <Input 
          placeholder="流程名称" 
          value={flowName}
          onChange={(e) => setFlowName(e.target.value)}
        />
        <Input 
          placeholder="事件流转范围" 
          value={flowScope}
          onChange={(e) => setFlowScope(e.target.value)}
        />
        <Input 
          placeholder="事件整体处置时限" 
          value={processTimeLimit}
          onChange={(e) => setProcessTimeLimit(e.target.value)}
        />
        <Input 
          placeholder="节点临期提醒时长" 
          value={nodeDelayTime}
          onChange={(e) => setNodeDelayTime(e.target.value)}
        />
        <div>
          <p className="mb-2">流程节点配置（拖拽功能待实现）</p>
          <div className="border p-4 mb-2">节点1</div>
          <div className="border p-4 mb-2">节点2</div>
          <div className="border p-4 mb-2">节点3</div>
        </div>
        <Button onClick={handleSave}>保存配置</Button>
      </div>
    </div>
  );
};

export default EventCenter;
