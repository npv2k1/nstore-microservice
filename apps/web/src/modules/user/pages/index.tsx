import { useContext, useEffect, useMemo, useState } from 'react';
import { message, Table } from 'antd';
import { useRouter } from 'next/router';
import { TablePaginationConfig } from 'antd/lib/table';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import CreateUserModal from 'src/modules/user/components/CreateUserModal';
import DeleteButton from '../components/DeleteButton';
import DynamicColumn from '../components/DynamicColumn';
import EditUserDrawer from '../components/EditUserDrawer';
import SearchForm from '../components/SearchForm';
import UserPageProvider, { UserPageActionType, UserPageCtx } from '../store';
import { makeTableColumn } from '../store/makeTableColumn';
import { User, useDeleteUserMutation, useGetUsersQuery } from '@/services/graphql';

export const DEFAULT_PAGE_SIZE = 10;

const UserPageContainer = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(UserPageCtx);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState<number>(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [open, setOpen] = useState(false);

  const [{ data }] = useGetUsersQuery({
    variables: {
      take: pageSize,
      skip: (page - 1) * pageSize,
    },
  });
  const [{ fetching, error }, doDeleteUser] = useDeleteUserMutation();

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<User> | SorterResult<User>[],
    extra: TableCurrentDataSource<User>,
  ) => {
    setPage(pagination.current as number);
    setPageSize(pagination.pageSize as number);

    const { field, order, column } = sorter as SorterResult<User>;

    if (!column?.sorter) {
      // setOrderBy(undefined);
      return;
    }
  };

  useEffect(() => {
    if (!error) return;
    message.error(error.message);
  }, [error]);

  const handleRemoveRecord = async (record: User) => {
    const { id } = record;
    if (id) {
      await doDeleteUser({
        where: {
          id: id,
        },
      });
    }
  };

  const columns = useMemo(() => {
    return makeTableColumn({
      doDeleteUser: handleRemoveRecord,
    });
  }, [handleRemoveRecord]);

  const columnsOption = [{ label: 'Address', value: 'address' }];

  const handleDynamicColumn = (value: CheckboxValueType[]) => {
    console.log(value);
  };

  const handleRowSelection = (selectedRowKeys: any, selectedRows: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  };

  const handleRowClick = (record: any, index: any) => {
    setOpen(true);
    console.log(record, index);
    dispatch({
      type: UserPageActionType.SELECT_RECORD,
      payload: {
        selectedRecord: record,
      },
    });
  };

  return (
    <>
      <div className="mb-5 sm:flex sm:items-center sm:justify-between">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">Users ✨</h1>
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

          <DynamicColumn align="right" onChange={handleDynamicColumn} options={columnsOption} />
        </div>
      </div>

      <Table
        pagination={{
          total: data?.aggregateUsers._count || 0,
          showSizeChanger: true,
          showQuickJumper: true,
          current: page,
          pageSize: pageSize,
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
        rowKey={(record) => record.id}
        onChange={handleTableChange}
        className="w-full"
        dataSource={data?.users as User[]}
        columns={columns}
      />

      <EditUserDrawer open={open} onClose={() => setOpen(false)} />
      <CreateUserModal open={showCreateModal} onCancel={() => setShowCreateModal(false)} />
    </>
  );
};

const UserPage = () => {
  return (
    <UserPageProvider>
      <UserPageContainer />
    </UserPageProvider>
  );
};
export default UserPage;
