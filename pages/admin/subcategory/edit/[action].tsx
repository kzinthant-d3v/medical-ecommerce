import { Button, Spin } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AdminLayout } from '../../../../components/layouts/AdminLayout';
import ManageLayout from '../../../../components/layouts/ManageLayout';
import { mutate } from '../../../../utils/ajax';

export default function EditCategory(): JSX.Element {
  const router = useRouter();
  const [title, setTitle] = useState('တစ်ခုခြင်း အသစ်ထည့်ရန်');
  const [input, setInput] = useState<string>('');
  const [btnText, setBtnText] = useState('ထည့်ပါ');
  const [loading, setLoading] = useState(false);

  async function handleClick(): Promise<void> {
    if (router.query.action === 'add') {
      setLoading(true);
      await mutate(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/subcategories`, 'POST', {
        catName: input,
      });
      router.push('/admin/subcategory');
    } else {
      setLoading(true);
      await mutate(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/subcategories`, 'PUT', {
        newName: input,
        id: router.query.id,
      });
      router.push('/admin/subcategory');
    }
  }
  useEffect(() => {
    router.query.action === 'change'
      ? (setTitle('အမျိုးအမည် ပြောင်းရန်'),
        setInput(router.query.name ? (router.query.name as string) : ''),
        setBtnText('ပြောင်းပါ'))
      : '';
  }, [router]);
  return (
    <AdminLayout>
      <ManageLayout>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <Spin />
          </div>
        ) : (
          <>
            <h2>{title}</h2>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <TextArea
                value={input}
                onInput={(e) => setInput((e.target as any).value)}
                style={{ width: '500px' }}
                placeholder="တစ်ခုခြင်း အမည် ထည့်ပါ"
                autoSize
              />
              <Button
                type="primary"
                onClick={handleClick}
                disabled={router.query.name === input || !input}
              >
                {btnText}
              </Button>
              <br />
              <br />
              <br />

              <Button onClick={() => router.push('/admin/subcategory')} danger>
                နောက်သို့{' '}
              </Button>
            </div>
          </>
        )}
      </ManageLayout>
    </AdminLayout>
  );
}
