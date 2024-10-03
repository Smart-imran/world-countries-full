import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {
    // const { countryParam, handleVisitedCountry, handleVisitedFlag } = props;
    return (
        <div>
            <h4 className="border-2 border-indigo-600 p-2 m-2 rounded-lg">Country Details : </h4>
            <hr />
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;