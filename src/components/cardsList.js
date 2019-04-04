import React, {useState, useEffect} from 'react';

export default function CardsList(){

    const [fetchedData, setFetchedData] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

    const httpCall = () => {
        setIsLoading(true);
        fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then((data) => {
            debugger;
            setFetchedData(data.results.slice(firstIndex,lastIndex));
            setIsLoading(false);
        })
    }

    useEffect(() => {
        httpCall();
    },[]);

    const getColumnColor = color => ({
        backgroundColor : color
    })

    const fetchNextRecords = () => {
        const nextFirstIndex = firstIndex + 4;
        const nextLastIndex = lastIndex + 4;
        setFirstIndex(nextFirstIndex);
        setLastIndex(nextLastIndex);
        httpCall();
    }

    return (
        <div>
            {isLoading ? <div className="whitetext">Loading Data ....</div> :

        <div className="row rowstyle">
            {fetchedData.map((person,index) => (
                <div className="column" key={index}>
                    <div className="card" style={getColumnColor(person.eye_color)}>
                        <h3>{person.name}</h3>
                        <p>{person.height}</p>
                        <p>{person.gender}</p>
                    </div>
                </div>
            ))}
            <div className="column lastColumn">
                <button onClick={fetchNextRecords} className="button button5">=></button>
            </div>

        </div> }
        </div>
    );
}
