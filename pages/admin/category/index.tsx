import { useState } from 'react';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import ManageLayout from '../../../components/layouts/ManageLayout';
import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';
import { QueryClient, useQueryClient } from 'react-query';
import { fetchCategory, useCategory } from '../../../hooks/useData';
import { dehydrate } from 'react-query/hydration';
import Modal from 'antd/lib/modal/Modal';
import { useRouter } from 'next/router';
import { mutate } from '../../../utils/ajax';

export default function Category(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const router = useRouter();
  const [currentBox, setCurrentBox] = useState();
  const queryClient = useQueryClient();
  const columns = [
    { title: 'အမည်', key: 'name', dataIndex: 'name' },

    {
      title: 'လုပ်ဆောင်မှု',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (props): JSX.Element => (
        <>
          <a
            onClick={() =>
              router.push({
                pathname: '/admin/category/edit/change',
                query: { name: props.name, id: props._id },
              })
            }
          >
            ပြောင်းရန်
          </a>
          /
          <a style={{ color: 'red' }} onClick={() => showModal(props)}>
            ဖျက်ရန်
          </a>
        </>
      ),
    },
  ];
  const showModal = (props) => {
    setModalText(`"${props.name}" ကိုဖျက်မည်`);
    setVisible(true);
    setCurrentBox(props);
  };

  const handleOk = async () => {
    setModalText('ဖျက်နေပါသည်။ စောင့်ပါ');
    setConfirmLoading(true);
    await mutate('http://localhost:3000/api/categories', 'DELETE', { id: currentBox?._id });
    queryClient.invalidateQueries();
    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const mode = useSelector((state) => state.mode);
  let { data, isLoading, isFetching } = useCategory();

  if (data) {
    data = data.map((e) => {
      e.key = e._id;
      return e;
    });
  }
  return (
    <AdminLayout>
      <ManageLayout>
        <>
          <h2 style={{ marginBottom: '50px' }}>အမျိုးအမည်များ</h2>
          <Button
            onClick={() => router.push('/admin/category/edit/add')}
            style={{ marginBottom: '30px', borderRadius: '5px' }}
          >
            အသစ်ထည့်ပါ
          </Button>
          <Table
            className={mode === 'dark' ? 'black' : ''}
            columns={columns}
            dataSource={data}
            scroll={{ x: 1000, y: 300 }}
          />
          <Modal
            title="ဖျက်ရန် သေချာပြီလား?"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            cancelText="မလုပ်ပါ"
            okText="ဖျက်ပါ"
            okButtonProps={{ danger: true }}
            content="hi"
          >
            <p>{modalText}</p>
          </Modal>
        </>
      </ManageLayout>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('category', fetchCategory);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}