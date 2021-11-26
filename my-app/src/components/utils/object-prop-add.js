export const objectPropAdd = (items, sortProp, itemProp, newObjectAdd) => {
    return items.map(item => {
                
        if (sortProp == item[itemProp]) {
            
            return {
                ...item,
                ...newObjectAdd
    
            } 
        } else return {
            ...item
        }
    })
} 