const currentDate = (timeStamp: number | string) => {
  if (!timeStamp) {
    return false;
  }

  const date = new Date(timeStamp);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default currentDate;
