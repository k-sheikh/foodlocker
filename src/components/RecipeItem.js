import PropTypes from 'prop-types'

const RecipeItem = ({ name, rating, image }) => {
    return ( 
        <div>
            <ul>
                <li>{image}</li>
                <li>{name}</li>
                <li>{rating}</li>
            </ul>
        </div>
    )
}

RecipeItem.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.string,
    image: PropTypes.object
}

export default RecipeItem