const objectPropAdd = (items, sortProp, itemProp, newObjectAdd) => {
  return items.map((item) => {
    if (sortProp === item[itemProp].toString()) {
      return {
        ...item,
        ...newObjectAdd,
      };
    }
    return {
      ...item,
    };
  });
};




export default objectPropAdd;
