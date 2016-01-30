/**
 * Created by Vetal on 30.01.2016.
 */
var Button = ReactBootstrap.Button;

var ButtonInstance1 = React.createElement(
    Button,
    {bsStyle :"primary",
        bsSize : "large",
        key : 1
    },
    "Click Me"
);
var ButtonInstance2 = React.createElement(
    Button,
    {bsStyle :"warning",
        bsSize : "large",
        key : 2
    },
    "Click Me"
);
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

var MyToolbar = React.createElement(
    ButtonToolbar,
    {},
    [ButtonInstance1, ButtonInstance2]
)
ReactDOM.render(MyToolbar, document.getElementById("content"));