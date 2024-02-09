import React, { useState } from 'react';
import AddDonationModal from './addDonationModal';

const AddDonation = () => {
    const [addModalOpen, setAddModalOpen] = useState(false)
    return (
        <div className='pt-5 pb-10'>
            <div onClick={()=> setAddModalOpen(true)} className="px-5 bg-soft-green w-fit py-2 rounded-sm text-white cursor-pointer">Add Donation</div>

            <AddDonationModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen}  />
        </div>
    );
};

export default AddDonation;