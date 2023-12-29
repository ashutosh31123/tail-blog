
const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] justify-center items-center">
        <img src="https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-496822526.jpg?w=700&h=346&crop=1" className="h-full w-full object-cover" />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of AI in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@ashupanda123</p>
          <div className="flex space-x-2">
            <p>26\12\2023</p>
            <p>10:45</p>
          </div>
        </div>
          <p className="text-sm md:text-lg">Given the rising relevance of APIs in our daily lives, it has caught the attention of multiple authorities who have brought in key regulations. The first level is defined by organizations like IEEE and W3C, which aim to set up the standards for technical capabilities and limitations, which define the technology of the whole internet.</p>
      </div>
    </div>
  )
}

export default HomePosts