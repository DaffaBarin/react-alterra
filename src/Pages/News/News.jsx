import { React, useEffect, useState } from 'react'
import { Navbar, Card } from '../../Components'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function News() {
    const URL = "https://api.thenewsapi.com/v1/news/top?api_token=gRROI5LcvaTP5yaAlMywiDo5cOVqJg7WIDqBeiBK"

    const [news, setNews] = useState([]);
	const [err, setError] = useState("");

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const handleFetch = async () => {
			let result;
			try {
				result = await axios.get(URL, { cancelToken: source.token });
				setNews(result.data.data);
			} catch (error) {
				setError(error);
			}
		};
		handleFetch();
		return () => {
			source.cancel();
		};
	}, []);

    return (
        <div>
            <Navbar />
            <div className="container-fluid d-flex justify-content-center position-absolute p-5" style={{top: '150px'}}>
                <div className="row">
                    {news.map((item) => (
                        <Card key={uuidv4()}
                        title={item.title}
                        content={item.snippet}
                        url={item.url}
                        image={item.image_url}/>
                        ))
                    }
                    {news.length === 0 && <h5>{err}</h5>}
                </div>
		</div>
        </div>
    )
}

export default News
