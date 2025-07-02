import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
      page: {
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            padding: 30,
      },
      header: {
            marginBottom: 20,
      },
      invoiceNumber: {
            fontSize: 12,
            marginBottom: 20,
      },
      row: {
            flexDirection: 'row',
            marginBottom: 10,
      },
      column: {
            flex: 1,
      },
      label: {
            fontSize: 10,
            color: '#666',
            marginBottom: 5,
      },
      value: {
            fontSize: 11,
            color: '#333',
      },
      table: {
            marginTop: 20,
      },
      tableHeader: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#EEE',
            paddingBottom: 5,
            marginBottom: 10,
      },
      tableHeaderCell: {
            fontSize: 10,
            color: '#666',
      },
      description: {
            flex: 3,
      },
      qty: {
            flex: 1,
            textAlign: 'center',
      },
      unitPrice: {
            flex: 1,
            textAlign: 'right',
      },
      amount: {
            flex: 1,
            textAlign: 'right',
      },
      totals: {
            marginTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#EEE',
            paddingTop: 10,
      },
      totalRow: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 5,
      },
      totalLabel: {
            fontSize: 11,
            marginRight: 50,
      },
      totalValue: {
            fontSize: 11,
            width: 100,
            textAlign: 'right',
      },
});

interface InvoiceItem {
      description: string;
      qty: number;
      unitPrice: number;
      amount: number;
}

interface InvoiceProps {
      invoiceNumber: string;
      dueDate: string;
      subject: string;
      billedTo: string;
      currency: string;
      items: InvoiceItem[];
      subtotal: number;
      total: number;
      amountDue: number;
}

const InvoicePDF = ({
      invoiceNumber,
      dueDate,
      subject,
      billedTo,
      currency,
      items,
      subtotal,
      total,
      amountDue,
}: InvoiceProps) => (
      <Document>
            <Page size="A4" style={styles.page}>
                  {/* Invoice Number */}
                  <View style={styles.header}>
                        <Text style={styles.invoiceNumber}>{invoiceNumber}</Text>
                  </View>

                  {/* Invoice Details */}
                  <View style={styles.row}>
                        <View style={styles.column}>
                              <Text style={styles.label}>Due date</Text>
                              <Text style={styles.value}>{dueDate}</Text>
                        </View>
                        <View style={styles.column}>
                              <Text style={styles.label}>Subject</Text>
                              <Text style={styles.value}>{subject}</Text>
                        </View>
                  </View>

                  <View style={styles.row}>
                        <View style={styles.column}>
                              <Text style={styles.label}>Billed to</Text>
                              <Text style={styles.value}>{billedTo}</Text>
                        </View>
                        <View style={styles.column}>
                              <Text style={styles.label}>Currency</Text>
                              <Text style={styles.value}>{currency}</Text>
                        </View>
                  </View>

                  {/* Table Header */}
                  <View style={styles.table}>
                        <View style={styles.tableHeader}>
                              <Text style={[styles.tableHeaderCell, styles.description]}>DESCRIPTION</Text>
                              <Text style={[styles.tableHeaderCell, styles.qty]}>QTY</Text>
                              <Text style={[styles.tableHeaderCell, styles.unitPrice]}>UNIT PRICE</Text>
                              <Text style={[styles.tableHeaderCell, styles.amount]}>AMOUNT</Text>
                        </View>

                        {/* Table Items */}
                        {items.map((item, index) => (
                              <View key={index} style={[styles.row, { marginBottom: 5 }]}>
                                    <Text style={[styles.value, styles.description]}>{item.description}</Text>
                                    <Text style={[styles.value, styles.qty]}>{item.qty}</Text>
                                    <Text style={[styles.value, styles.unitPrice]}>{item.unitPrice.toFixed(2)}</Text>
                                    <Text style={[styles.value, styles.amount]}>{item.amount.toFixed(2)}</Text>
                              </View>
                        ))}
                  </View>

                  {/* Totals */}
                  <View style={styles.totals}>
                        <View style={styles.totalRow}>
                              <Text style={styles.totalLabel}>Subtotal</Text>
                              <Text style={styles.totalValue}>{subtotal.toFixed(2)}</Text>
                        </View>
                        <View style={styles.totalRow}>
                              <Text style={styles.totalLabel}>Total</Text>
                              <Text style={styles.totalValue}>{total.toFixed(2)}</Text>
                        </View>
                        <View style={styles.totalRow}>
                              <Text style={styles.totalLabel}>Amount due</Text>
                              <Text style={styles.totalValue}>{amountDue.toFixed(2)}</Text>
                        </View>
                  </View>
            </Page>
      </Document>
);

export default InvoicePDF;
