import { Avatar, Button, ConfigProvider, Dropdown, Menu, Tooltip } from 'antd';
import { PhoneOutlined, MailOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';
import { DiReact } from 'react-icons/di';
import ProgressSteps from './ProgressTab';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import Model from '../../../../components/shared/Modal';
import DamageForm from '../../../../components/form/DamageForm';
import AddTask from '../../../tasks/AddTask';
import ContactForm from '../../../../components/form/ContactForm';
import NoteForm from '../../../../components/form/NoteForm';
import PimChat from '../../../pim-chat/PimChat';
import MedicalProviderForm from '../../../../components/form/MedicalProviderForm';
import EvidenceForm from '../../../../components/form/EvidenceForm';

const CaseMetadata = () => {
      const [modalKey, setModalKey] = useState<string | null>(null);
      const [refreshKey, setRefreshKey] = useState(0);
      const [pimChatOpen, setPimChatOpen] = useState(false);

      const handleMenuClick = (e: any) => {
            setModalKey(e.key);
            setRefreshKey((prevKey) => prevKey + 1);
      };

      const menu = (
            <Menu
                  onClick={handleMenuClick}
                  items={[
                        { label: 'Tasks', key: 'Tasks' },
                        { label: 'Contacts', key: 'Contacts' },
                        { label: 'Notes', key: 'Notes' },
                        // { label: 'Medical Bill', key: 'Medical Bill' },
                        // { label: 'Medical Record', key: 'Medical Record' },
                        { label: 'Medical Provider', key: 'Medical Provider' },
                        { label: 'Damages', key: 'Damages' },
                        { label: 'Evidence', key: 'Evidence' },
                  ]}
            />
      );

      return (
            <div className="">
                  <div className="flex justify-between items-center pb-4">
                        <div className="flex gap-5 items-center">
                              <div>
                                    <h2 className="text-xl font-semibold">John Wayne vs. State-Farm</h2>
                                    <p className="text-gray-500">Statutory Date : 20 Dec 2024</p>
                              </div>
                              <div className="flex items-center space-x-4">
                                    <Avatar.Group>
                                          <Avatar src="/user.svg" />
                                          <Avatar src="/user.svg" />
                                          <Avatar src="/user.svg" />
                                          <Tooltip title="2 more users">
                                                <Avatar style={{ backgroundColor: '#87d068' }}>+2</Avatar>
                                          </Tooltip>
                                    </Avatar.Group>
                              </div>
                        </div>

                        <div className="flex mt-4 space-x-4">
                              <Button icon={<PhoneOutlined className="text-[#999999]" />} />
                              <Button icon={<MailOutlined className="text-[#999999]" />} />
                              <Button icon={<BellOutlined className="text-[#999999]" />} />
                              <Button icon={<MessageOutlined className="text-[#999999]" />} />
                              <Button
                                    onClick={() => setPimChatOpen(true)}
                                    icon={<DiReact />}
                                    style={{
                                          border: '1px solid #007AFF',
                                          color: '#007AFF',
                                    }}
                                    type="text"
                                    className="ml-auto"
                              >
                                    PIM AI
                              </Button>
                              <ConfigProvider
                                    theme={{
                                          components: {
                                                Dropdown: {
                                                      colorBgContainer: '#007AFF',
                                                      colorText: '#000',
                                                },
                                          },
                                    }}
                              >
                                    <Dropdown overlay={menu} trigger={['click']}>
                                          <Button
                                                style={{
                                                      width: 120,
                                                      height: 35,
                                                      color: '#fff',
                                                      backgroundColor: '#007AFF',
                                                      borderRadius: '6px',
                                                      fontSize: '16px',
                                                      textAlign: 'center',
                                                }}
                                          >
                                                Add <BiChevronDown size={16} color="#fff" />
                                          </Button>
                                    </Dropdown>
                              </ConfigProvider>
                        </div>
                  </div>

                  <ProgressSteps />

                  {modalKey === 'Tasks' && (
                        <Model
                              key={`tasks-${refreshKey}`}
                              title="New Task"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<AddTask />}
                        />
                  )}
                  {modalKey === 'Contacts' && (
                        <Model
                              key={`contacts-${refreshKey}`}
                              title="New Contact"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<ContactForm />}
                        />
                  )}

                  {modalKey === 'Medical Provider' && (
                        <Model
                              key={`medical-provider-${refreshKey}`}
                              title="New Medical Provider"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<MedicalProviderForm />}
                        />
                  )}
                  {modalKey === 'Notes' && (
                        <Model
                              key={`notes-${refreshKey}`}
                              title="New Note"
                              width={600}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<NoteForm />}
                        />
                  )}
                  {modalKey === 'Damages' && (
                        <Model
                              key={`damages-${refreshKey}`}
                              title="New Damage"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<DamageForm />}
                        />
                  )}
                  {modalKey === 'Evidence' && (
                        <Model
                              key={`evidence-${refreshKey}`}
                              title="New Evidence"
                              width={600}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<EvidenceForm />}
                        />
                  )}

                  <Model title="Pim Chat" width={800} open={pimChatOpen} setOpen={setPimChatOpen} body={<PimChat />} />
            </div>
      );
};

export default CaseMetadata;
