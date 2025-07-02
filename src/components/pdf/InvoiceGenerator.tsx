import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';
import { Button } from 'antd';
import { FaRegFilePdf } from 'react-icons/fa';
// import { Button } from 'antd';
// import { FaRegFilePdf } from 'react-icons/fa';

interface InvoiceGeneratorProps {
      invoiceData: {
            invoiceNumber: string;
            dueDate: string;
            subject: string;
            billedTo: string;
            currency: string;
            items: Array<{
                  description: string;
                  qty: number;
                  unitPrice: number;
                  amount: number;
            }>;
            subtotal: number;
            total: number;
            amountDue: number;
      };
}

const InvoiceGenerator = ({ invoiceData }: InvoiceGeneratorProps) => {
      return (
            <div className="flex justify-end items-center">
                  <PDFDownloadLink
                        document={<InvoicePDF {...invoiceData} />}
                        fileName={`settlement-invoice.pdf`} //name of the file
                  >
                        {/* {({ loading }) => (
                              <Button
                                    style={{ backgroundColor: '#007aff', boxShadow: 'none' }}
                                    type="primary"
                                    icon={<FaRegFilePdf />}
                                    loading={loading}
                              >
                                    Generate PDF
                              </Button>
                        )} */}
                  </PDFDownloadLink>
                  <Button
                        style={{ backgroundColor: '#007aff', boxShadow: 'none' }}
                        type="primary"
                        icon={<FaRegFilePdf />}
                        // loading={loading}
                  >
                        Generate PDF
                  </Button>
            </div>
      );
};

export default InvoiceGenerator;
