addEventListener('message', function (e) {
  console.log(e.data)
  this.setTimeout(() => {
    postMessage('testWorker')
  }, 2000)
});
console.log('worker.js')