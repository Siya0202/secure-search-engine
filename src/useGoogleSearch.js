import react, { useEffect,useState} from "react"
import API_KEY from "./Keys"
const CONTEXT_KEY="2132e5433542c3827";

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);

    useEffect(() => {
         const fetchData = async () => {
             fetch('https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}').then((response)=>response.json()).then((result)=>{ setData(result);
        })
            }
    fetchData();
    }, [term])

    return {data};
}

export default useGoogleSearch;