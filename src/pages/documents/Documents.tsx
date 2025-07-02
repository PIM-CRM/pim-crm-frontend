import { useState } from 'react';
import DocumentMetadata from './DocumentMetadata';
import DocumentTable from './DocumentTable';
import Model from '../../components/shared/Modal';
import AddDocument from './AddDocument';

const Documents = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <DocumentMetadata setOpen={setOpen} />
            <DocumentTable />

            <Model
                title="Add Document"
                width={1000}
                open={open}
                setOpen={setOpen}
                body={<AddDocument setOpen={setOpen} />}
            />
        </div>
    );
};

export default Documents;
