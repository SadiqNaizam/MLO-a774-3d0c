import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface FeedbackHeaderProps {
  className?: string;
}

interface UserAvatar {
  id: string;
  initial: string;
  bgColor: string;
  textColor: string;
}

const userAvatarsData: UserAvatar[] = [
  { id: 'user1', initial: 'T', bgColor: 'bg-sky-400', textColor: 'text-white' }, // Light blue from image for T
  { id: 'user2', initial: 'S', bgColor: 'bg-teal-400', textColor: 'text-white' }, // Cyan-ish from image for S
  { id: 'user3', initial: 'B', bgColor: 'bg-indigo-600', textColor: 'text-white' }, // Dark blue from image for B
];

const FeedbackHeader: React.FC<FeedbackHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 py-3 shadow-md',
        'bg-primary text-primary-foreground', // Using primary color for header as per image
        className
      )}
    >
      <h1 className="text-xl font-semibold">Chat Feedback</h1>
      <div className="flex items-center space-x-2">
        {userAvatarsData.map((avatar) => (
          <Avatar key={avatar.id} className="h-8 w-8">
            <AvatarFallback className={cn(avatar.bgColor, avatar.textColor, 'font-medium')}>
              {avatar.initial}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </header>
  );
};

export default FeedbackHeader;
