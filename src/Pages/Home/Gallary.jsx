import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallary = () => {
  const images = [
    {
      original:
        "https://www.lego.com/cdn/cs/set/assets/blt6c32537ba11c66d2/76193.png",
      thumbnail:
        "https://www.lego.com/cdn/cs/set/assets/blt6c32537ba11c66d2/76193.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
      original:
        "https://www.lego.com/cdn/cs/set/assets/blt8000ffd6159e1478/76247.png",
      thumbnail:
        "https://www.lego.com/cdn/cs/set/assets/blt8000ffd6159e1478/76247.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
    {
        original:"https://www.lego.com/cdn/cs/set/assets/blt2c408dc4fb192074/71043.jpg",
        thumbnail:"https://www.lego.com/cdn/cs/set/assets/blt2c408dc4fb192074/71043.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5"
    },
    {
      original:
        "https://www.lego.com/cdn/cs/set/assets/bltb3966e7a5ea39649/76245.png",
      thumbnail:
        "https://www.lego.com/cdn/cs/set/assets/bltb3966e7a5ea39649/76245.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
    },
  ];
  return (
    <div className="my-10   bg-base-200 py-10 rounded-xl">
      <ImageGallery 
        showPlayButton={false}
        showFullscreenButton={false}
      slideOnThumbnailOver={true}

       items={images} />
    </div>
  );
};

export default Gallary;
