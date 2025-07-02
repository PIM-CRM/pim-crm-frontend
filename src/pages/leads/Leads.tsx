import { useState } from 'react';
import LeadsTab from './LeadsTab';
import Campaign from './campaign/Campaign';
import Opportunity from './opportunity/Opportunity';
import AddOpportunity from './opportunity/AddOpportunity';
import Model from '../../components/shared/Modal';
import { Button } from 'antd';
import { BiPlus } from 'react-icons/bi';

const Leads = () => {
      const [tab, setTab] = useState('campaigns');
      const [open, setOpen] = useState(false);

      return (
            <div>
                  <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Leads</h1>
                        <Button
                              onClick={() => setOpen(true)}
                              style={{
                                    height: 42,
                              }}
                              type="text"
                              icon={
                                    <BiPlus color="#fff" className="p-1 text-4xl text-white bg-blue-500 rounded-full" />
                              }
                        >
                              Add Opportunity
                        </Button>
                  </div>
                  <LeadsTab tab={tab} setTab={setTab} />
                  <div className="tab-content">{tab === 'campaigns' && <Campaign />}</div>
                  <div className="tab-content">{tab === 'opportunities' && <Opportunity />}</div>

                  <Model title="Add Opportunity" width={1000} open={open} setOpen={setOpen} body={<AddOpportunity />} />
            </div>
      );
};

export default Leads;
