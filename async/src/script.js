function mocker(data) {
    return function() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
    };
  }
  module.exports = mocker;