const getFileIcon = (fileType: string) => {
      switch (fileType) {
            case 'pdf':
                  return <img className="w-[40px] h-[40px]" src="/new-icons/pdf.svg" alt="" />;
            case 'jpg':
            case 'png':
                  return <img className="w-[40px] h-[40px]" src="/new-icons/image.png" alt="" />;
            case 'csv':
                  return <img className="w-[40px] h-[40px]" src="/new-icons/xls.svg" alt="" />;
            case 'docx':
                  return <img className="w-[40px] h-[40px]" src="/new-icons/doc.svg" alt="" />;
            default:
                  return <img className="w-[40px] h-[40px]" src="/new-icons/pdf.svg" alt="" />;
      }
};
export default getFileIcon;
