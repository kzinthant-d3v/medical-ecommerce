import { Button } from 'antd';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import ManageLayout from '../../../components/layouts/ManageLayout';
import Image from 'next/image';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';

import axios from 'axios';

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
`;
const AddProduct: React.FC = () => {
  const hiddenFileInput = useRef(null);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', width: 100, height: 100 });
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState([]);

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
              <input
                onChange={onSelectFile}
                type="file"
                ref={hiddenFileInput}
                style={{ display: 'none' }}
              />
            </PhotoWrapper>
            <FormWrapper></FormWrapper>
          </ContentWrapper>
        </>
      </ManageLayout>
    </AdminLayout>
  );
};

export default AddProduct;
