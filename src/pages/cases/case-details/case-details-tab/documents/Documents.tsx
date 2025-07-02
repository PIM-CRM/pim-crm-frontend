import Folders from './Folders';
import { useState } from 'react';

import RecordTable from './RecordTable';
import EvidenceTable from './EvidenceTable';
import DamagesTable from './DamagesTable';
import { Button, Checkbox, Input } from 'antd';
import { BiChevronDown } from 'react-icons/bi';
import { PiSpotifyLogoLight } from 'react-icons/pi';
import ExpensesTable from './ExpensesTable';
import ProviderTable from './ProvidersTable';

const Documents = () => {
      const [selectedFolder, setSelectedFolder] = useState<string>('Providers');
      return (
            <div className="h-[60vh] overflow-y-scroll hide-scrollbar">
                  <Folders setSelectedFolder={setSelectedFolder} />

                  <div className="mx-auto my-2">
                        <div className="flex items-center p-2 space-x-2 bg-[#f8f8fa] rounded-lg shadow-sm">
                              <Checkbox />

                              <Input
                                    placeholder="Search"
                                    style={{
                                          width: '305px',
                                          height: '30px',
                                          borderRadius: 6,
                                          borderColor: 'transparent',
                                          backgroundColor: 'white',
                                    }}
                              />

                              <div className="flex items-center">
                                    <Button
                                          type="text"
                                          icon={<PiSpotifyLogoLight color="#A5A5A5" size={20} />}
                                          className="!flex !items-center !justify-center"
                                    >
                                          <div className="h-4 bg-[#A5A5A5] w-[2px]"></div>
                                          <BiChevronDown color="#A5A5A5" size={24} />
                                    </Button>
                              </div>
                        </div>
                  </div>

                  {selectedFolder === 'Providers' && <ProviderTable />}
                  {selectedFolder === 'Damages' && <DamagesTable />}
                  {selectedFolder === 'Expenses' && <ExpensesTable />}
                  {selectedFolder === 'Evidence' && <EvidenceTable />}
                  {selectedFolder === 'Records' && <RecordTable />}
            </div>
      );
};

export default Documents;
