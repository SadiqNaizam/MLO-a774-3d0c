import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FeedbackInputGroupProps {
  comment: string;
  onCommentChange: (value: string) => void;
  isIssueResolved: boolean | null;
  onIssueResolvedChange: (value: boolean) => void;
  className?: string;
}

const FeedbackInputGroup: React.FC<FeedbackInputGroupProps> = ({
  comment,
  onCommentChange,
  isIssueResolved,
  onIssueResolvedChange,
  className,
}) => {
  return (
    <div className={cn('space-y-6', className)}>
      <div className="space-y-2">
        <Label htmlFor="feedback-comment" className="text-sm font-medium text-card-foreground">
          Any other comments for us? (Optional)
        </Label>
        <Textarea
          id="feedback-comment"
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
          placeholder="Tell us more..."
          className="min-h-[100px] resize-none"
        />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-card-foreground text-center">
          Was your issue resolved?
        </p>
        <div className="flex justify-center space-x-3">
          <Button
            variant={isIssueResolved === true ? 'default' : 'secondary'}
            onClick={() => onIssueResolvedChange(true)}
            className="flex-1 sm:flex-none sm:px-10"
            aria-pressed={isIssueResolved === true}
          >
            Yes
          </Button>
          <Button
            variant={isIssueResolved === false ? 'default' : 'secondary'}
            onClick={() => onIssueResolvedChange(false)}
            className="flex-1 sm:flex-none sm:px-10"
            aria-pressed={isIssueResolved === false}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInputGroup;
