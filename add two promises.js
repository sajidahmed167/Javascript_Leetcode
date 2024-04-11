/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = async function(promise1, promise2) {
    var promise3=promise1+promise2;
    
    return promise3;  
  };
  
  console.log(addTwoPromises(2,2));
  /**
   * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   *   .then(console.log); // 4
   */