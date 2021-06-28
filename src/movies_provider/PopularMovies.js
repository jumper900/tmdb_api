import React, { useEffect, useState } from 'react'
const PopularMovies = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch data');
        }
        return response.json();
      }).then((data) => {
        setData(data['results']);
        setLoading('All Movies');
      }).catch((err) => {
        setLoading(err.message);
      });

  }, [url]);

  return { data, loading };
}

export default PopularMovies
