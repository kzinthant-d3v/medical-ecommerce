import { Button, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import ManageLayout from '../../../components/layouts/ManageLayout';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

import { Select } from 'antd';
const { Option } = Select;

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
  flex: 1;
`;

const FormWrapper = styled.div`
  flex: 1;
  padding-left: 50px;
`;
const ProductForm = styled.div`
  width: 400px;
`;

const AddProduct: React.FC = () => {
  const hiddenFileInput = useRef(null);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', width: 100, height: 93 });
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState([]);

  const [category, setCategory] = useState([]);
  const [categoryNum, setCategoryNum] = useState([{ id: Date.now(), select: '' }]);
  const [company, setCompany] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  const [name, setName] = useState('');
  const [chemicalName, setChemicalName] = useState('');
  const [chosenCategory, setChosenCategory] = useState([]);
  const [chosenCompany, setChosenCompany] = useState(null);
  const [chosenSubCategory, setChosenSubCategory] = useState(null);
  const [subName, setSubName] = useState(null);
  const [pricePerItem, setPricePerItem] = useState(100);
  const [prices, setPrices] = useState([]);

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
              {fileData.length < 1 && <div id="img-sample">Image Here</div>}
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
              <span> </span>
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
                <div style={{ height: '10px' }}></div>

                <Input
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div style={{ height: '10px' }}></div>

                <label htmlFor="name">Chemical အမည်</label>
                <div style={{ height: '10px', borderBottom: '1px solid #c7c7c7' }}></div>
                <div style={{ height: '10px' }}></div>

                <Input
                  value={chemicalName}
                  placeholder="Chemical Name"
                  id="chemicalname"
                  onChange={(e) => setChemicalName(e.target.value)}
                />
                <div style={{ height: '10px' }}></div>
                <div style={{ display: 'flex' }}>
                  <label htmlFor="category">အမျိုးအမည် ရွေးပါ</label>
                  <span>&nbsp;&nbsp; (အသစ်ထည့်ရန်)&nbsp; &nbsp; </span>
                  <Button
                    style={{
                      backgroundColor: '#6ce76a',
                      color: 'white',
                      fontWeight: 'bold',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '1.5rem',
                    }}
                    shape="circle"
                    onClick={() => setCategoryNum([...categoryNum, { id: Date.now(), select: '' }])}
                  >
                    +
                  </Button>
                </div>

                <div
                  style={{ width: '600px', height: '10px', borderBottom: '1px solid #c7c7c7' }}
                ></div>
                <div style={{ height: '10px' }}></div>
                {categoryNum.map((e, i) => {
                  return (
                    <div key={e.id}>
                      <div style={{ display: 'flex', width: '600px' }}>
                        <div style={{ flex: 20 }}>
                          <Select
                            onChange={(value) => {
                              setCategoryNum(
                                categoryNum.map((ele, index) => {
                                  if (i === index) {
                                    ele.select = value.toString();
                                  }
                                  return ele;
                                })
                              );
                            }}
                            key={e.id}
                            id="category"
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Select a category"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {category.length > 0 &&
                              category.map((e, i) => {
                                return (
                                  <Option key={e._id} value={e._id}>
                                    {e.name}
                                  </Option>
                                );
                              })}
                          </Select>
                        </div>
                        <div>&nbsp;</div>
                        <div style={{ flex: 1 }}>
                          {i !== 0 && (
                            <Button
                              style={{
                                backgroundColor: '#b80f09',
                                color: 'white',
                                fontWeight: 'bold',
                                border: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '1.5rem',
                              }}
                              shape="circle"
                              onClick={() => {
                                if (categoryNum.length > 1) {
                                  setCategoryNum(categoryNum.filter((_, index) => index !== i));

                                  const ccopy = [...chosenCategory];
                                  ccopy.splice(i, 1);
                                  setChosenCategory(ccopy);
                                }
                              }}
                            >
                              -
                            </Button>
                          )}
                        </div>
                      </div>
                      <div style={{ height: '10px' }}></div>
                    </div>
                  );
                })}

                <div style={{ height: '10px' }}></div>
                <label htmlFor="category">ကုမ္ပဏီ ရွေးပါ</label>
                <div
                  style={{ width: '600px', height: '10px', borderBottom: '1px solid #c7c7c7' }}
                ></div>
                <div style={{ height: '10px' }}></div>
                <Select
                  onChange={(value) => setChosenCompany(value)}
                  id="category"
                  showSearch
                  style={{ width: 600 }}
                  placeholder="Select a company"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {company.length > 0 &&
                    company.map((e, i) => {
                      return (
                        <Option key={i} value={e.id}>
                          {e.name}
                        </Option>
                      );
                    })}
                </Select>

                <div style={{ height: '10px' }}></div>
                <label htmlFor="category">တစ်ခုခြင်း အမျိုးအစား ရွေးပါ</label>
                <div
                  style={{ width: '600px', height: '10px', borderBottom: '1px solid #c7c7c7' }}
                ></div>
                <div style={{ height: '10px' }}></div>
                <Select
                  onChange={(value: string) => {
                    setSubName(value.split(':')[1]);
                    setChosenSubCategory(value.split(':')[0]);
                  }}
                  id="category"
                  showSearch
                  style={{ width: 600 }}
                  placeholder="Select a subcategory"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {subcategory.length > 0 &&
                    subcategory.map((e, i) => {
                      return (
                        <Option key={i} value={`${e.id}:${e.name}`}>
                          {e.name}
                        </Option>
                      );
                    })}
                </Select>
                <div style={{ height: '10px' }}></div>
                <label htmlFor="price">ဈေးနှုန်းများ</label>
                <div
                  style={{ width: '600px', height: '10px', borderBottom: '1px solid #c7c7c7' }}
                ></div>
                <div style={{ height: '10px' }}></div>
                {chosenSubCategory ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="unit">၁</span>
                      <span>{subName} ဈေး</span>
                      <input
                        value={pricePerItem}
                        onChange={(e) => setPricePerItem(+e.target.value)}
                        className="priceinput"
                        type="number"
                        min={10}
                        max={100000}
                      />
                      <span>ကျပ်</span>
                      <span>&nbsp;&nbsp;</span>
                      <Button
                        style={{
                          backgroundColor: '#6ce76a',
                          color: 'white',
                          fontWeight: 'bold',
                          border: 'none',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '1.5rem',
                        }}
                        shape="circle"
                        onClick={() =>
                          setPrices([...prices, { id: Date.now(), unit: 2, price: 100 }])
                        }
                      >
                        +
                      </Button>
                    </div>
                    <div>
                      {prices.length
                        ? prices.map((e, i) => {
                            return (
                              <div key={e.id} style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                  value={e.unit}
                                  onChange={(evt) => {
                                    setPrices(
                                      prices.map((ele, index) => {
                                        if (i === index) {
                                          ele.unit = +evt.target.value;
                                        }
                                        return ele;
                                      })
                                    );
                                  }}
                                  className="unitinput"
                                  type="number"
                                  min={2}
                                />
                                <span>{subName} ဈေး</span>
                                <input
                                  value={e.price}
                                  onChange={(evt) => {
                                    setPrices(
                                      prices.map((ele, index) => {
                                        if (i === index) {
                                          ele.price = +evt.target.value;
                                        }
                                        return ele;
                                      })
                                    );
                                  }}
                                  className="priceinput"
                                  type="number"
                                  min={10}
                                  max={100000}
                                />
                                <span>ကျပ်</span>
                                <span>&nbsp;&nbsp;</span>
                                <Button
                                  style={{
                                    backgroundColor: '#b80f09',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1.5rem',
                                  }}
                                  shape="circle"
                                  onClick={() =>
                                    setPrices(prices.filter((e, index) => i !== index))
                                  }
                                >
                                  -
                                </Button>
                              </div>
                            );
                          })
                        : ''}
                    </div>
                  </div>
                ) : (
                  <span>တစ်ခုခြင်းအမျိုးအစား အရင်ရွေးပါ</span>
                )}
              </ProductForm>
              <button onClick={() => console.log(categoryNum)}>Check</button>
              <button onClick={() => console.log(prices)}>Check</button>
            </FormWrapper>
          </ContentWrapper>
        </>
      </ManageLayout>
    </AdminLayout>
  );
};

export default AddProduct;
