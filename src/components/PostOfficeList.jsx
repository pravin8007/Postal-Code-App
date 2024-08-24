import React from 'react';

const PostOfficeList = ({ postOffices, filter, handleFilterChange }) => {
    const filteredPostOffices = postOffices.filter(po =>
        po.Name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            {postOffices.length > 0 && (
                <>
                    <input
                        type="text"
                        placeholder="Filter by post office name"
                        value={filter}
                        onChange={handleFilterChange}
                    />
                    <ul>
                        {filteredPostOffices.length > 0 ? (
                            filteredPostOffices.map((po) => (
                                <div key={po.Name} className='Post'>
                                    <h3>Name : {po.Name}</h3>
                                    <h3>Branch Type : {po.BranchType}</h3>
                                    <h3>Delivery Status : {po.DeliveryStatus}</h3>
                                    <h3>District : {po.District}</h3>
                                    <h3>State : {po.State}</h3>
                                    <h3>Division : {po.Division}</h3>
                                </div>
                            ))
                        ) : (
                            <div>Couldn’t find the postal data you’re looking for…</div>
                        )}
                    </ul>
                </>
            )}
        </>
    );
};

export default PostOfficeList;
