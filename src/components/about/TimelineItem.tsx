
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export interface TimelineItemProps {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'internship' | 'veille';
}

export const TimelineItem = ({ title, organization, period, description }: TimelineItemProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-primary font-medium">{organization}</p>
            <div className="flex items-center mt-1 mb-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{period}</span>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
