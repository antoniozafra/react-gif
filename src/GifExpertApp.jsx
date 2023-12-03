import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onNewCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }


  return (
    <>
      {/*TITULO */}
      <h1>Gif expert app</h1>

      {/*INPUT */}
      <AddCategory
        onNewCategory={onNewCategory}
        currentCategories={categories}
      />

      {/*LISTADO DE GIFS  */}
      {
        categories.map((category) => (

          <GifGrid key={category} category={category} />

        ))
      }

      {/* GIF ITEM  */}
    </>
  )
}
