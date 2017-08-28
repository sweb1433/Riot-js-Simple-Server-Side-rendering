riot.tag('hello-world', '<h2>Hello from hello-world tag! {opts.firstName}!</h2> <input type="text" name="fName"> <button onclick="{updateName}">Update Name</button>', '', '', function(opts) {
    this.updateName = function(){
      opts.firstName = this.fName.value
    }.bind(this)
});

