import React from 'react';
import FeedbackHeader from '@/components/Feedback/FeedbackHeader';
import FeedbackCard from '@/components/Feedback/FeedbackCard';

/**
 * IndexPage serves as the main Chat Feedback Page.
 * It orchestrates the layout by including the FeedbackHeader and FeedbackCard components.
 * The overall structure ensures the header is fixed at the top, and the feedback card
 * is centered in the main content area, with appropriate padding to avoid overlap
 * with the header.
 */
const IndexPage: React.FC = () => {
  // Dummy data for the feedback card. In a real application, this might come from user context or route params.
  const userName = "Alex"; // As depicted in the UI mock/image
  const agentName = "Sarah"; // As depicted in the UI mock/image

  return (
    // Root container for the page
    // - `min-h-screen`: Ensures the page takes at least the full viewport height.
    // - `flex flex-col`: Establishes a vertical flex layout for its children (header, main).
    // - `bg-background`: Applies the standard background color for the page.
    <div className="flex min-h-screen flex-col bg-background">
      <FeedbackHeader />
      
      {/* Main content wrapper */}
      {/* - `flex-1`: Allows this area to grow and take up available space below the header. */}
      {/* - `flex flex-col`: Ensures its children (FeedbackCard) are stacked vertically. */}
      {/* - `items-center`: Horizontally centers the FeedbackCard (which has a max-width). */}
      {/* - `justify-center`: Vertically centers the FeedbackCard if content is shorter than screen. */}
      {/* - `p-6`: Standard padding (1.5rem) on left, right, and bottom. */}
      {/* - `pt-22`: Custom top padding (5.5rem). This is calculated as: */}
      {/*   Header height (h-16 = 4rem) + Main content's own top padding (p-6 top = 1.5rem) = 5.5rem. */}
      {/*   Tailwind's spacing unit is 0.25rem, so 16 units = 4rem, 6 units = 1.5rem. 16+6=22 units. */}
      {/*   This ensures content within `main` does not overlap with the fixed `FeedbackHeader`. */}
      <main className="flex flex-1 flex-col items-center justify-center p-6 pt-22">
        <FeedbackCard userName={userName} agentName={agentName} />
      </main>
    </div>
  );
};

export default IndexPage;
