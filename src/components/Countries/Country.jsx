import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";


const Country = (props) => {

    const { countryParam, handleVisitedCountry, handleVisitedFlag } = props;

    const { name, flags, population, area, cca3 } = countryParam;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`border-2 border-indigo-600 p-2 m-2 rounded-lg ${visited ? 'bg-red-400' : ''}`}>

        <h3 className={`text-left pb-2 font-bold ${visited ? 'text-emerald-500' : 'text-fuchsia-700'}`}>
            Name: {name?.common}
        </h3>

            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>

            <button onClick={()=>handleVisitedFlag(countryParam.flags.png)} className="btn btn-outline btn-primary mr-2">Add Flag</button>


            <button onClick={()=>handleVisitedCountry(countryParam)} className="btn btn-outline btn-primary mr-2">Mark Visited</button>


            <button onClick={handleVisited} className="btn btn-outline mr-2 btn-secondary">{visited ? 'visited' : 'Going'}</button>
            {
                visited ? 'i already visited' : 'I have to go'
            }
            <hr />

           <CountryDetail {...props}></CountryDetail>


        </div>
    );
};

export default Country;