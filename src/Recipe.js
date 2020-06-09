import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h2>{title}</h2>
            <img className={style.image} src={image} alt=""/>
            <div className={style.info}>
                <h3 className={style.container}>Ingredients</h3>
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <h3 className={style.container}>Calories</h3>
                <p>{calories} calories</p>
            </div>
        </div>
    );
}

export default Recipe;
