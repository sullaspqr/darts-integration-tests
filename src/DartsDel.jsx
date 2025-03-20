import React, {useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const DartsDel = () => {
    const params = useParams();
    const id = params.dartsId;
    const navigate = useNavigate();
    const [darts, setdarts] = useState([]);
    useEffect(() => {
        const fetchDarts = async () => {
            try {
                const res = await axios.get(`https://darts.sulla.hu/darts/${id}`);
                setdarts(res.data);
            } catch (error) {
                console.log("Hiba:\n", error);
            }
        };
    
        fetchDarts();
    }, [id]);    

    return(
        <div className="container mt-5">
        <h2 className="text-center">Törlendő dartsozó: {darts.name}</h2>
            <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center align-item-center">
                <div className="col text-center">
                    <div className="card h-200">
                        <h3 className="text-dark text-center card-title">Dartsozó neve: {darts.name}</h3>
                        <h5 className="text-dark text-center">Születési éve: {darts.birth_date}</h5>
                        <h5 className="text-dark text-center">Nyert világbajnokságai: {darts.world_ch_won}</h5>
                            <div className="card-body align-items-center">
                                <Link to={darts.profile_url} className="fs-6" target="_blank">Profil link</Link>
                                <br/>
                                <img src={darts.image_url ? darts.image_url : "https://via.placeholder.com/400x800"} alt={darts.name}
                                className="img-fluid" style={{width: "250px"}}/>
                            </div>
                            <form
                            onSubmit={async (event) => {
                                event.preventDefault();
                                try {
                                    await axios.delete(`https://darts.sulla.hu/darts/${id}`);
                                    navigate("/");
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                            >

                                <button class="btn btn-danger" type="submit"><i class="bi bi-trash3 fs-3">Törlés</i></button>&nbsp;&nbsp;&nbsp;
                                <Link to="/" className="justify-content-center align-item-center"><button class="btn btn-warning"><i class="bi bi-text-paragraph fs-3">Vissza</i></button></Link>
                            </form>
                    </div>
                </div>
            </div>
    </div>
    );
};