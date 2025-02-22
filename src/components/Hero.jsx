const Hero = () => {
  return (
    <section className='hero bg-[url("/images/hero-banner.png")]'>
        <div className="container text-neutral-100">
            <h1 className="leading-[1.2]">Find the <br /> property That <br /> Feels Link Home.</h1>
            <p className="text-neutral-100/80 max-w-[440px] pt-[19px] pb-[30px]">
            From cozy apartments to spacious family homes, we’ll help you find the one that fits your lifestyle.
            </p>
            <a href="#" className="btn-primary btn">Search property</a>
        </div>
    </section>
  )
}

export default Hero