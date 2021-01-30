import { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import ManageLayout from '../../../components/layouts/ManageLayout';
import { Button, Input, Table } from 'antd';
import { useSelector } from 'react-redux';
import { QueryClient, useQueryClient } from 'react-query';
import { fetchCompany, useCompany } from '../../../hooks/useData';
import { dehydrate } from 'react-query/hydration';
import Modal from 'antd/lib/modal/Modal';
import { useRouter } from 'next/router';
import { mutate } from '../../../utils/ajax';

export default function Category(): JSX.Element {
  console.log('Rendering');

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const router = useRouter();
  const [currentBox, setCurrentBox] = useState({ _id: 0 });
  const [loading, setLoading] = useState(true);
  const [showData, setShowData] = useState([]);
  const queryClient = useQueryClient();

  function toRender(props: any): JSX.Element {
    return (
      <>
        <a
          href="#"
          onClick={() =>
            router.push({
              pathname: '/admin/company/edit/change',
              query: { name: props.name, id: props._id },
            })
          }
        >
          ပြောင်းရန်
        </a>
        /
        <a href="#" style={{ color: 'red' }} onClick={() => showModal(props)}>
          ဖျက်ရန်
        </a>
      </>
    );
  }
  const columns = [
    { title: 'အမည်', key: 'name', dataIndex: 'name' },

    {
      title: 'လုပ်ဆောင်မှု',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: toRender,
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
    await mutate(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/companies`, 'DELETE', {
      id: currentBox._id,
    });
    queryClient.invalidateQueries();
    setVisible(false);
    setShowData((prev) => {
      return prev.filter((e) => e._id !== currentBox._id);
    });
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const mode = useSelector((state) => (state as any).mode);
  let { data } = useCompany();

  if (data) {
    data = data.map((e: any) => {
      e.key = e._id;
      return e;
    });
  }
  useEffect(() => {
    if (data) {
      setShowData(data);
      setLoading(false);
    }
  }, []);

  function search(term) {
    if (term) {
      const found = data.filter((e) => e.name.toLowerCase().includes(term.toLowerCase()));
      if (found.length > 0) setShowData(found);
      else setShowData((prev) => prev.length > 0 && []);
    } else {
      setShowData(data);
    }
  }
  return (
    <AdminLayout>
      <ManageLayout>
        <>
          <h2 style={{ marginBottom: '50px' }}>ကုမ္ပဏီများ</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={() => router.push('/admin/company/edit/add')}
              style={{ marginBottom: '30px', borderRadius: '5px' }}
            >
              အသစ်ထည့်ပါ
            </Button>
            <div style={{}}>
              <Input
                onChange={(e) => search(e.target.value)}
                style={{ width: '300px' }}
                placeholder="အမည်"
              />
              <Button>ရှာပါ</Button>
            </div>
          </div>
          <Table
            className={mode === 'dark' ? 'black' : ''}
            columns={columns as any}
            dataSource={showData}
            scroll={{ x: 1000, y: 300 }}
            loading={loading}
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

  await queryClient.prefetchQuery('company', fetchCompany);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
