import './Album.css'


const Album = () => {


    return (
        <div className="album">
            <p className='title'>Get your random quote...</p>

            <div>

            </div>

            <tr className="albumTable">
                <td className="tableData quote"></td>
                <td className="tableData random">random</td>
            </tr>
            <div className="button">
                <button className='button' onClick={() => { }}>Previous Quote</button>
                <button className='button' onClick={() => { }}>Next Quote</button>
            </div>

        </div>
    )
}

export default Album;