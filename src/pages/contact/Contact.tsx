import { useState } from 'react';
// import CustomSelect from '../../components/ui/CustomSelect';

import ContactTab from './ContactTab';
import ClientContactTable from './ClientContactTable';
import CompanyContactTable from './CompanyContactTable';
import { Button, Input } from 'antd';
import { BiPlus, BiSearch } from 'react-icons/bi';
import Model from '../../components/shared/Modal';
import ContactForm from '../../components/form/ContactForm';
import CustomSelect from '../../components/ui/CustomSelect';

const Contact = () => {
      const [tab, setTab] = useState('companies');
      const [open, setOpen] = useState(false);

      return (
            <div>
                  <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Contacts</h1>
                        <div className="flex justify-between items-center">
                              <Button
                                    onClick={() => setOpen(true)}
                                    style={{
                                          height: 42,
                                    }}
                                    type="text"
                                    icon={
                                          <BiPlus
                                                color="#fff"
                                                className="p-1 text-4xl text-white bg-blue-500 rounded-full"
                                          />
                                    }
                              >
                                    Add Contact
                              </Button>
                        </div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                        <ContactTab tab={tab} setTab={setTab} />
                        <div className="w-[160px]">
                              <CustomSelect
                                    options={[
                                          { value: 'all', label: 'All' },
                                          { value: 'asc', label: 'Ascending' },
                                          { value: 'desc', label: 'Descending' },
                                    ]}
                              />
                        </div>
                  </div>

                  <div className="mb-4">
                        <div className="flex gap-4">
                              {/* <Select
                                    placeholder="All Categories"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>
                              <Select
                                    placeholder="Assign To"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>
                              <Select
                                    placeholder="Status"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>
                              <Select
                                    placeholder="Date"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select> */}

                              {/* <DatePicker  className="" /> */}
                        </div>
                        <Input
                              prefix={<BiSearch size={20} color="#414141" />}
                              style={{
                                    backgroundColor: '#F4F6F7',
                              }}
                              placeholder="Search"
                              className="mt-3 w-full"
                        />
                  </div>

                  <div className="tab-content">{tab === 'companies' && <CompanyContactTable />}</div>
                  <div className="tab-content">{tab === 'clients' && <ClientContactTable />}</div>

                  <Model title="Add Contact" width={1000} open={open} setOpen={setOpen} body={<ContactForm />} />
            </div>
      );
};

export default Contact;
