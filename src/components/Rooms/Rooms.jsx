import { useEffect } from "react";
import { useState } from "react";
import Container from "../Shared/Container";
import Card from "./Card";
import Loader from "../Shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";



const Rooms = () => {
    const [params] = useSearchParams()
    const category = params.get("category")
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                }
                else (setRooms(data))
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [category])
    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            {
                rooms && rooms.length > 0 ?
                    (
                        <div className="pt-12 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6">
                            {
                                rooms.map(room => (<Card key={location} room={room} />))
                            }
                        </div>
                    ) : (
                        <div className="pt-12">
                            <Heading title='No Rooms Available in This Category !' subtitle="Please Select Other Categories" 
                            center={true}/>

                        </div>
                    )
            }
        </Container>
    );
};

export default Rooms;