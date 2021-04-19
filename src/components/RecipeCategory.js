import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const RecipeCategory = ({ text }) => {
    return ( 
        <div>
            <h3>{text}</h3>
            <RecipeItem name='burger' />
        </div>
    )
}

RecipeCategory.propTypes = {
    text: PropTypes.string.isRequired,
}

export default RecipeCategory