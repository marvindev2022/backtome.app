import { useRef, useState, useEffect } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import DevCard from './DevCard';
import devsColab from './../../data/index';

export default function RenderCarousel() {
  const boxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalScrollableWidth, setTotalScrollableWidth] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const gap = 16;

  useEffect(() => {
    if (boxRef.current) {
      const scrollableWidth =
        boxRef.current.scrollWidth - boxRef.current.clientWidth;
      setTotalScrollableWidth(scrollableWidth);
    }
    setScrolling(false);
  }, [devsColab, scrollPosition]);

  const handleNext = () => {
    if (scrolling || !boxRef.current) return;
    setScrolling(true);
    if (boxRef.current) {
      const box = boxRef.current;
      const newScrollPosition = box.scrollLeft + (box.offsetWidth + gap);
      setScrollPosition(newScrollPosition);
      if (box.scrollTo) {
        box.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth',
        });
      } else {
        box.scrollLeft = newScrollPosition;
      }
    }
  };

  const handlePrev = () => {
    if (scrolling || !boxRef.current) return;
    setScrolling(true);
    if (boxRef.current) {
      const box = boxRef.current;
      let elementCountInView = Math.floor(
        box.offsetWidth / (box.firstChild.offsetWidth + gap)
      );
      elementCountInView = elementCountInView === 0 ? 1 : elementCountInView;
      const newScrollPosition =
        box.scrollLeft - elementCountInView * (box.offsetWidth + gap);
      setScrollPosition(newScrollPosition);
      if (box.scrollTo) {
        box.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth',
        });
      } else {
        box.scrollLeft = newScrollPosition;
      }
    }
  };

  return (
    <div className="h-fit justify-center w-screen flex items-center p-4">
      <MdOutlineKeyboardArrowLeft
        className={`${
          scrollPosition <= 0 ? 'text-gray-400' : 'hover:cursor-pointer'
        }`}
        size="40"
        onClick={scrolling || scrollPosition <= 0 ? null : () => handlePrev()}
      />
      <div
        className="flex w-56 sm:w-[29rem] md:w-[59.5rem] h-auto snap-none overflow-x-hidden gap-4 py-4"
        ref={boxRef}
      >
        {devsColab.map((user, index) => (
          <DevCard index={index} user={user} />
        ))}
      </div>
      <MdOutlineKeyboardArrowRight
        size="40"
        className={`${
          scrollPosition >= totalScrollableWidth
            ? 'text-gray-400'
            : 'hover:cursor-pointer'
        }`}
        onClick={
          scrolling || scrollPosition >= totalScrollableWidth
            ? null
            : () => handleNext()
        }
      />
    </div>
  );
}
