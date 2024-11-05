import React from 'react';

const Book = ({book}) => {
    const{image,bookName,author,tags,category} =book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl ">
  <figure className='bg-blue-400 p-8'>
    <img
    className='h-[134px] py-3 rounded-2xl'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body ">
    <div>
        {
            tags.map(tag=><button className="btn btn-xs text-green-400 mr-2">{tag}</button>

            )
        }
    </div>
    <h2 className="card-title">
      {bookName}
      
    </h2>
    <p className='flex justify-start'>By: {author}</p>
    <div className='border-t border-dashed'>

    </div>
    
    <div className="card-actions justify-between items-center">
      <div className="badge ">{category}</div>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
    </div>
  </div>
</div>
    );
};

export default Book;