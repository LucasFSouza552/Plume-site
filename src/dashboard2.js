import axios from "axios";
import Api from "./Api";
import { useEffect, useState } from "react";

export default function HeaderComponent() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!data) {
                try {
                    const result = await Api.get('/api/auth/discord/');
                    // console.log(result);
                    // // Access to XMLHttpRequest at 'https://discord.com/oauth2/authorize?client_id=1010746417381388339&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds&state=af9e879e5233729b207f5318f30f7054' (redirected from 'http://localhost:3000/login') from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
                    // console.log(result);
                    setData(result.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}