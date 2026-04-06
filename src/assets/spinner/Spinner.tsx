import Image from 'next/image';
import spinnerGif from './spinner.gif';

const Spinner = () => (
  <div className="flex h-screen items-center justify-center">
    <Image
      src={spinnerGif}
      alt="Loading..."
      width={70}
      height={70}
      className="mx-auto block"
      priority
    />
  </div>
);

export default Spinner;
