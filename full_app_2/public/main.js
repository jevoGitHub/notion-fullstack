var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const done = this.parentNode.parentNode.childNodes[1]
        console.log(task)
        fetch('tasks', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'tasks': done
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
