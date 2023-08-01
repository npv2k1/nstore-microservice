import { useProductsQuery } from '@/services/graphql'
import React from 'react'
import classNames from 'classnames';
import { ReactElement, useRef } from 'react';
import useProductsPagination from '../hooks/useProductsPagination';
import useFeedInfiniteScroll, { InfiniteScrollScreenOffset } from '../hooks/useFeedInfiniteScroll';
import ProductCard from '../components/cards/ProductCard';
import { getStoreLayout } from '@/modules/store/components/layout';
const StorePage = () => {
  const [{data}] = useProductsQuery({
    variables: {
     
    }
  })
   const [{ data: items, error, fetching }, fetchMore, isFetchMore] = useProductsPagination();
   // console.log("🚀 ~ file: Feed.tsx:22 ~ items:", items, items.length);
   const infiniteScrollRef = useFeedInfiniteScroll({
     fetchPage: fetchMore,
     canFetchMore: isFetchMore,
   });
   const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="mb-4">
      <div
        className={classNames(
          'relative mx-auto mt-2 grid w-full max-w-screen-2xl grid-cols-1 gap-4 scroll-smooth md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        )}
        ref={parentRef}
      >
        {items.map((item, index) => (
          <ProductCard
            item={item}
            // index={index}
            // insaneMode={false}
            // openNewTab={true}
            // displayPublicationDate={true}
            key={index}
          />
        ))}
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-[1px] opacity-0"
          ref={infiniteScrollRef}
        />
      </div>
    </div>
  );
}
StorePage.getLayout = getStoreLayout
export default StorePage