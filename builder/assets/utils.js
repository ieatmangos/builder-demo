
import { v4 as uuid } from "uuid";




// ============================================== //
// ============================================== //
export const formatFirebaseItems = firebaseItems => {
  const items = firebaseItems
    ? Object.entries(firebaseItems).map(([key, value]) => [key, value])
    : [];
  return items;
};

// ============================================== //
// ============================================== //
export const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

// ============================================== //
// ============================================== //
export const copy = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destination;
};

// ============================================== //
// ============================================== //
export const formatFB = (data, saveName) =>{
  const savedData =  data.filter( i => i[0] === saveName)
  if (savedData[0]){
    return savedData[0][1]
  }
}

// ============================================== //
// ============================================== //
export function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1 || []) ;
  const keys2 = Object.keys(object2 || []) ;

  if (keys1.length === 0 || keys2.length === 0){
    return true
  }
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key].id !== object2[key].id) {
      return false;
    }
  }

  return true;
}