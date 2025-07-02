const AdCard = () => {
      const platforms = [
            {
                  platform: 'Facebook',
                  logo: '/icons/fb.png',
                  stats: [
                        { label: 'Spend', value: '36.05', change: -15 },
                        { label: 'CPA', value: '12,000', change: -20 },
                        { label: 'CPC', value: '10', change: 90 },
                        { label: 'Clicks', value: '50.00', change: 1.2 },
                  ],
            },
            {
                  platform: 'Google Ads',
                  logo: '/icons/ads.png',
                  stats: [
                        { label: 'Spend', value: '36.05', change: -15 },
                        { label: 'CPA', value: '12,000', change: -20 },
                        { label: 'CPC', value: '10', change: 90 },
                        { label: 'Clicks', value: '50.00', change: 1.2 },
                  ],
            },
            {
                  platform: 'Call Tracking',
                  logo: '/icons/twillo.svg',
                  stats: [
                        { label: 'Total agents', value: '1,271', change: 5 },
                        { label: 'Total contacts', value: '1,951', change: 10 },
                        { label: '% calls through API contact', value: '10.97%', change: -3 },
                        { label: '% calls handled', value: '65.15%', change: 2 },
                        { label: '% calls queued', value: '67.91%', change: -1 },
                        { label: '% calls handled from queue', value: '95.92%', change: 4 },
                  ],
            },
      ];

      return (
            <div className="grid grid-cols-3 gap-4 w-full">
                  {platforms.map((platformData) => (
                        <div key={platformData.platform} className="bg-[#EFF1F4] p-6 space-y-5 rounded-lg w-full">
                              {/* Header */}
                              <div className="flex items-center mb-4">
                                    <img
                                          src={platformData.logo}
                                          alt={platformData.platform}
                                          className="mr-3 w-10 h-10"
                                    />
                                    <h3 className="text-lg font-semibold">{platformData.platform}</h3>
                              </div>

                              {/* Stats */}
                              {platformData.stats.map((stat, index) => (
                                    <div key={index} className="flex justify-between items-center mb-2">
                                          <p className="text-sm text-gray-600">{stat.label}</p>
                                          <div className="flex items-center">
                                                <p className="text-sm font-semibold">{stat.value}</p>
                                                <span
                                                      className={`ml-2 text-xs font-semibold ${
                                                            stat.change > 0 ? 'text-green-500' : 'text-red-500'
                                                      }`}
                                                >
                                                      {stat.change > 0 ? `+${stat.change}%` : `${stat.change}%`}
                                                </span>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  ))}
            </div>
      );
};

export default AdCard;
