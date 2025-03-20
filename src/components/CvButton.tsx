import { MdDownload } from 'react-icons/md';

const CvButton = () => {
  const handleDownload = () => {
    const cvUrl = '/resume/JoelDavidssonResume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Joel Davidsson Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className='bg-[#344e41] text-[#fefae0] px-6 py-3 rounded-md uppercase hover:bg-[#588157] transition'
    >
      <h2 className='flex flex-row items-center'>
        <MdDownload className='mr-2 text-2xl' /> Download my resume
      </h2>
    </button>
  );
};

export default CvButton;
