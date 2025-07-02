import { useState } from 'react';

const Intake3New = () => {
      const [selectedGender, setSelectedGender] = useState<string | null>('male');

      const maleImage = '/images/human-male.png';
      const femaleImage = '/images/human-female.png';

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="p-6 w-full">
                        <h2 className="mb-6 text-xl font-bold text-center text-black">
                              What types of injuries did you sustain?
                        </h2>
                        {/* <p className="mb-4 text-sm text-center text-red-500">Please make selection to continue</p> */}

                        <div className="flex gap-4 justify-center mb-4">
                              <button
                                    onClick={() => setSelectedGender('male')}
                                    className={`py-2 px-6 rounded-lg text-lg ${
                                          selectedGender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                              >
                                    Male
                              </button>
                              <button
                                    onClick={() => setSelectedGender('female')}
                                    className={`py-2 px-6 rounded-lg text-lg ${
                                          selectedGender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                              >
                                    Female
                              </button>
                        </div>
                        {/* Display Image Based on Gender */}
                        {selectedGender && (
                              <div className="mt-4">
                                    <img
                                          src={selectedGender === 'male' ? maleImage : femaleImage}
                                          alt={selectedGender}
                                          className="w-full h-auto rounded-lg"
                                    />
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Intake3New;
