import React, { useState } from "react";
import useFetch from "hooks/useFetch";
import Card from "components/cards/Card";
import Pagination from "components/pagination/Pagination";
import "./main.css";

const Main = () => {
    const { data, isPending, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/"
    );
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 10;

    // Get Posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const posts = data.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(data.length / postPerPage);

    // Handle Pagination
    const handlePagination = (number) => setCurrentPage(number);

    const handleNextPage = () => setCurrentPage(currentPage + 1);

    const handlePrevPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
            {isPending && <h1 className="loading">Loading Data...</h1>}
            {error && <p className="error">{error}</p>}
            <div className="cards__wrapper">
                {posts &&
          posts.map((post, index) => (
              <Card key={post.id} card={post} cardIndex={index} />
          ))}
            </div>
            {!isPending && (
                <Pagination
                    paginate={handlePagination}
                    nextPage={handleNextPage}
                    prevPage={handlePrevPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            )}
        </>
    );
};

export default Main;
