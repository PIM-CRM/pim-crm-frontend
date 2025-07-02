import { useState } from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
    const [links, _setLinks] = useState([
        { id: 1, name: 'Link 1', url: 'https://example.com', isShared: true },
        { id: 2, name: 'Link 2', url: 'https://example.com', isSent: true },
        { id: 3, name: 'Link 3', url: 'https://example.com' },
        { id: 4, name: 'Link 4', url: 'https://example.com' },
        { id: 5, name: 'Link 5', url: 'https://example.com' },
        { id: 6, name: 'Link 6', url: 'https://example.com' },
        { id: 7, name: 'Link 7', url: 'https://example.com' },
        { id: 8, name: 'Link 8', url: 'https://example.com' },
        { id: 9, name: 'Link 9', url: 'https://example.com' },
        { id: 10, name: 'Link 10', url: 'https://example.com' },
    ]);

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Shared Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                {links.map((link) => (
                    <div
                        key={link.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12  flex justify-center items-center">
                                <img
                                    className="w-8 h-8 object-contain"
                                    src={`https://www.google.com/s2/favicons?domain=${link.url}`}
                                    alt="link icon"
                                />
                            </div>

                            <div className="flex-1">
                                <Link
                                    to={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-blue-500 hover:underline"
                                >
                                    {link.url}
                                </Link>

                                <div className="mt-2 flex space-x-2">
                                    {link.isShared && (
                                        <span className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
                                            Shared
                                        </span>
                                    )}
                                    {link.isSent && (
                                        <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full">
                                            Sent
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Links;
