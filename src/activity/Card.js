function Card(){
    return(
        <>
        <div className="card"  style={{width: "18rem", display: "inline-block", margin: "20px"}}>
  <img src="https://loremflickr.com/320/240/car" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Sample Card</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </>
    )
}

export default Card;