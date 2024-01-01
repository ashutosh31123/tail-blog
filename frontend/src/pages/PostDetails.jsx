import { useParams } from "react-router-dom"
import Comments from "../components/Comments"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"

const PostDetails = () => {
    
    const postIdFromParams = useParams().id;
    //const postId = `${postIdFromParams}${post._id}`;
    console.log(postIdFromParams)
    // const fetchPost=async()=>{
    //     try{
    //         const res=
    //     }
    // }
  
    return (
    <div>
        <Navbar />
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl">          10 Uses of AI in Day to Day Life
                </h1> 
        <div className="flex items-center justify-center space-x-2">
            <p><BiEdit/></p>
            <p><MdDelete/></p>
        </div>
        </div> 
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@ashupanda123</p>
        <div className="flex space-x-2">
            <p>26\12\2023</p>
            <p>10:45</p>
        </div>
        </div>
        <img src="https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-496822526.jpg?w=700&h=346&crop=1" alt="" className="w-full mx-auto mt-8" />
        <p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
            </div>
        </div>
        </div>
        <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
        {/* Comments */}
        <Comments />
        <Comments />
        <Comments />
        {/* write a comment */}
        <div className="flex flex-col mt-4 md:flex-row">
            <input type="text" className="md:w-[90%] outline-none px-4 mt-4 md:mt-0" placeholder="write a comment"/>
            <button className="bg-black text-white tetx-sm  px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default PostDetails