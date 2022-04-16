import logo from '../imgs/coding.webp';

const BLOB_1 = (
  <svg
    aria-label="Blob"
    className="home__blob"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g mask="url(#mask0)">
      <path
        d="M48.1,-64.4C59.9,-57.6,65.4,-40.3,71.6,-22.9C77.8,-5.4,84.7,12.2,80.5,26.4C76.2,40.7,60.8,51.6,45.5,58C30.3,64.3,15.1,66.2,0.5,65.5C-14.1,64.8,-28.2,61.5,-40.2,54.1C-52.3,46.7,-62.2,35,-67.2,21.4C-72.2,7.8,-72.3,-7.9,-67.1,-21.1C-61.8,-34.4,-51.3,-45.3,-39.3,-52C-27.2,-58.8,-13.6,-61.5,2.3,-64.6C18.1,-67.7,36.3,-71.3,48.1,-64.4Z"
        transform="translate(100 100)"
      />
      <image className="home__blob_img" xlinkHref={logo} x="27" y="15" />
    </g>
  </svg>
);

export default BLOB_1;
