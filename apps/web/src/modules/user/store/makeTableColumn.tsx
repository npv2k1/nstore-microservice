import { message, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Link from 'next/link';
import { useDeleteUserMutation, User } from '@/services/graphql';
import RemoveIcon from '../components/icons/RemoveIcon';
import EditIcon from '../components/icons/EditIcon';

export type MakeTableColumnProps = {
  doDeleteUser: (u: User) => Promise<void>;
};

export const makeTableColumn = (props: MakeTableColumnProps) => {
  const columns: ColumnsType<User> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'any',
      sorter: true,
      width: 120,

      render: (id: User['id']) => {
        return (
          <div>
            <Link href={`/user/${id}`}>{id}</Link>
          </div>
        );
      },
    },
    {
      title: 'Fullname',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: true,

      width: 200,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },

    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      width: 150,
      sorter: true,
      render: (roles: User['roles']) => {
        return <div>{roles && roles.map((role) => <Tag color="cyan">{role}</Tag>)}</div>;
      },
    },

    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      width: 200,
      render: (record: User) => {
        return (
          <div className="flex flex-row space-x-2">
            <Tooltip className="cursor-pointer" title="Xóa">
              <button
                onClick={() => props.doDeleteUser(record)}
                className="btn border-slate-200 hover:border-slate-300"
              >
                <RemoveIcon />
              </button>
            </Tooltip>
            <Tooltip className="cursor-pointer" title="Sửa">
              <button
                onClick={() => console.log(record)}
                className="btn border-slate-200 hover:border-slate-300"
              >
                <EditIcon />
              </button>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  return columns;
};
