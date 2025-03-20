import axios from "axios";
import React, {useState, useEffect} from "react";
import {NavLink, Link, useParams} from 'react-router-dom';

export const DartsSingle = () => {
    const {dartsId} = useParams();
    const [darts, setDarts] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() =>{
        setPending(true);
        (async() =>{
            try {
                const valasz = await axios.get(`https://darts.sulla.hu/darts/${dartsId}`)
                setDarts(valasz.data)
            } catch (hiba) {
                console.log(hiba);
            }finally{
                setPending(false);
            }
        })();
        
    }, [dartsId]);

    return(
        <div className="container mt-5">
            <h2 className="text-center">Dartsozó: {darts.name}</h2>
            {isPending || !dartsId? (<div className="spinner-border"></div>) : (
                <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center align-item-center">
                    <div className="col text-center">
                        <div className="card h-200">
                            <h3 className="text-dark text-center card-title">Dartsozó neve: {darts.name}</h3>
                            <h5 className="text-dark text-center">Születési éve: {darts.birth_date}</h5>
                            <h5 className="text-dark text-center">Nyert világbajnokságai: {darts.world_ch_won}</h5>
                                <div className="card-body align-items-center">
                                <NavLink to={darts.profile_url} target="_blank"><button className='btn btn-success'>Profil link</button></NavLink><br />
                                    <br/>
                                    <img src={darts.image_url ? darts.image_url : "https://via.placeholder.com/400x800"} alt={darts.name}
                                    className="img-fluid" style={{width: "250px"}}/>
                                </div>
                                <div>
                                <Link to={`/del-darts/${darts.id}`} className="justify-content-center align-item-center"><button className='btn btn-danger'><i class="bi bi-trash3 fs-3"></i></button></Link>&nbsp;&nbsp;&nbsp;
                                <Link to={`/mod-darts/${darts.id}`} className="justify-content-center align-item-center"><button className='btn btn-warning'><i class="bi bi-pencil-square fs-3"></i></button></Link>&nbsp;&nbsp;&nbsp;
                                <Link to="/" className="justify-content-center align-item-center"><button class="btn btn-primary"><i class="bi bi-text-paragraph fs-3"></i></button></Link>
                                </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}