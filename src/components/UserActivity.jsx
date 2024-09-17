import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserActivity = () => {
  const activities = [
    { id: 1, user: '张三', action: '扫社区码进入', time: '2023-03-15 09:30' },
    { id: 2, user: '李四', action: '发布言论', time: '2023-03-15 10:15' },
    { id: 3, user: '王五', action: '积分签到', time: '2023-03-15 11:00' },
  ];

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">用户活动记录</h3>
      <div className="flex space-x-2 mb-4">
        <Input placeholder="搜索用户" />
        <Button>查询</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>用户</TableHead>
            <TableHead>操作</TableHead>
            <TableHead>时间</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>{activity.user}</TableCell>
              <TableCell>{activity.action}</TableCell>
              <TableCell>{activity.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserActivity;