import desktop from "../../assets/images/image-web-3-desktop.jpg"
import mobile from "../../assets/images/image-web-3-mobile.jpg"
import ContentSection from "./ContentSection";

function MainSection() {
  return (
    <div className="container__main container items-center flex flex-col justify-between">
      <img
        className="img__main sm:pe-4 hidden sm:block"
        src={desktop}
        alt="Web 3.0 Desktop"
      />
      <img 
        className="max-w-full h-auto block sm:hidden w-[320px]"
        src={mobile}
        alt="Web 3.0 Mobile"  
      />
      <ContentSection />
    </div>
  );
}

export default MainSection;
