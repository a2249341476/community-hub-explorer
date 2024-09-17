import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartyMemberShowcase = () => {
  const partyMembers = [
    { id: 1, name: '张三', role: '党支部书记', joinDate: '2010-01-01' },
    { id: 2, name: '李四', role: '党员', joinDate: '2015-05-15' },
  ];

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">党员风采</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partyMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>角色: {member.role}</p>
              <p>入党日期: {member.joinDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PartyMemberShowcase;