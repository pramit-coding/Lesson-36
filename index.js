

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: "$10",
            chocolate_mass: "10 grams",
            chocolate_color: "Black",
            energy: "100 Jpules of energy"
        };
    }
    changeColor = () => {
        this.setState({ chocolate_color: "white" });
         this.setState({choclate_mass:"20 grams"});
         this.setState({price: "$20"});
         this.setState({energy: "500 Joules"})
    }


    render() {
        return (
            React.createElement("div", null,
                React.createElement("h2", null, "Student Info"),
                React.createElement("p", null, `The price of the chocolate ${this.state.price}`),
                React.createElement("p", null, `The mass of the chocolate is ${this.state.chocolate_mass}`),
                React.createElement("p", null, `The colour of the chocolate is ${this.state.chocolate_color}`),
                React.createElement("p", null, `The chocolate consits of  ${this.state.energy}`),
                React.createElement("button", { onClick: this.changeColor }, "White choclate")
            )

        );

    }
}
ReactDOM.render(React.createElement(Student), document.getElementById('root'))