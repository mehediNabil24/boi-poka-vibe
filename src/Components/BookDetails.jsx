import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredList } from '../addToDb';
import { AddToWishList } from '../wishList';

const BookDetails = () => {
    const {bookId} =useParams();
    const data =useLoaderData();
   

    const book = data.find(book=> book.bookId=== parseInt(bookId))
    const {bookId:currentBookId, image} =book;

    const handleMarkAsRead=(id)=>{
        addToStoredList(id)

        

    }
    const handleWishList =id=>{
        AddToWishList(id)
    }

    return (
        <div>
            <h2>Book Details:{bookId}</h2>

            <img  className="w-32 py-8"src={image} alt="" />
            <button onClick={()=>{
                handleMarkAsRead(bookId)
            }} className="btn  btn-outline btn-accent mr-3">Mark as Read</button>
            <button onClick={()=>{handleWishList(bookId)}} className="btn btn-active btn-accent">Add to WishList</button>

            
        </div>
    );
};

export default BookDetails;