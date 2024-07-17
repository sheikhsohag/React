import '../assets/css/card.css'

const Card = (props) => {

    const {product} = props;
    console.log("yes");

     return (

        <div className="card">
           <div className="card-image">
            <img className='image' src={product.image} alt={product.title} />
           </div>
          
           <div className="card-body">                       
               <p className="title">{product.title}</p>
               <p className="price">Price: {product.price}</p>
               <p className="rating">Rating: {product.rating}/5</p>
               <p className="descrip">Descriptsion: {product.description}</p>   
               <button className='button'>Add to cart</button>                             
           </div>

        </div>  
         
        
     );
}


export default Card;