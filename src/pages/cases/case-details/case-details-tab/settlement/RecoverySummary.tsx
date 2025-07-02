import { IoWarning } from 'react-icons/io5';

const RecoverySummary = () => {
      return (
            <div className="p-6 text-black bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold">Recovery Summary</h2>
                  <div className="flex justify-between items-center mt-4">
                        <p className="flex items-center mt-2 text-lg">
                              <span className="mr-2 text-[#516578]">Net client compensation</span>
                              <span className="text-xl">
                                    <IoWarning className="text-[#c24e00]" size={18} />
                              </span>
                        </p>
                        <p className="text-xl font-semibold">$694,892.00</p>
                  </div>

                  <div className="pt-4 mt-4 border-t text-[#516578]">
                        <p className="flex justify-between text-sm">
                              <span>Total recovery</span>
                              <span className="font-medium">$1,030,000.00</span>
                        </p>
                        <p className="flex justify-between mt-2 text-sm">
                              <span>Legal fees</span>
                              <span>-$330,000.00</span>
                        </p>
                        <p className="flex justify-between mt-2 text-sm">
                              <span>Matter expenses</span>
                              <span>-$108.00</span>
                        </p>
                        <p className="flex justify-between mt-2 text-sm">
                              <span>Liens & outstanding balances</span>
                              <span>-$5,000.00</span>
                        </p>

                        <p className="flex justify-between mt-4 text-sm font-semibold">
                              <span>Net client compensation</span>
                              <span className="text-xl text-black">$694,892.00</span>
                        </p>
                  </div>
            </div>
      );
};

export default RecoverySummary;
