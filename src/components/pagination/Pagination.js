/* eslint-disable react/prop-types */
import React from "react";
import "./pagination.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
    paginate,
    prevPage,
    nextPage,
    currentPage,
    totalPages,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="list__wrapper">
            <button
                className={`list__item ${currentPage === 1 ? "disabled" : ""}`}
                onClick={prevPage}
                disabled={currentPage === 1}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {pageNumbers.map((number) => (
                <button
                    className={`list__item ${currentPage === number ? "active" : ""}`}
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className={`list__item ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={nextPage}
                disabled={currentPage === totalPages}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Pagination;
