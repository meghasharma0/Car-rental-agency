import React, { useEffect, useState } from 'react'

const Signup = () => {

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
  
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [authToken, setAuthToken] = useState('');
  
    // FETCHING COUNTRIES
    const handleCountry = async () => {
      try {
        // Get access token
        const authUrl = "https://www.universal-tutorial.com/api/getaccesstoken";
        const authResponse = await fetch(authUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "api-token": "EbcZBaFvSV1LDK64_YeqltL8EMsDz_izBHoB0_vQLwab7bxvl7piumpeh8nR_JRs3C0",
            "user-email": "meghas9910@gmail.com"
          }
        });
        if (!authResponse.ok) {
          throw new Error('Failed to get access token');
        }
        const authData = await authResponse.json();
        const newAuthToken = authData.auth_token;
        setAuthToken(newAuthToken);

        // Getting countries
        const countriesUrl = "https://www.universal-tutorial.com/api/countries";
        const response = await fetch(countriesUrl, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${newAuthToken}`,
            "Accept": "application/json"
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    // FETCHING STATES
    const handleState = async () => {
      try {
        const stateUrl = `https://www.universal-tutorial.com/api/states/${selectedCountry}`
        const stateRes = await fetch(stateUrl, {
          method: "GET", 
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Accept": "application/json"
          }
        })
        if (!stateRes.ok){
          throw new Error('Failed to fetch states');
        }
        const statesData = await stateRes.json();
        setStates(statesData);
      } catch (error) {
        console.error("Error fetching states: ", error);
      }
    }
  
    // FETCHING CITIES
    const handleCity = async () => {
      try {
        const cityUrl = `https://www.universal-tutorial.com/api/cities/${selectedState}`;
        const cityRes = await fetch(cityUrl, {
          method: "GET", 
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Accept": "application/json"
          }
        });
        if (!cityRes.ok){
          throw new Error("Error fetching cities");
        }
        const citiesData = await cityRes.json();
        setCities(citiesData);
      } catch (error) {
        console.error("Error fetching cities: ", error);
      }
    }
  
    // Handle Country Select
    const handleCountrySelect = async (event) => {
      const selectedValue = event.target.value;
      setSelectedCountry(selectedValue);
    };
  
    // Handle State Select
    const handleStateSelect = async (event) => {
      const selectedValue = event.target.value;
      setSelectedState(selectedValue);
    };
  
    // Handle City Select
    const handleCitySelect = async (event) => {
      const selectedValue = event.target.value;
      setSelectedCity(selectedValue);
    };
    
    useEffect(() => {
      handleCountry();
    }, []);
  
    useEffect(() => {
      if (selectedCountry) {
        handleState();
      }
    }, [selectedCountry]);
  
    useEffect(() => {
      if (selectedState) {
        handleCity();
      }
    }, [selectedState]);

  return (
    <>
      <div className='container formContainer'>
        <form className=''>
            <div className="mb-3">
                <input type="text" className="form-control p-3" placeholder='Name'/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control p-3" placeholder='Email'/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control p-3" placeholder='Age'/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control p-3" placeholder='Phone'/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control p-3" placeholder='Driving Licence No.'/>
            </div>
            
            {/* City, State & Country */}
            <div className="mb-3">
                <select className="form-select p-3" onChange={handleCountrySelect} value={selectedCountry} required>
                    <option defaultValue={"Country"}>Country</option>
                    {countries.map(country => (
                        <option key={country.country_name} value={country.country_name}>
                        {country.country_name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select p-3" onChange={handleStateSelect} required>
                    <option defaultValue={"Country"}>State</option>
                    {
                        states.map(state => (
                        <option key={state.state_name} value={state.state_name}>
                            {state.state_name}
                        </option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-3">
                <select className="form-select p-3" onChange={handleCitySelect} value={selectedCity} required>
                    <option defaultValue={"City"}>City</option>
                    {
                        cities.map(city => (
                        <option key={city.city_name} value={city.city_name}>
                            {city.city_name}
                        </option>
                        ))
                    }
                </select>
            </div>
            {/* ----------------------------- */}

            <div className="mb-3">
                <input type="password" className="form-control p-3"  placeholder='Password'/>
            </div>
            <div className="mb-3">
                <input type="file" className="form-control p-3" />
            </div>
            <button type="submit" className="btn p-3 w-100 text-white" style={{background: "#01d28e"}}>Sign up</button>
        </form>
      </div>
    </>
  )
}

export default Signup
