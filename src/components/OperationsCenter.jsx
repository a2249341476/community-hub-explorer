import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommentModeration from './CommentModeration';
import UserActivity from './UserActivity';
import EventCenter from './EventCenter';
import PortalCustomization from './PortalCustomization';

const OperationsCenter = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">运营中心</h2>
      <Tabs defaultValue="comments">
        <TabsList>
          <TabsTrigger value="comments">言论审核</TabsTrigger>
          <TabsTrigger value="activity">用户活动</TabsTrigger>
          <TabsTrigger value="events">事件中心</TabsTrigger>
          <TabsTrigger value="portal">门户自定义</TabsTrigger>
        </TabsList>
        <TabsContent value="comments">
          <CommentModeration />
        </TabsContent>
        <TabsContent value="activity">
          <UserActivity />
        </TabsContent>
        <TabsContent value="events">
          <EventCenter />
        </TabsContent>
        <TabsContent value="portal">
          <PortalCustomization />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OperationsCenter;