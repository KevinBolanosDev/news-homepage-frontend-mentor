function ContentSection() {
  return (
    <div className="flex flex-col mt-7 sm:flex-row">
      <div className="sm:w-1/2 max-[375px]:w-[270px]">
        <h1 className="text-4xl sm:text-5xl text-neutral-veryDarkBlue sm:pe-10 font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <article className="flex flex-col mt-4 sm:mt-0 justify-between sm:w-1/2">
        <p className="text-sm/6 w-80 mb-8 text-neutral-darkGrayishBlue ">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="text-center text-xs tracking-[0.4em] text-neutral-offWhite bg-primary-softRed hover:bg-neutral-veryDarkBlue transition ease-in-out delay-150 hover:-translate-y-2 w-40 h-10 mb-12 sm:mb-0">
          READ MORE
        </button>
      </article>
    </div>
  );
}

export default ContentSection;
