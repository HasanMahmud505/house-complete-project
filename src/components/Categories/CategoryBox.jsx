import {useNavigate, useSearchParams } from "react-router-dom";
import queryString from 'query-string';


/* eslint-disable react/prop-types */
const CategoryBox = ({label, icon: Icon}) => {
    const [params] = useSearchParams()
    const navigate = useNavigate()
 
    const handleClick =()=>{
        let currentQuery = {}
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updateQuery = {
            ...currentQuery, category:label
        }
        const url = queryString.stringifyUrl({
            url:'/',
            query:updateQuery
        }, {skipNull: true})
        navigate(url)
    }
    return (
        <div onClick={handleClick} className=" cursor-pointer flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
            <Icon size={26} />
            <div className="text-sm font-medium">{label}</div>
        </div>

    );
};


export default CategoryBox;