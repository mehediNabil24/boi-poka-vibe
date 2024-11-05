const getStoredList =()=>{
    const storedListStr= localStorage.getItem('Read-List')
    if(storedListStr){
        const storedList =JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredList= (id)=>{
    const storedList = getStoredList();

    if(storedList.includes(id)){
        console.log(id,'Already exists in the stored list')
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList)
        localStorage.setItem('Read-List',storedListStr)

        
    }
}

export {addToStoredList, getStoredList}