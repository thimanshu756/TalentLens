/**
 * Utility function to open Cal.com popup
 * @param calLink - The Cal.com link (e.g., 'rakri-ai-vhtois/15min')
 */
export function openCalComPopup(calLink: string = 'rakri-ai-vhtois/15min') {
  if (typeof window === 'undefined') return;

  // Function to open popup with current Cal instance
  const openPopup = (calInstance: any) => {
    if (calInstance && calInstance.ns && calInstance.ns.popup) {
      // Use the initialized popup namespace
      calInstance.ns.popup({
        calLink,
        layout: 'month_view',
      });
    } else if (calInstance && typeof calInstance === 'function') {
      // Fallback to direct call
      calInstance('popup', {
        calLink,
        layout: 'month_view',
      });
    }
  };

  const cal = (window as any).Cal;
  
  // Check if Cal is already loaded
  if (cal && (cal.ns?.popup || typeof cal === 'function')) {
    openPopup(cal);
  } else {
    // Wait for script to load
    const checkCal = setInterval(() => {
      const calCheck = (window as any).Cal;
      if (calCheck && (calCheck.ns?.popup || typeof calCheck === 'function')) {
        clearInterval(checkCal);
        openPopup(calCheck);
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkCal);
      const finalCal = (window as any).Cal;
      // Fallback: open in new tab if script doesn't load
      if (!finalCal || !finalCal.ns?.popup) {
        window.open(`https://cal.com/${calLink}`, '_blank');
      }
    }, 5000);
  }
}

