import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

type Props = {
  sectionId: string;
};

const ScrollButton = (props: Props) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = document.getElementById(props.sectionId);
      if (section?.offsetTop && scrollPosition > section?.offsetTop) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.sectionId]);

  function scrollToTop() {
    const scrollStep = -window.scrollY / (400 / 15); // Change 500 for desired duration
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="primary"
            onClick={scrollToTop}
            className={`${
              showScrollButton
                ? 'rounded-full w-12 h-10 px-0 fixed bottom-5 right-5 z-[99]'
                : 'hidden'
            } `}
          >
            <ArrowUp size={20} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Scroll to Top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ScrollButton;