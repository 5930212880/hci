jQuery("#simulation")
.on("click", ".s-88df5214-9920-428e-838a-509bbd4554b7 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_27")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-88df5214-9920-428e-838a-509bbd4554b7 #s-Label_27": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-88df5214-9920-428e-838a-509bbd4554b7 #s-Label_27 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-88df5214-9920-428e-838a-509bbd4554b7 #s-Label_27 span": {
"attributes": {
"color": "#80B8F1",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 1000
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-88df5214-9920-428e-838a-509bbd4554b7 #s-Label_27": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-88df5214-9920-428e-838a-509bbd4554b7 #s-Label_27 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-88df5214-9920-428e-838a-509bbd4554b7 #s-Label_27 span": {
"attributes": {
"color": "#007DFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
});