import MainLayout from './components/layout/MainLayout';
import './App.css';
import { ConfigProvider } from 'antd';
function App() {
      return (
            <>
                  <ConfigProvider
                        theme={{
                              token: {
                                    colorPrimary: '#111111',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: 16,
                              },
                              components: {
                                    Input: {
                                          colorBgContainer: 'transparent',
                                          controlHeight: 42,
                                          activeBorderColor: '#bbbfbf',
                                          hoverBorderColor: '#bbbfbf',
                                          controlOutline: 'transparent',
                                          borderRadius: 90,
                                          colorBorder: '#bbbfbf',
                                    },
                                    Button: {
                                          boxShadow: 'none',
                                          groupBorderColor: 'transparent',
                                    },
                                    DatePicker: {
                                          controlHeight: 42,
                                    },
                                    Select: {
                                          colorBgContainer: '#F4F6F7',
                                          colorPrimaryHover: '#bbbfbf',

                                          optionSelectedBg: '#fff',
                                          controlHeight: 42,
                                          colorBorder: '#bbbfbf',
                                          controlOutline: 'transparent',
                                          controlItemBgActiveHover: '#007AFF',

                                          // borderRadius: 90,
                                    },
                                    Table: {
                                          headerBg: '#f8f8fa',
                                          headerColor: '#838383',
                                          borderColor: 'transparent',
                                    },
                                    Form: {
                                          labelColor: '#414141',
                                          marginLG: 15,
                                    },
                                    Steps: {
                                          controlHeight: 24,
                                    },
                                    Tabs: {
                                          colorPrimary: '#007AFF',
                                          colorText: '#B3B3B3',
                                    },
                              },
                        }}
                  >
                        <MainLayout />
                  </ConfigProvider>
            </>
      );
}

export default App;
