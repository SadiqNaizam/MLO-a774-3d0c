import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Frown, Meh, Smile } from 'lucide-react';
import FeedbackInputGroup from './FeedbackInputGroup';
import ActionButton from './ActionButton';

interface FeedbackCardProps {
  userName?: string;
  agentName?: string;
  className?: string;
}

type RatingValue = 'sad' | 'neutral' | 'happy';

interface EmojiRating {
  id: RatingValue;
  icon: React.ElementType;
  color: string;
  selectedColor: string;
  label: string;
}

const emojiRatings: EmojiRating[] = [
  { id: 'sad' as const, icon: Frown, color: 'text-red-500', selectedColor: 'ring-red-500', label: 'Sad' },
  { id: 'neutral' as const, icon: Meh, color: 'text-yellow-500', selectedColor: 'ring-yellow-500', label: 'Neutral' },
  { id: 'happy' as const, icon: Smile, color: 'text-green-500', selectedColor: 'ring-green-500', label: 'Happy' },
];

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  userName = 'Alex',
  agentName = 'Sarah',
  className,
}) => {
  const [selectedRating, setSelectedRating] = useState<RatingValue | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isIssueResolved, setIsIssueResolved] = useState<boolean | null>(null);

  const handleRatingSelect = useCallback((rating: RatingValue) => {
    setSelectedRating(rating);
  }, []);

  const handleCommentChange = useCallback((value: string) => {
    setComment(value);
  }, []);

  const handleIssueResolvedChange = useCallback((value: boolean) => {
    setIsIssueResolved(value);
  }, []);

  const handleSubmit = useCallback(() => {
    // In a real app, you would send this data to a server
    console.log('Feedback Submitted:', {
      rating: selectedRating,
      comment,
      isIssueResolved,
      userName,
      agentName,
    });
    // Potentially reset form or show a thank you message
  }, [selectedRating, comment, isIssueResolved, userName, agentName]);

  return (
    <Card className={cn('w-full max-w-md', className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Thanks for chatting, {userName}!</CardTitle>
        <CardDescription className="text-muted-foreground">
          Your feedback helps us improve our support.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-card-foreground">
            How was your chat with {agentName}?
          </p>
          <div className="flex justify-center space-x-6">
            {emojiRatings.map((rating) => {
              const IconComponent = rating.icon;
              return (
                <button
                  key={rating.id}
                  type="button"
                  onClick={() => handleRatingSelect(rating.id)}
                  aria-label={rating.label}
                  className={cn(
                    'rounded-full p-2 transition-all duration-150 ease-in-out',
                    'hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    selectedRating === rating.id ? cn('ring-2 ring-offset-2', rating.selectedColor) : ''
                  )}
                >
                  <IconComponent className={cn('h-10 w-10 sm:h-12 sm:w-12', rating.color)} strokeWidth={1.5} />
                </button>
              );
            })}
          </div>
        </div>

        <FeedbackInputGroup
          comment={comment}
          onCommentChange={handleCommentChange}
          isIssueResolved={isIssueResolved}
          onIssueResolvedChange={handleIssueResolvedChange}
        />

        <ActionButton onClick={handleSubmit} className="w-full">
          Done
        </ActionButton>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
