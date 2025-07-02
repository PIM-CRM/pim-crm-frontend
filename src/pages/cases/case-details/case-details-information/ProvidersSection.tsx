import { useState } from 'react';
import { Tag, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ProvidersSection = () => {
      const [providers, setProviders] = useState(['Pro Care', 'Methodist Hospital']);
      const [newProvider, setNewProvider] = useState('');
      const [isAdding, setIsAdding] = useState(false);

      const handleAddProvider = () => {
            if (newProvider.trim() && !providers.includes(newProvider)) {
                  setProviders([...providers, newProvider]);
                  setNewProvider('');
                  setIsAdding(false);
            }
      };

      return (
            <div className="p-4 bg-white rounded-lg border shadow-md">
                  <h2 className="mb-4 text-lg font-semibold text-secondary">Providers</h2>
                  <div className="flex flex-wrap gap-2">
                        {providers.map((provider, index) => (
                              <Tag key={index} color="blue" className="px-4 py-1 text-sm rounded-full">
                                    {provider}
                              </Tag>
                        ))}
                        {isAdding ? (
                              <div className="flex gap-2 items-center">
                                    <Input
                                          size="small"
                                          value={newProvider}
                                          onChange={(e) => setNewProvider(e.target.value)}
                                          placeholder="New Provider"
                                          onPressEnter={handleAddProvider}
                                          className="rounded-full"
                                    />
                                    {/* <Button type="primary" size="small" shape="round" onClick={handleAddProvider}>
                            Add
                        </Button> */}
                                    <Button
                                          type="default"
                                          size="small"
                                          shape="round"
                                          onClick={() => setIsAdding(false)}
                                    >
                                          Cancel
                                    </Button>
                              </div>
                        ) : (
                              <Button
                                    style={{ backgroundColor: '#D8D8D8', color: '#8E8E93' }}
                                    icon={<PlusOutlined />}
                                    size="small"
                                    shape="round"
                                    onClick={() => setIsAdding(true)}
                              >
                                    Add Provider
                              </Button>
                        )}
                  </div>
            </div>
      );
};

export default ProvidersSection;
