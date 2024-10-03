import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";


const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])


    const handleVisitedFlag = (flag) => {
        console.log('add visitedFlag');
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    }
    const handleVisitedCountry = (visitCountry) => {
        console.log('add visited');
        const newVisitedCountry = [...visitedCountries, visitCountry];
        setVisitedCountries(newVisitedCountry);
    }







    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    return (
        <div>
            <h3 className="text-2xl font-semibold">Countries :{countries.length}</h3>


            {/* Visited Flag */}
            <div className="w-20 flex gap-4 p-2">
                {
                    visitedFlags.map((flag) => <img key={flag} src={flag} alt="Country Flag" />)
                }

            </div>


            {/* Visited Country */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul className="list-disc list-inside">
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>

            </div>






            {/* display country */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map(country => <Country

                        countryParam={country}
                        key={country.cca3}

                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag = {handleVisitedFlag}



                    ></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;