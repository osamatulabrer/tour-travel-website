

const BannerPic = ({ bannerImg }) => {


  const bgImage = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", 
  };

  return (
    <div
      data-aos="zoom-in"
      style={bgImage}
      className="w-full"
    ></div>
  );
};

export default BannerPic;
