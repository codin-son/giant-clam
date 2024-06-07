import pic1 from "/src/assets/giant-clam/Giant_clam_detail.jpg";
import pic2 from "/src/assets/giant-clam/giant-clam.jpg";
import pic3 from "/src/assets/giant-clam/IMG_2910.JPG";
import pic4 from "/src/assets/giant-clam/IMG_6231.jpg";
import pic5 from "/src/assets/giant-clam/mantle.jpg";
import pic6 from "/src/assets/giant-clam/P3190491.JPG";

const Frame = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={pic1}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={pic2}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={pic3}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={pic4}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={pic5}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={pic6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame;