import { useEffect, useState } from "react";
import axios from 'axios';
import './Quotes.css'

const Quotes = (props) => {

    const [quotes, setQuotes] = useState([]);


    const getQuotes = () => {
        axios.get('https://type.fit/api/quotes', {
            mode: "cors"
        })
            .then((res) => {

                let newArray = []

                res.data.forEach((quote, index) => {
                    let newObjQuote = {
                        id: index,
                        author: quote.author,
                        text: quote.text,
                    }
                    newArray.push(newObjQuote)
                })

                let sortQuotes = newArray.sort((a, b) => {
                    console.log(a.author);
                    if (a.author < b.author) {
                        return -1
                    }
                })
                setQuotes(sortQuotes);
                console.log(sortQuotes);

            })
            .catch((error) => {
                console.error(error);
            })



    }


    useEffect(() => {
        getQuotes()
    }, []);

    return (
        <div className="quotes">
            <h2>Quotes</h2>

            <ul className="quotes">

                {quotes.map((quote) => {
                    // console.log(quote.id);
                    return (
                        <li key={quote.id}>
                            <span>{quote.author}</span>
                            <br></br>
                            <span>{quote.text} </span>
                        </li>
                    )

                })}
            </ul>

        </div>
    )
}


export default Quotes;