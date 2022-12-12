
//import { useState, useEffect } from "react";
//import { getGif } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {

  const {images, isLoading } = useFetchGifs(category);
  /*const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
  }

  //ayuda a ejecutar procesos secundarios  
  useEffect(() => {
    getImages();
  }, []) //definir un arreglo de dependencias, si se queda vacia el hook se dipara unicamente la primera vez que se contruye
  */

  return (
    <>
    
      <h3>{category}</h3>
      {
        isLoading && (<h2 >cargando...</h2>)
      }
      
      <div class="row row-cols-md-6 align-items-start">
      
        {/*usando destructuracion
        {images.map(({id, title}) => (<li key={id}>{title}</li>))}
        */}
        {images.map((image) => (
          <GifItem
            key={image.id}
            title={image.title}
            url={image.url}
          /*exparciendo las proptypes
          key={image.id}
            { ...image } esto esparcira y hara que al revisar en los devs tools cada item reciba como props*/
          />
        ))
        }
      
      </div>

    </>
  )
}
