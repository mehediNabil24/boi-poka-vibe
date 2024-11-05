const getStoredWishList =()=>{
    const storedListStr = localStorage.getItem('wish-list')
    if(storedListStr){
        const storeWishList = JSON.parse(storedListStr)
        return storeWishList;

    }
    else{
        return [];
    }
}

const AddToWishList =(id)=>{
    const storeWishList = getStoredWishList();

    if(storeWishList.includes(id)){
        console.log('Already exist this id')
    }
    else{
        storeWishList.push(id);
        const storedListStr = JSON.stringify(storeWishList);
        localStorage.setItem('wish-list',storedListStr)

    }
}

export {AddToWishList};