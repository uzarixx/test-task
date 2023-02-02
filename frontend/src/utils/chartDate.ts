const currentDate = (timeStamp: number | string, monthSelect: boolean) => {
  if (!timeStamp) {
    return false;
  }

  const date = new Date(timeStamp);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${monthSelect ? day : month}`;
};

export default currentDate;
