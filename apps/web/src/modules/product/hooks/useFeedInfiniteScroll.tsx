import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect } from "react";

export interface UseFeedInfiniteScrollProps {
  fetchPage: () => Promise<unknown>;
  canFetchMore: boolean;
}

export const InfiniteScrollScreenOffset = forwardRef(() => {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-[1px] opacity-0"></div>
  );
});

export default function useFeedInfiniteScroll({
  fetchPage,
  canFetchMore,
}: UseFeedInfiniteScrollProps): (node?: Element | null) => void {
  const { ref: infiniteScrollRef, inView } = useInView({
    rootMargin: "20px",
    threshold: 1,
  });
  useEffect(() => {
    if (inView && canFetchMore) {
      fetchPage();
    }
    console.log("inView", inView);
  }, [inView, canFetchMore]);

  return infiniteScrollRef;
}
