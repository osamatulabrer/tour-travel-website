

const BannerPic = ({bannerImg})=>{
    const bgImage = {
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      };
    return(
        <div style={bgImage} className="w-full h-[400px]">
            
        </div>
    )
}
export default BannerPic;