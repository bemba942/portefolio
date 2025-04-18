
import React from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

interface TimelineSectionProps {
  title: string;
  icon: React.ReactNode;
  items: TimelineItemProps[];
}

const TimelineSection = ({ title, icon, items }: TimelineSectionProps) => {
  return (
    <div className="animate-fade-right">
      <div className="flex items-center mb-6">
        <div className="icon-container bg-primary text-primary-foreground mr-3">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold">{title}</h3>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
