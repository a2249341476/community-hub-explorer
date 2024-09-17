import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartyMemberShowcase from './PartyMemberShowcase';
import CloudPartyMeeting from './CloudPartyMeeting';
import CloudCollaboration from './CloudCollaboration';
import CloudLocation from './CloudLocation';

const CloudPartyBuilding = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">特色云党建应用</h2>
      <Tabs defaultValue="showcase">
        <TabsList>
          <TabsTrigger value="showcase">党员风采</TabsTrigger>
          <TabsTrigger value="meeting">云党会</TabsTrigger>
          <TabsTrigger value="collaboration">云协作</TabsTrigger>
          <TabsTrigger value="location">云定位</TabsTrigger>
        </TabsList>
        <TabsContent value="showcase">
          <PartyMemberShowcase />
        </TabsContent>
        <TabsContent value="meeting">
          <CloudPartyMeeting />
        </TabsContent>
        <TabsContent value="collaboration">
          <CloudCollaboration />
        </TabsContent>
        <TabsContent value="location">
          <CloudLocation />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CloudPartyBuilding;