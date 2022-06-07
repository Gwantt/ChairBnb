import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editChair, getChair } from "../../store/chairs";
import './editchair.css'

const EditChair = ({ chair, hideForm }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const chair2 = useSelector(state => state.chair)
    const sessionUser = useSelector(state => state.session.user)
    const { id } = useParams()

    const selectedChair = Object.values(chair);

    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState(chair2[id].address || '');
    const [city, setCity] = useState(chair2[id].city || '');
    const [state, setState] = useState(chair2[id].state || '');
    const [country, setCountry] = useState(chair2[id].country || '');
    const [name, setName] = useState(chair2[id].name || '');
    const [price, setPrice] = useState(chair2[id].price || 0);
    const [images, setImages] = useState(chair2[id].images || [])


    useEffect(() => {
        const errors = [];

        if (address.length < 5) errors.push('Please Enter your full Address');
        if (city.length < 5) errors.push('Please Enter your City');
        if (country.length < 3) errors.push('Please Enter a Valid Country');
        if (name.length < 3) errors.push('Name must be 3 characters or longer');
        if (price <= 0) errors.push('Please enter a price');

        setErrors(errors);
    }, [address, city, country, name, price])

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            ...chair,
            userId: sessionUser.id,
            address,
            city,
            state,
            country,
            images,
            name,
            price
        }
        console.log('payload', payload)
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

    const updateFiles = e => {
        const files = e.target.files
        setImages(files)
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
                    <label style={{fontSize:'15px'}}>Images are Optional!</label>
                    <input
                        className='formItem'
                        type='file'
                        multiple
                        onChange={updateFiles}
                    />

                    <button className="buttons grow" type="submit" disabled={errors.length > 0}>Update Chair</button>
                    <button className="buttons grow" type="button" onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default EditChair;
