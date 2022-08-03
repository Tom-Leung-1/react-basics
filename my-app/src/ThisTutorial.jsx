import React, { Component } from 'react';

class ThisTutorial extends Component {
    constructor(props) {
        // inside the constructor, this refers to the instance itself
        super(props);
        this.state = {
            num : 1,
        }
        this.showNum3 = () => {
            console.log(this.state.num + 100)
        }
        // this.<method>.bind(this, arg1, ..., argN) -> all the this keywords inside the method actually refer to the instance right now
        this.showNum2 = this.showNum2.bind(this, 2);
    }

    // inside a class, we cannot define variables (let, const, var are not allowed)
    // why "showNum" is allowed
    // we can declare a method/field outside the constructor. There is an alternative way to do so (see showNum3) 
    

    // function declaration vs function expression
    // arrow function doesn't have its own binding of this -> this keyword in arrow function refers to the this in outer function -> in this case, it refers to the instance
    showNum = () => {
        console.log(this.state.num)
    }

    // event is automatically added as a argument in a function callback

    // ES6 React.Component doesn't auto bind methods to itself. You need to bind them yourself in constructor. Otherwise, this is undefined
    // Any arguments passed to bind() after the first are prepended to the arguments provided to the function when it is created, in this case event. 
    // This means that in the resulting bound callback the event will be the last argument the callback receives, 
    // rather than the first as is normal if not using bind. this remains unchanged as it is an arrow function.
    showNum2(apple, event) {
        console.log(event.currentTarget.textContent)
        console.log(this.state.num)
        console.log("eat", apple)
    }

    render() {
        return (
            <div>
                <button onClick={this.showNum2}>Click me</button>
            </div>
        );
    }
}

export default ThisTutorial;