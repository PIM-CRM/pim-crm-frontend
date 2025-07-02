import OpenCaseTable from './OpenCaseTable';

import CustomSelect from '../../../components/ui/CustomSelect';

const OpenCases = () => {
      return (
            <div>
                  <div className="flex gap-3 justify-end mb-3">
                        <CustomSelect
                              options={[
                                    { value: 'all', label: 'All' },
                                    { value: 'today', label: 'Today' },
                                    { value: 'yesterday', label: 'Yesterday' },
                                    { value: 'week', label: 'This Week' },
                                    { value: 'month', label: 'This Month' },
                                    { value: 'year', label: 'This Year' },
                              ]}
                        />
                  </div>
                  <div>
                        <OpenCaseTable />
                  </div>
            </div>
      );
};

export default OpenCases;
