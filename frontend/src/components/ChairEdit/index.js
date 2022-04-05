import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editChair, getChair } from "../../store/chairs";

const EditChair = ({ chair, hideForm }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const selectedChair = Object.values(chair)

    const [address, setAddress] = useState(chair.address);
    const [city, setCity] = useState(chair.city);
    const [state, setState] = useState(chair.state);
    const [country, setCountry] = useState(chair.country);
    const [image1, setImage1] = useState(chair.image1);
    const [image2, setImage2] = useState(chair.image2);
    const [image3, setImage3] = useState(chair.image3);
    const [name, setName] = useState(chair.name);
    const [price, setPrice] = useState(chair.price);


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
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='input'
                        placeholder="Address"
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <input
                        type='input'
                        placeholder='City'
                        required
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input
                        type='input'
                        placeholder='State (Optional)'
                        value={state}
                        onChange={e => setState(e.target.value)}

                    />
                    <input
                        type='input'
                        placeholder="Country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <input
                        type='input'
                        placeholder="First Image"
                        required
                        value={image1}
                        onChange={e => setImage1(e.target.value)}
                    />
                    <input
                        type='input'
                        placeholder="Second Image"
                        value={image2}
                        onChange={e => setImage2(e.target.value)}
                    />
                    <input
                        type='input'
                        placeholder="Third Image"
                        value={image3}
                        onChange={e => setImage3(e.target.value)}
                    />
                    <input
                        type='input'
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <button className="buttons grow" type="submit">Update Chair</button>
                    <button className="buttons grow" type="button" onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default EditChair;
