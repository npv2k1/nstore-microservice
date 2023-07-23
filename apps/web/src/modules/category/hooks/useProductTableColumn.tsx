import EditIcon from '@/components/icons/EditIcon';
import RemoveIcon from '@/components/icons/RemoveIcon';
import { Product, useDeleteOneCategoryMutation, useDeleteOneProductMutation, User } from '@/services/graphql';
import { message, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { ProductModuleActionType, ProductModuleCtx } from '../contexts';

export type useCategoryTableColumnProps = {
  dynamicColumn?: any[];
};

export const useCategoryTableColumn = ({ dynamicColumn }: useCategoryTableColumnProps) => {
  const { state, dispatch } = useContext(ProductModuleCtx);

  const [_, doDeleteOneProduct] = useDeleteOneCategoryMutation();

  const handleDeleteProduct = async (product: any) => {
    try {
      await doDeleteOneProduct({
        query: {
          _id: product._id,
        },
      });
      message.success('Xóa thành công');
    } catch (error) {
      message.error('Xóa thất bại');
    }
  };

  const handleEditProduct = (product: any) => {
    dispatch({
      type: ProductModuleActionType.EDIT_RECORD,
      payload: {
        selectedRecord: product,
      },
    });
  };

  const columns: ColumnsType<any> = useMemo(
    () => [
      {
        title: 'id',
        dataIndex: '_id',
        key: 'any',
        sorter: true,

        render: (id) => {
          return (
            <div>
              <Link href={`/product/${id}`}>{id}</Link>
            </div>
          );
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true,
      },
      {
        title: 'Slug',
        dataIndex: 'slug',
        key: 'slug',
        // ellipsis: true,
      },
      ...(dynamicColumn as any[]),
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteProduct(record);
                  }}
                  className="btn border-slate-200 hover:border-slate-300"
                >
                  <RemoveIcon />
                </button>
              </Tooltip>
              <Tooltip className="cursor-pointer" title="Sửa">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditProduct(record);
                  }}
                  className="btn border-slate-200 hover:border-slate-300"
                >
                  <EditIcon />
                </button>
              </Tooltip>
            </div>
          );
        },
      },
    ],
    [dynamicColumn],
  );
  return columns;
};
