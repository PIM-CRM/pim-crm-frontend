import React from 'react';
import { ConfigProvider, Table, Tooltip } from 'antd';
import Model from '../../../../../components/shared/Modal';
import { BsCameraVideo, BsImage } from 'react-icons/bs';

const EvidenceTable = () => {
      const [isModalOpen, setIsModalOpen] = React.useState(false);
      const [currentPreview, setCurrentPreview] = React.useState<string | null>(null);
      const [previewType, setPreviewType] = React.useState<string | null>(null);

      // Sample Evidence Data
      const evidenceData = [
            {
                  key: '1',
                  evidenceType: 'Image',
                  evidence: '/video/photo.jpg',
                  description: 'Accident photo taken at the scene.',
                  uploadedDate: '2025-01-01',
            },
            {
                  key: '2',
                  evidenceType: 'Video',
                  evidence: '/video/video.mp4',
                  description: 'Surveillance footage of the incident.',
                  uploadedDate: '2025-01-02',
            },
      ];

      const handlePreview = (evidence: string, type: string) => {
            setCurrentPreview(evidence);
            setPreviewType(type);
            setIsModalOpen(true);
      };

      // Table Columns
      const columns = [
            {
                  title: 'Preview',
                  dataIndex: 'evidence',
                  key: 'evidence',
                  render: (evidence: string, record: any) => {
                        if (record.evidenceType === 'Image') {
                              return (
                                    <img
                                          src={evidence}
                                          alt="Evidence"
                                          style={{ width: '80px', cursor: 'pointer' }}
                                          onClick={() => handlePreview(evidence, 'Image')}
                                    />
                              );
                        } else if (record.evidenceType === 'Video') {
                              return (
                                    <video
                                          src={evidence}
                                          style={{ width: '80px', cursor: 'pointer' }}
                                          onClick={() => handlePreview(evidence, 'Video')}
                                          muted
                                    />
                              );
                        }
                  },
            },

            {
                  title: 'Type',
                  dataIndex: 'evidenceType',
                  key: 'evidenceType',
                  render: (evidenceType: string) => (
                        <div className="flex gap-2 items-center">
                              <p>
                                    {' '}
                                    {evidenceType == 'Image' ? (
                                          <BsImage size={20} color="#29B000" />
                                    ) : (
                                          <BsCameraVideo size={20} color="#7E7E7E" />
                                    )}
                              </p>
                              <p>{evidenceType}</p>
                        </div>
                  ),
            },

            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
                  render: () => <div className="bg-[#74d0fb] size-3 rounded-full"></div>,
            },
            {
                  title: 'Description',
                  dataIndex: 'description',
                  key: 'description',
            },
            {
                  title: 'Uploaded Date',
                  dataIndex: 'uploadedDate',
                  key: 'uploadedDate',
            },
            {
                  title: 'Actions',
                  dataIndex: 'actions',
                  key: 'actions',
                  render: () => (
                        <div className="flex gap-2 items-center">
                              <Tooltip title="Note">
                                    <img className="cursor-pointer" src="/icons/action/squre.png" alt="" />
                              </Tooltip>
                              <Tooltip title="Signature">
                                    <img className="cursor-pointer" src="/icons/action/pen.png" alt="" />
                              </Tooltip>
                              <Tooltip title="Download">
                                    <img className="cursor-pointer" src="/icons/action/right.png" alt="" />
                              </Tooltip>
                              <Tooltip title="Delete">
                                    <img className="cursor-pointer" src="/icons/action/trash.png" alt="" />
                              </Tooltip>
                              <Tooltip title="More">
                                    <img className="cursor-pointer" src="/icons/action/ellipsis.png" alt="" />
                              </Tooltip>
                        </div>
                  ),
            },
      ];

      return (
            <div>
                  <h3 className="my-4">Evidence Table</h3>
                  <ConfigProvider
                        theme={{
                              components: {
                                    Table: {
                                          headerBg: '#ffffff',
                                    },
                              },
                        }}
                  >
                        <Table
                              columns={columns}
                              dataSource={evidenceData}
                              bordered
                              pagination={false}
                              scroll={{ x: 'max-content' }}
                        />
                  </ConfigProvider>

                  {/* Preview Modal */}
                  <Model
                        width={1000}
                        title="Evidence Preview"
                        open={isModalOpen}
                        setOpen={setIsModalOpen}
                        body={
                              <div>
                                    {previewType === 'Image' && currentPreview && (
                                          <img src={currentPreview} alt="Evidence" style={{ width: '100%' }} />
                                    )}
                                    {previewType === 'Video' && currentPreview && (
                                          <video controls style={{ width: '100%' }} src={currentPreview} />
                                    )}
                              </div>
                        }
                  />
            </div>
      );
};

export default EvidenceTable;
