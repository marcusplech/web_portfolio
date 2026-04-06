import Image from 'next/image';
import logo from '@/assets/imgs/profile.png';

const Blob = (
  <div className="home__portrait-wrap">
    <Image
      src={logo}
      alt="Portrait of Marcus Plech"
      className="home__portrait"
      fill
      priority
      sizes="(max-width: 350px) 168px, (max-width: 768px) 208px, 252px"
    />
  </div>
);

export default Blob;
