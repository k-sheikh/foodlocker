
const Recipe = ({ recipe }) => {
    

          
    return (
        <div className='Recipe'>
            <p>Description: {recipe.description}</p>
            <p>Steps: {recipe.steps}</p>
        </div>
    )
}

export default Recipe
