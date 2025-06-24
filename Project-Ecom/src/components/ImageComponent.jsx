import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Image from "../assets/image.jpg";
import { Images, Image1 } from "../assets/Images";

const ImageComponent = () => {
  return (
    <>
      <img src={Image} alt="image" />
      <img src={Images} alt="image" />
      {/* <img src={Image1} alt="image1" /> */}

      <LazyLoadImage
        alt={Image1}
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "1s" },
        }}
        src={Image1}
      />
    </>
  );
};

export default ImageComponent;
