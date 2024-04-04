function formatDistanceToNow(date){
    if (!date) {
        return 'Date is unknown';
      }
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);
      if (diffInSeconds < 30) {
        return 'less than a minute';
      } else if (diffInSeconds < 90) {
        return '1 minute';
      } else if (diffInSeconds < 2670) {
        return `${Math.floor(diffInSeconds / 60)} minutes`;
      } else if (diffInSeconds < 5370) {
        return 'about 1 hour';
      } else {
        const pad = (num) => (num < 10 ? '0' + num : num);
        return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ` +
               `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
      }
}

module.exports = { formatDistanceToNow };