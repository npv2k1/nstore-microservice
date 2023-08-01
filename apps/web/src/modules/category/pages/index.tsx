import { getAdminLayout } from '@/modules/admin/components/layouts';
import { Product, useCategoriesQuery, useProductsQuery } from '@/services/graphql';
import { Table } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { TablePaginationConfig } from 'antd/lib/table';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import DeleteButton from '../components/DeleteButton';
import DynamicColumn from '../components/table/DynamicColumn';
import SearchForm from '../components/SearchForm';
import CategoryEditDrawer from '../components/drawers/CategoryEditDrawer';
import CategoryCreateModal from '../components/modals/CategoryCreateModal';
import ProductModuleProvider, { ProductModuleActionType, ProductModuleCtx } from '../contexts';
import { useCategoryTableColumn } from '../hooks/useProductTableColumn';

export const DEFAULT_PAGE_SIZE = 10;

const UserPageContainer = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(ProductModuleCtx);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState<number>(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [dynamicColumn, setDynamicColumn] = useState<any[]>([]);

  const [{ data }] = useCategoriesQuery({
    variables: {
      paginate: {
        limit: pageSize,
        page: page,
      },
    },
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<Product> | SorterResult<Product>[],
    extra: TableCurrentDataSource<Product>,
  ) => {
    setPage(pagination.current as number);
    setPageSize(pagination.pageSize as number);

    const { field, order, column } = sorter as SorterResult<Product>;

    if (!column?.sorter) {
      // setOrderBy(undefined);
      return;
    }
  };

  const columns = useCategoryTableColumn({
    dynamicColumn,
  });

  const columnsOption = [
    {
      label: 'Quantity',
      // value: 'Quantity',
      value: {
        title: 'quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },
    },
    {
      label: 'status',
      // value: 'status',
      value: {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
      },
    },
  ];

  const handleDynamicColumn = (value: CheckboxValueType[]) => {
    console.log('value', value);
    setDynamicColumn(value);
  };

  const handleRowSelection = (selectedRowKeys: any, selectedRows: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setSelectedItems(selectedRows);
  };

  const handleRowClick = (record: any, index: any) => {
    console.log(record, index);
  };
  useEffect(() => {
    if (state.selectedRecord) {
      setOpen(true);
    }
  }, [state.selectedRecord]);

  return (
    <>
      <div className="mb-5 sm:flex sm:items-center sm:justify-between">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">Category ✨</h1>
        </div>

        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
          <SearchForm
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
          <button
            onClick={() => {
              setShowCreateModal(true);
            }}
            className="btn bg-indigo-500 text-white hover:bg-indigo-600"
          >
            <svg className="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="xs:block ml-2 hidden">Create User</span>
          </button>
        </div>
      </div>

      {/* More actions */}
      <div className="mb-5 sm:flex sm:items-center sm:justify-between">
        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="-m-1 flex flex-wrap">
            <li className="m-1">
              <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-500 px-3 py-1 text-sm font-medium leading-5 text-white shadow-sm duration-150 ease-in-out">
                Admin <span className="ml-1 text-indigo-200">1</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
          <DeleteButton selectedItems={selectedItems} />
          <DynamicColumn
            align="right"
            onSubmit={handleDynamicColumn}
            value={dynamicColumn}
            options={columnsOption}
          />
        </div>
      </div>

      <Table
        pagination={{
          total: data?.categories.totalDocs || 0,
          showSizeChanger: true,
          showQuickJumper: true,
          current: data?.categories.page || 1,
          pageSize: data?.categories.limit,
        }}
        rowSelection={{
          onChange: handleRowSelection,
        }}
        onRow={(record, index) => {
          return {
            onClick: () => {
              handleRowClick(record, index);
            },
          };
        }}
        rowKey={(record) => record._id}
        onChange={handleTableChange}
        className="w-full"
        dataSource={data?.categories.docs as Product[]}
        columns={columns}
      />

      <CategoryEditDrawer open={open} onClose={() => setOpen(false)} />
      <CategoryCreateModal open={showCreateModal} onCancel={() => setShowCreateModal(false)} />
    </>
  );
};

const CategoryPage = () => {
  return (
    <ProductModuleProvider>
      <UserPageContainer />
    </ProductModuleProvider>
  );
};

CategoryPage.getLayout = getAdminLayout;
export default CategoryPage;
