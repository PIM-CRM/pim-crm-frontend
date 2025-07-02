import { Image } from 'antd';

const Files = () => {
      return (
            <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Files</h2>
                  <div className="grid grid-cols-3">
                        {[...Array(6)].map((_, i) => (
                              <div key={i} className="p-2">
                                    <div className="flex items-center space-x-2">
                                          <Image
                                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                                alt=""
                                                className="w-12 h-12"
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <p className="text-sm">File {i + 1}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Files;
