import { Upload, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Link, Text } = Typography;

interface FileUploaderProps {
    name: string;
    multiple: boolean;
    action: string;
    onChange(info: any): void;
    onDrop(e: any): void;
}

const FileUploader = () => {
    const props: FileUploaderProps = {
        name: 'file',
        multiple: true,
        action: '/upload.do',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                console.log(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Dragger {...props} style={{ background: '#f9f9f9', borderRadius: 8 }}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ fontSize: 36 }} />
            </p>
            <p className="ant-upload-text">
                Drag & Drop or <Link>choose file</Link> to upload
            </p>
            <Text type="secondary">Select zip, image, pdf, or ms.word</Text>
        </Dragger>
    );
};

export default FileUploader;
