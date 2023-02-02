const currentDate = (timeStamp: number | string) => {
  if (!timeStamp) {
    return false;
  }

  const date = new Date(timeStamp);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];


  return `${month}`;
};

export default currentDate;
