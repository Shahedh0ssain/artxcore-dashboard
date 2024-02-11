import { useState } from 'react';

const usePagination = (itemsPerPage = 5) => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPaginationIndices = (data) => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

        return { currentItems, indexOfFirstItem, indexOfLastItem };
    };

    return { currentPage, paginate, getPaginationIndices };
};

export default usePagination;
