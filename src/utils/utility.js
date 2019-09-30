export const generateID = () => {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

export const countStudents = (arrOfArr) => {
  let count = 0;
  for(let i = 0 ; i < arrOfArr.length; i++){
    for(let j = 0; j < arrOfArr[i].students.length; j++){
      count++;
    }
  }
  return count;
}

export default {
  generateID,
  countStudents,
}
