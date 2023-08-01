import EditIcon from '@/components/icons/EditIcon';
import RemoveIcon from '@/components/icons/RemoveIcon';
import { Product, useDeleteOneProductMutation, User } from '@/services/graphql';
import { Image, message, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { ProductModuleActionType, ProductModuleCtx } from '../contexts';

export type useProductTableColumnProps = {
  dynamicColumn?: any[];
};

export const useProductTableColumn = ({ dynamicColumn }: useProductTableColumnProps) => {
  const { state, dispatch } = useContext(ProductModuleCtx);

  const [_, doDeleteOneProduct] = useDeleteOneProductMutation();

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
        key: '_id',
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
        title: 'Image',
        dataIndex: 'image',
        key: 'image',

        render: (image: string) => {
          return (
            <div>
              <Image src={image} width={100} />
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
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        // ellipsis: true,
      },

      {
        title: 'Category',
        dataIndex: 'categories',
        key: 'categories',
        sorter: true,
        render: (categories: Product['categories']) => {
          return (
            <div>
              {categories &&
                categories.map((category) => (
                  <Tag color="cyan" key={category._id}>
                    {category.name}
                  </Tag>
                ))}
            </div>
          );
        },
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
