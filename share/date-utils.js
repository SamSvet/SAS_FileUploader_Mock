const parseDate = (dateString) => {
    if (dateString) {
      const dateArgs = dateString.split("-").map(Number);
      return new Date(dateArgs[0], dateArgs[1] - 1, dateArgs[2]);
    }
  };
  
  const formatDate = (date) =>
    date &&
    [
      date.getFullYear(),
      (date.getMonth() + 1).toString().padStart(2, "0"),
      date.getDate().toString().padStart(2, "0"),
    ].join("-");
  
  module.exports = {
    parseDate,
    formatDate,
  };