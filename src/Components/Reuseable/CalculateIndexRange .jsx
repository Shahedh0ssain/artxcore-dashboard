

const CalculateIndexRange = (currentPage, itemsPerPage, totalItems) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Ensure the index is within the valid range
    const startIndex = Math.max(0, indexOfFirstItem);
    const endIndex = Math.min(indexOfLastItem, totalItems);

    return { startIndex, endIndex };
};

export default CalculateIndexRange;