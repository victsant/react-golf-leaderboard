import { useState } from 'react'


const useModal = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    function toggleModal() {
        setModalOpen(!isModalOpen)
    }

    return {
        isModalOpen,
        toggleModal,
    }
}

export default useModal
