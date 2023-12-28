import ContentSection from "./ContentSection";

function MainSection() {
  return (
    <div className="container__main container items-center flex flex-col justify-between">
      <img
        className="img__main sm:pe-4 hidden sm:block"
        src="\src\assets\images\image-web-3-desktop.jpg"
        alt="Web 3.0 Desktop"
      />
      <img 
        className="max-w-full h-auto block sm:hidden w-[320px]"
        src="\src\assets\images\image-web-3-mobile.jpg"
        alt="Web 3.0 Mobile"  
      />
      <ContentSection />
    </div>
  );
}

export default MainSection;
