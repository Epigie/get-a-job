import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		headers: {
			// "X-RapidAPI-Key": rapidApiKey,
			"X-RapidAPI-Key": "dbb6916f81mshc212d6fa303acd1p1ba9d8jsn19a6b7def6a9",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: {
			...query,
		},
	};

	const fetchData = async () => {
		setIsLoading(true);

		axios
			.request(options)
			.then((res) => setData(res.data.data))
			.catch((e) => {
				setError(error);
				alert("There is an error");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
