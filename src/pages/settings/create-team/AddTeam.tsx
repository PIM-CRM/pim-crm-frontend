// import React, { useState } from 'react';
// import { Form, Input, Button, Upload, message } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

// const AddTeam: React.FC = () => {
//     const [form] = Form.useForm();
//     const [imageUrl, setImageUrl] = useState<string | null>(null);

//     const handleImageUpload = (info: any) => {
//         const file = info.file;
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setImageUrl(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleFinish = (values: { name: string; title: string }) => {
//         console.log('Form Values:', { ...values, imageUrl });
//         message.success('Team member added successfully!');
//         form.resetFields();
//         setImageUrl(null);
//     };

//     return (
//         <div className="p-6 border rounded-xl shadow-lg">
//             <h2 className="text-lg font-semibold mb-4">Add Team Member</h2>
//             <Form form={form} layout="vertical" onFinish={handleFinish} autoComplete="off" className="space-y-4">
//                 {/* Image Upload */}
//                 <Form.Item label="Profile Image">
//                     <Upload showUploadList={false} beforeUpload={() => false} onChange={handleImageUpload}>
//                         <div className="w-24 h-24 border rounded-md flex justify-center items-center overflow-hidden bg-gray-100 cursor-pointer">
//                             {imageUrl ? (
//                                 <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
//                             ) : (
//                                 <PlusOutlined style={{ fontSize: 24, color: '#aaa' }} />
//                             )}
//                         </div>
//                     </Upload>
//                 </Form.Item>

//                 {/* Name */}
//                 <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the name!' }]}>
//                     <Input placeholder="Enter name" />
//                 </Form.Item>

//                 {/* Title */}
//                 <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title!' }]}>
//                     <Input placeholder="Enter title" />
//                 </Form.Item>

//                 {/* Submit Button */}
//                 <Form.Item>
//                     <Button
//                         type="primary"
//                         htmlType="submit"
//                         className="w-full"
//                         style={{ backgroundColor: '#007AFF', height: 40, boxShadow: 'none' }}
//                     >
//                         Add Team
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     );
// };

// export default AddTeam;
