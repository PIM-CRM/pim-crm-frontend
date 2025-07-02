import { useState } from 'react';
import InvoiceGenerator from '../../../../../components/pdf/InvoiceGenerator';
import CaseExpenses from './CaseExpenses';
import MedicalLiens from './MedicalLiens';
import RecoveryAmounts from './RecoverAmount';
import RecoverySummary from './RecoverySummary';
import RegalFees from './RegalFees';

const Settlement = () => {
      const [invoiceData] = useState({
            invoiceNumber: 'INV-' + new Date().getTime(),
            dueDate: new Date().toISOString().split('T')[0],
            subject: 'Settlement Invoice',
            billedTo: 'Client Name',
            currency: 'USD',
            items: [
                  // Recovery Amounts
                  {
                        description: 'Recovery from State Farm',
                        qty: 1,
                        unitPrice: 50000.0,
                        amount: 50000.0,
                  },
                  {
                        description: 'Recovery from Progressive',
                        qty: 1,
                        unitPrice: 100000.0,
                        amount: 100000.0,
                  },
                  {
                        description: 'Recovery from Liberty Mutual',
                        qty: 1,
                        unitPrice: 200000.0,
                        amount: 200000.0,
                  },
                  // Legal Fees
                  {
                        description: 'Legal Fee - Carli Bryant (35% of $1,000,000.00 from All-State)',
                        qty: 1,
                        unitPrice: 297000.0,
                        amount: 297000.0,
                  },
            ],
            subtotal: 647000.0,
            total: 647000.0,
            amountDue: 647000.0,
      });

      return (
            <div className="h-[60vh] overflow-y-scroll hide-scrollbar">
                  <InvoiceGenerator invoiceData={invoiceData} />

                  <RecoverySummary />
                  <RecoveryAmounts />
                  <RegalFees />
                  <CaseExpenses />
                  <MedicalLiens />
            </div>
      );
};

export default Settlement;
