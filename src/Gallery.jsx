import React, { useState } from 'react'
import './Gallery.css'
import axios from 'axios'

const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127'
const Gallery = () => {
    const [name, setName] = useState('')
    const [photos, setPhotos] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${name}&per_page=24&format=json&nojsoncallback=1`).then(response => {
            // console.log(response)
            setPhotos(response.data.photos.photo)
        }).catch(error => {
            console.log("Encountered an error with fetching and parsing data", error)
        })
    }
    return (
        <div style={{ textAlign: "center", margin: '30px' }}>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>{' '}
                <input type='submit' value='Search'></input>
            </form>
            {
                photos.length > 1 ?
                    photos.map((image) => {
                        return (
                            <div key={image.id} >
                                <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} className='image'></img>
                            </div>

                        )
                    }) : <div>No Image found</div>
            }
        </div>
    )
}

export default Gallery
