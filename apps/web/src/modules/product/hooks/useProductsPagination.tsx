import { Product, QueryProductsArgs, useProductsQuery } from '@/services/graphql';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
const useProductsPagination = (limit = 10) => {
  const [result, setResult] = React.useState<Product[]>([]);
  const [from, setFrom] = React.useState(1);
  const router = useRouter();
  const context = useMemo(() => ({ additionalTypenames: ['Posts'] }), []);

  const [options, setOptions] = useState<QueryProductsArgs>({
    paginate: {
      limit: limit * from,
      offset: 0,
    },
  });

  useEffect(() => {
    console.log('router', router);

    const slug = router.query.slug;

    setOptions({
      paginate: {
        limit: limit * from,
        offset: 0,
      },
    });
  }, [router, limit, from]);

  const [{ fetching, data, error }] = useProductsQuery({
    variables: {
      ...options,
    },
    context: context,
    requestPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!data) return;
    // setResult((prev) => [...prev, ...(data?.news.docs as News[])]);
    setResult(data.products.docs);
  }, [data]);

  const fetchMore = React.useCallback(async () => {
    if (!fetching) {
      setFrom((s) => s + 1);
    }
    console.log('fetching more');
  }, [limit, fetching]);

  return [{ data: result, error, fetching }, fetchMore, true] as const;
};

export default useProductsPagination;
