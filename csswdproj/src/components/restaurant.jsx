const Restaurant = ({restaurant_data}) => {
    return(
        <section class="cuisine-example">
            <div class="cuisine-text">
                <h3>{restaurant_data.name}</h3>
                <pre>
Cuisine Type : {restaurant_data.cuisine_type}
Price Range : {restaurant_data.price.low} - {restaurant_data.price.high} per person
Hours of Operation : {restaurant_data.operation.start} - {restaurant_data.operation.end}
                </pre>
            </div>
            <img src={restaurant_data.image}/>
            <div class="nearby">
                <a href={restaurant_data.site} class="gmap-link" target="_blank">Restaurant's website</a>
                <iframe src={restaurant_data.gmap_iframe} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Restaurant