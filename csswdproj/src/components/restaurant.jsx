const Restaurant = ({restaurant_data}) => {
    return(
        <section id={restaurant_data.name} class="cuisine-example">
            <div class="cuisine-text">
                <h3>{restaurant_data.name}</h3>
                <p>
                    Cuisine Type : {restaurant_data.cuisine_type} <br/>
                    Price Range : {restaurant_data.price.low} - {restaurant_data.price.high} per person <br/>
                    Hours of Operation : {restaurant_data.operation.start} - {restaurant_data.operation.end} <br/>
                </p>
            </div>
            <img src={restaurant_data.image.file} alt={restaurant_data.image.alt}/>
            <div class="nearby">
                <a href={restaurant_data.site} class="gmap-link" target="_blank" rel="noreferrer">Restaurant's website</a>
                <iframe title={restaurant_data.name} src={restaurant_data.gmap_iframe} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Restaurant
