import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = (url) => {
    const [data, setData] = useState("");
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setIsPending(false);
            })
            .catch((err) => setError(err));
    }, [url]);

    return { data, isPending, error };
};

export default Fetch;
