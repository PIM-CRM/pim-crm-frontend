import { BsCloudUpload } from 'react-icons/bs';

type Props = {
      setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
};
const Folders = ({ setSelectedFolder }: Props) => {
      const folders = [
            {
                  name: 'Providers',
                  icon: '/images/folders/provider.png',
            },

            {
                  name: 'Damages',
                  icon: '/images/folders/damages.png',
            },
            {
                  name: 'Expenses',
                  icon: '/images/folders/expenses.png',
            },
            {
                  name: 'Evidence',
                  icon: '/images/folders/evidence.png',
            },
            {
                  name: 'Records',
                  icon: '/images/folders/record.png',
            },
      ];
      return (
            <div>
                  <h2 className="text-lg text-secondary"> Folders</h2>

                  <div className="flex gap-8 justify-center items-center">
                        {folders.map((folder, index) => (
                              <div
                                    onClick={() => setSelectedFolder(folder.name)}
                                    className="flex relative justify-center items-center cursor-pointer w-fit"
                                    key={index}
                              >
                                    <img src={folder.icon} alt={folder.name} className="w-24 h-20" />
                                    <div className="flex absolute top-1/2 left-1/2 flex-col justify-center items-center transform -translate-x-1/2 -translate-y-1/2">
                                          <p className="text-sm text-white">{folder.name}</p>
                                          <p className="p-1 rounded border border-white border-dashed">
                                                <BsCloudUpload color="white" size={16} />
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Folders;
