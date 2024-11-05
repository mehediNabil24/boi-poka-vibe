import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../addToDb';
import Book from './Book';

const ReadList = () => {
    const allBooks = useLoaderData();
    
    const [readList, setReadList] =useState([]);
    useEffect(()=>{

        const storedReadList= getStoredList();
        const storedReadListInt = storedReadList.map(id=>parseInt(id));

        const readBookList = allBooks.filter(book=>storedReadListInt.includes(book.bookId));
        console.log( 'read',readBookList);
        setReadList(readBookList);


        // not the best way

    },[]);
    return (
        <div>
            <h2 className='text-3xl  my-8'>Listed Books</h2>
            <Tabs>
    <TabList>
      <Tab>Reading Books</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Book I read:{readList.length}</h2>
      {
        readList.map(book=><Book key={book.bookId} book={book} ></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My Wish List</h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default ReadList;