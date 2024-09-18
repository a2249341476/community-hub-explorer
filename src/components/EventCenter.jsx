import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

const EventCenter = () => {
  const [flowName, setFlowName] = useState('');
  const [flowScope, setFlowScope] = useState('');
  const [processTimeLimit, setProcessTimeLimit] = useState('');
  const [nodeDelayTime, setNodeDelayTime] = useState('');
  const [savedFlows, setSavedFlows] = useState([]); // 保存所有已保存的事件流程

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
      fetchSavedFlows(); // 保存后重新加载已保存的数据
    } catch (error) {
      toast.error('保存失败: ' + error.message);
    }
  };

  const fetchSavedFlows = async () => {
    try {
      const { data, error } = await supabase
        .from('event_flows')
        .select('*');

      if (error) throw error;

      setSavedFlows(data); // 设置已保存的数据
    } catch (error) {
      toast.error('获取数据失败: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from('event_flows')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('流程删除成功');
      fetchSavedFlows(); // 删除后重新加载已保存的数据
    } catch (error) {
      toast.error('删除失败: ' + error.message);
    }
  };

  useEffect(() => {
    fetchSavedFlows(); // 页面加载时获取已保存的数据
  }, []);

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
        <Button onClick={handleSave}>保存配置</Button>

        {/* 增加显示已保存内容的部分 */}
        <h4 className="text-lg font-medium mt-6">已保存的事件流程</h4>
        <Button onClick={fetchSavedFlows} className="mb-4">刷新数据</Button>
        <div className="space-y-2">
          {savedFlows.length > 0 ? (
            savedFlows.map((flow) => (
              <div key={flow.id} className="border p-4">
                <p><strong>流程名称:</strong> {flow.flow_name}</p>
                <p><strong>事件流转范围:</strong> {flow.flow_scope}</p>
                <p><strong>事件整体处置时限:</strong> {flow.process_time_limit}</p>
                <p><strong>节点临期提醒时长:</strong> {flow.node_delay_time}</p>
                {/* 添加删除按钮 */}
                <Button onClick={() => handleDelete(flow.id)} className="mt-2" variant="destructive">删除流程</Button>
              </div>
            ))
          ) : (
            <p>暂无已保存的事件流程。</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCenter;

