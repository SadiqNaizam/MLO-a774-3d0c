import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// This interface defines the props for the Header component.
// It accepts an optional className for additional styling customisation.
interface HeaderProps {
  className?: string;
}

// This interface defines the structure for user avatar data.
interface UserAvatarData {
  id: string;
  initial: string;
  bgColor: string; // Tailwind CSS class for avatar background color
  textColor: string; // Tailwind CSS class for avatar text color
}

// Dummy data for user avatars. In a production application, this might come from props, context, or an API call.
// The specific initials and colors are based on common patterns or placeholder requirements.
const userAvatars: UserAvatarData[] = [
  { id: 'user1', initial: 'T', bgColor: 'bg-sky-400', textColor: 'text-white' },
  { id: 'user2', initial: 'S', bgColor: 'bg-teal-400', textColor: 'text-white' },
  { id: 'user3', initial: 'B', bgColor: 'bg-indigo-600', textColor: 'text-white' },
];

/**
 * Header component for the application layout.
 * It renders a fixed header at the top of the page, displaying the application title 
 * and a set of user avatars. The styling (colors, padding, height) is derived from 
 * the project's Layout Requirements.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        // Positioning & Sizing: Fixed to the top, full width, specific height, and z-index for stacking.
        'fixed top-0 left-0 right-0 w-full z-50 h-16',
        // Flexbox Layout: Aligns items horizontally with space between them and centers them vertically.
        'flex items-center justify-between',
        // Padding: Horizontal and vertical padding as per Layout Requirements.
        'px-4 py-3',
        // Appearance: Uses accent color for background and corresponding foreground for text.
        // Includes a subtle shadow for better separation from content below.
        'bg-accent text-accent-foreground shadow-md',
        // Allows for additional Tailwind CSS classes to be passed via props for customisation.
        className
      )}
    >
      {/* Left Section: Application Title */}
      {/* The title is hardcoded as per Layout Requirements notes. */}
      <h1 className="text-xl font-semibold">
        Chat Feedback
      </h1>

      {/* Right Section: User Avatars */}
      {/* Avatars are rendered based on the `userAvatars` data array. */}
      <div className="flex items-center space-x-2">
        {userAvatars.map((avatar) => (
          <Avatar key={avatar.id} className="h-8 w-8">
            <AvatarFallback
              className={cn(
                avatar.bgColor,
                avatar.textColor,
                'text-sm font-medium' // Ensures text inside avatar is legible and styled consistently.
              )}
            >
              {avatar.initial}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </header>
  );
};

export default Header;
