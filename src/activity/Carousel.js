function Carousel(){
    return(
        <>

        <div id="carouselExampleFade" className="carousel slide carousel-fade"  >
  <div className="carousel-inner" style={{height: "300px"}}>
    <div className="carousel-item active">
    <img src="https://loremflickr.com/320/240/car" className="d-block w-100 h-50 lorem-pics" />
    </div>
    <div className="carousel-item">
    <img src="https://loremflickr.com/320/240/cat" className="d-block w-100 h-50 lorem-pics"/>
    </div>
    <div className="carousel-item">
    <img src="https://loremflickr.com/320/240/dog" className="d-block w-100 h-50 lorem-pics"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>

    )
}

export default Carousel;