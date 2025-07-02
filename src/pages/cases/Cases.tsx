import { useState } from 'react';
import CasesTab from './CasesTab';
import CasesDashboard from './dash/CasesDashboard';
import OpenCases from './open-cases/OpenCases';
import ClosedCases from './closed-cases/ClosedCases';
import { Button } from 'antd';
import { BiPlus } from 'react-icons/bi';
import Model from '../../components/shared/Modal';
import AddCaseForm from './add-case/AddCaseForm';

const Cases = () => {
      const [tab, setTab] = useState('dashboard');
      const [open, setOpen] = useState(false);
      return (
            <div>
                  <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Cases</h1>
                        <Button
                              onClick={() => setOpen(true)}
                              style={{
                                    height: 42,
                              }}
                              type="text"
                              icon={<BiPlus color="#fff" className="bg-[#0089FC] rounded-full p-1 text-4xl" />}
                        >
                              Add Case
                        </Button>
                  </div>
                  <div className="flex justify-between mb-3">
                        <CasesTab tab={tab} setTab={setTab} />
                  </div>
                  <div className="tab-content">
                        {tab === 'dashboard' && <CasesDashboard />}
                        {tab === 'open' && <OpenCases />}
                        {tab === 'closed' && <ClosedCases />}
                  </div>

                  <Model
                        title="Add Case"
                        width={1000}
                        open={open}
                        setOpen={setOpen}
                        body={<AddCaseForm setOpen={setOpen} />}
                  />
            </div>
      );
};

export default Cases;
