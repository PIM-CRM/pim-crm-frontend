import CaseCard from './CaseCard';

const CasesDetails = () => {
      return (
            <div>
                  <h2 className="my-4 text-lg font-semibold">Case Details</h2>
                  <div className="overflow-x-auto custom-scrollbar">
                        <div className="flex gap-4 min-w-max">
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                    <h3 className="mb-2 font-medium">Intake / Liability</h3>
                                    <div className="space-y-4">
                                          <p>0</p>
                                          <hr className="h-1 bg-[#F8BF3F]" />
                                    </div>
                                    <div className="mt-4 space-y-3 h-[60vh] overflow-y-scroll custom-scrollbar">
                                          {[...Array(5)].map((_, index) => (
                                                <CaseCard key={index} />
                                          ))}
                                    </div>
                              </div>
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                    <h3 className="mb-2 font-medium">Treatment</h3>
                                    <div className="space-y-4">
                                          <p>3</p>
                                          <hr className="h-1 bg-[#E02020] " />
                                    </div>
                                    <div className="mt-4 space-y-3 h-[60vh] overflow-y-scroll custom-scrollbar">
                                          {[...Array(8)].map((_, index) => (
                                                <CaseCard key={index} />
                                          ))}
                                    </div>
                              </div>
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px] ">
                                    <h3 className="mb-2 font-medium">Records / Bills</h3>
                                    <div className="space-y-4">
                                          <p>10</p>
                                          <hr className="h-1 bg-[#29B000] " />
                                    </div>
                                    <div className="mt-4 space-y-3 h-[60vh] overflow-y-scroll custom-scrollbar ">
                                          {[...Array(1)].map((_, index) => (
                                                <CaseCard key={index} />
                                          ))}
                                    </div>
                              </div>
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                    <h3 className="mb-2 font-medium">Demand</h3>
                                    <div className="space-y-4">
                                          <p>1</p>
                                          <hr className="h-1 bg-[#B61FE0] " />
                                    </div>
                              </div>
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                    <h3 className="mb-2 font-medium">Negotiations</h3>
                                    <div className="space-y-4">
                                          <p>54</p>
                                          <hr className="h-1 bg-[#F96300]" />
                                    </div>
                                    <div className="mt-4 space-y-3 h-[60vh] overflow-y-scroll custom-scrollbar">
                                          {[...Array(4)].map((_, index) => (
                                                <CaseCard key={index} />
                                          ))}
                                    </div>
                              </div>
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                    <h3 className="mb-2 font-medium">Litigation</h3>
                                    <div className="space-y-4">
                                          <p>54</p>
                                          <hr className="h-1 bg-[#44D6B6]" />
                                    </div>
                                    <div className="mt-4 space-y-3 h-[60vh] overflow-y-scroll custom-scrollbar">
                                          {[...Array(8)].map((_, index) => (
                                                <CaseCard key={index} />
                                          ))}
                                    </div>
                              </div>
                              <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                    <h3 className="mb-2 font-medium">Settlement</h3>
                                    <div className="space-y-4">
                                          <p>54</p>
                                          <hr className="h-1 bg-[#2FC5FE]" />
                                    </div>
                                    <div className="mt-4 space-y-3 h-[60vh] overflow-y-scroll custom-scrollbar">
                                          {[...Array(5)].map((_, index) => (
                                                <CaseCard key={index} />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CasesDetails;
