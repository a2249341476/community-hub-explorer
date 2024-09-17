import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OperationsCenter from '@/components/OperationsCenter';
import PointsCenter from '@/components/PointsCenter';
import CloudPartyBuilding from '@/components/CloudPartyBuilding';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">社区管理系统</h1>
      <Tabs defaultValue="operations">
        <TabsList>
          <TabsTrigger value="operations">运营中心</TabsTrigger>
          <TabsTrigger value="points">积分中心</TabsTrigger>
          <TabsTrigger value="party">云党建</TabsTrigger>
        </TabsList>
        <TabsContent value="operations">
          <OperationsCenter />
        </TabsContent>
        <TabsContent value="points">
          <PointsCenter />
        </TabsContent>
        <TabsContent value="party">
          <CloudPartyBuilding />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
