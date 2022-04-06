import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editChair, getChair } from "../../store/chairs";

const EditChair = ({ chair, hideForm }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const chair2 = useSelector(state => state.chair)

    const { id } = useParams()

    const selectedChair = Object.values(chair);

    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState(chair2[id].address || '');
    const [city, setCity] = useState(chair2[id].city || '');
    const [state, setState] = useState(chair2[id].state || '');
    const [country, setCountry] = useState(chair2[id].country || '');
    const [image1, setImage1] = useState(chair2[id].image1 || '');
    const [image2, setImage2] = useState(chair2[id].image2 || '');
    const [image3, setImage3] = useState(chair2[id].image3 || '');
    const [name, setName] = useState(chair2[id].name || '');
    const [price, setPrice] = useState(chair2[id].price || 0);

    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    console.log('Chair Edit Form Chair', chair2)

    useEffect(() => {
        const errors = [];

        if (address.length < 5) errors.push('Please Enter your full Address');
        if (city.length < 5) errors.push('Please Enter your City');
        if (country.length < 3) errors.push('Please Enter a Valid Country');
        if (!(image1.match(url))) errors.push('Please Enter a URL for the first image');
        if (!(image2.match(url))) errors.push('Please enter a URL for the second image');
        if (!(image3.match(url))) errors.push('Please enter a URL for the third image');
        if (name.length < 3) errors.push('Name must be 3 characters or longer');
        if (price <= 0) errors.push('Please enter a price');

        setErrors(errors);
    }, [address, city, country, image1, image2, image3, name, price])

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            ...chair,
            address,
            city,
            state,
            country,
            image1,
            image2,
            image3,
            name,
            price
        }

        let updatedChair;

        updatedChair = await dispatch(editChair(selectedChair[0].id, payload));

        if (updatedChair) {
            history.push(`/chairs/${selectedChair[0].id}`)
            hideForm();
        }
    }

    const handleCancelClick = e => {
        e.preventDefault();
        hideForm();
    }

    return (
        <div className="editContainer">
            <div className="EditFormDiv">
                <form onSubmit={handleSubmit}>
                    <ul className="errors formItem" >
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <input
                        className="formItem"
                        type='input'
                        placeholder="Address"
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder='City'
                        required
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder='State (Optional)'
                        value={state}
                        onChange={e => setState(e.target.value)}

                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder="Country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder="First Image"
                        required
                        value={image1}
                        onChange={e => setImage1(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder="Second Image"
                        value={image2}
                        onChange={e => setImage2(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder="Third Image"
                        value={image3}
                        onChange={e => setImage3(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='input'
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        className="formItem"

                        type='number'
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <button className="buttons grow" type="submit" disabled={errors.length > 0}>Update Chair</button>
                    <button className="buttons grow" type="button" onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default EditChair;
