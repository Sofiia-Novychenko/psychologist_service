import { PulseLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg-main/50 z-50">
      <PulseLoader color="#3470ff" size={25} />
    </div>
  );
}

export default Loader;
