

// eslint-disable-next-line react/prop-types
const CategorySelection = ({onSelecCategory,activeCategory}) => {

    const Categories = ["Health","Fintech","Startups","AI","Security","Enterprise","Growth","Apps","Work","Tech","Gadgets"]
  return (
    <div className="px-4 mb-8 lg:space-x-10 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
        <button onClick={()=>onSelecCategory(null)} className= {`lg:ml-12 ${activeCategory ? "" : "active-button"}`}>All</button>
        {
            Categories.map((category) =>(
                <button 
                onClick={()=>onSelecCategory(category)}
                className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                key={category}>
                {category}</button>
            ))
        }
    </div>
  )
}

export default CategorySelection