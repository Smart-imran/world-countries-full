

const CountryData = (props) => {
    const { countryParam, handleVisitedCountry, handleVisitedFlag } = props;
    return (
        <div>
            <h4>Country Name : {countryParam.name.common}</h4>
        </div>
    );
};

export default CountryData;