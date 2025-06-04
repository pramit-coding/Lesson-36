

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            year: "9",
            favourite_subject: "Science",
            favourite_color: "Black",
            hobbies: "Cricket, Coding"
        };
    }
    changeColor=()=>{
        this.setState({favourite_color:"green"});
    }
    

    render(){
        return(
            React.createElement("div", null,
                React.createElement("h2", null, "Student Info"),
                React.createElement("p", null,`I am in year ${this.state.year}` ),
                React.createElement("p", null,`My favoourite Subject is ${this.state.favourite_subject}` ),
                React.createElement("p", null, `My favoourite color is ${this.state.favourite_color}`),
                React.createElement("p", null, `My hobbies are ${this.state.hobbies}`),
                React.createElement("button", {onClick: this.changeColor}, "Change color to Green")
            )

        );

    }
}
ReactDOM.render(React.createElement(Student), document.getElementById('root'))