import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['programmers']); //espacio en memoria que te ayudara a almacenar 

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        //console.log(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [newCategory, ...categories])
    }

    return (
        <>
        <div className="container text-center">
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input //le enviaremos una nueva propType*/}
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {/*Listado de Gif*/}


            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

            {/* Gif Item */}
            </div>
        </>
    )
}


