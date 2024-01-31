import React from 'react';

const ConfirmModal = ({ services, handle, type }) => {

    console.log(type);

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <label for="my-modal-6" className="btn">open modal</label> */}

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are you sure delete this items !!</h3>
                    <p className="py-4">{services?.name}</p>
                    <div className="modal-action">

                        <button onClick={() => handle(services._id)} className="btn ">
                            DELETE
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                        </button>
                        <label for="my-modal-6" className="btn">CANCEL</label>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmModal;