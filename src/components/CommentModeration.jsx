import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CommentModeration = () => {
  const [autoModeration, setAutoModeration] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, content: '这是一条评论', application: '活动报名', status: '待审核' },
    { id: 2, content: '另一条评论', application: '邻里达人', status: '待审核' },
  ]);

  const handleModeration = (id, action) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, status: action } : comment
    ));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">言论审核中心</h3>
        <div className="flex items-center space-x-2">
          <span>自动审核</span>
          <Switch checked={autoModeration} onCheckedChange={setAutoModeration} />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>内容</TableHead>
            <TableHead>应用</TableHead>
            <TableHead>状态</TableHead>
            <TableHead>操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>{comment.content}</TableCell>
              <TableCell>{comment.application}</TableCell>
              <TableCell>{comment.status}</TableCell>
              <TableCell>
                <Button onClick={() => handleModeration(comment.id, '同意')} className="mr-2">同意</Button>
                <Button onClick={() => handleModeration(comment.id, '拒绝')} variant="destructive">拒绝</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CommentModeration;
