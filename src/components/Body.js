import Imglist from "../utils/Imglist";
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import Imgcard from "./Imgcard";

const Body = () => {

    const [ListofImages, setListofImages] = useState([]);
    const [FilteredListofImages, setFilteredListofImages] = useState([]);

    useEffect (()=> {
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch ('https://thingproxy.freeboard.io/fetch/https://unsplash.com/napi/photos/a-satellite-image-of-a-red-fire-hydrant-in-the-middle-of-the-ocean-F2V2Kn9cz1o/related?page=2&per_page=20');
        const json = await data.json();
        console.log(data);
        console.log(json);
    }

    if(ListofImages.length === 0){
        return <Shimmer />;
    }
    

    return (
        <div className ="Body">
            <h1> Body component rendered</h1>
            <div className ="image-container">
                <Imgcard />
            </div>
        </div>

            );
};

export default Body;