import { useEffect } from 'react';

export function useFocusTrap(ref, isActive) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const currentRef = ref.current;
    
    // Select all focusable elements within the ref
    const focusableElementsString = 
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    
    let focusableElements = Array.from(currentRef.querySelectorAll(focusableElementsString));
    
    // Filter out hidden elements
    focusableElements = focusableElements.filter((el) => {
      return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
    });

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Store the previously focused element to restore it later
    const previousFocus = document.activeElement;

    // Focus first element initially when modal opens
    firstElement.focus();

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    currentRef.addEventListener('keydown', handleKeyDown);

    return () => {
      currentRef.removeEventListener('keydown', handleKeyDown);
      // Restore focus to the element that was focused before the modal opened
      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    };
  }, [ref, isActive]);
}
