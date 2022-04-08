import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditChair from '../ChairEdit'

function EditFormModal() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Chair</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <EditChair />
                </Modal>
            )}
        </>
    )
}

export default EditFormModal
