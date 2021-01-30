import { Button, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import ManageLayout from '../../../components/layouts/ManageLayout';
import Image from 'next/image';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

import { Select } from 'antd';
const { Option } = Select;

import axios from 'axios';
import { fetchCategory, fetchCompany, fetchSubcategory } from '../../../hooks';

const ContentWrapper = styled.div`
  display: flex;
  height: 500px;
`;
const PhotoWrapper = styled.div`
  width: 500px;
  height: 530px;
  margin: 0 auto;
  text-align: center;
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const ProductForm = styled.div`
  width: 400px;
`;

const AddProduct: React.FC = () => {
  const hiddenFileInput = useRef(null);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', width: 100, height: 100 });
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState([]);

  const [category, setCategory] = useState([]);
  const [company, setCompany] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    fetchCategory().then((res) => {
      setCategory(res);
    });
    fetchCompany().then((res) => {
      setCompany(res);
    });
    fetchSubcategory().then((res) => {
      setSubcategory(res);
    });
  }, []);
  const uploadHandle = () => {
    hiddenFileInput.current.click();
  };
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileData(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result), false);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onImageLoaded = (image) => {
    console.log('onCropComplete', image);
    setImage(image);
  };

  const onCropComplete = (crop) => {
    console.log('onCropComplete', crop);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };
  return (
    <AdminLayout>
      <ManageLayout>
        <>
          <h2>ပစ္စည်းထည့်ရန်</h2>
          <br />
          <ContentWrapper>
            <PhotoWrapper>
              {fileData.length < 1 && (
                <Image
                  alt="Vercel logo"
                  src="https://i.ibb.co/Hrd6v3L/default-medicine.jpg"
                  width={1000}
                  height={1000}
                />
              )}
              {src && (
                <ReactCrop
                  src={src}
                  crop={crop}
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                />
              )}
              <br />
              <br />
              <Button onClick={uploadHandle}>ပုံတင်ပါ</Button>
              <Button
                onClick={() => {
                  setSrc(null);
                  setImage(null);
                  setFileData([]);
                }}
              >
                ဖျက်ပါ
              </Button>
              <input
                onChange={onSelectFile}
                type="file"
                ref={hiddenFileInput}
                style={{ display: 'none' }}
              />
            </PhotoWrapper>
            <FormWrapper>
              <ProductForm>
                <label htmlFor="name">အမည်</label>
                <div style={{ height: '10px', borderBottom: '1px solid #c7c7c7' }}></div>
                <Input placeholder="Name" id="name" />
                <div style={{ height: '10px' }}></div>
                <label htmlFor="name">Chemical အမည်</label>
                <div style={{ height: '10px', borderBottom: '1px solid #c7c7c7' }}></div>
                <Input placeholder="Chemical Name" id="chemicalname" />
                <div style={{ height: '10px' }}></div>
                <label htmlFor="category">အမျိုးအမည် ရွေးပါ</label>
                <div
                  style={{ width: '600px', height: '10px', borderBottom: '1px solid #c7c7c7' }}
                ></div>
                <Select
                  id="category"
                  showSearch
                  style={{ width: 600 }}
                  placeholder="Select a category"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {category.length > 0 &&
                    category.map((e, i) => {
                      return (
                        <Option key={i} value={e.id}>
                          {e.name}
                        </Option>
                      );
                    })}
                </Select>
                ,
              </ProductForm>
            </FormWrapper>
          </ContentWrapper>
        </>
      </ManageLayout>
    </AdminLayout>
  );
};

export default AddProduct;
