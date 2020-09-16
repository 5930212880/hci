jQuery("#simulation")
.on("click", ".s-e9c80754-163d-453f-9a3b-b87c69a17243 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_82")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Label_82 span": {
"attributes": {
"color": "#80B8F1",
"text-align": "left",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Image_5 > svg": {
"attributes": {
"overlay": "#80B8F1"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Label_82 span": {
"attributes": {
"color": "#007DFF",
"text-align": "left",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "timed",
"delay": 300
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-e9c80754-163d-453f-9a3b-b87c69a17243 #s-Image_5 > svg": {
"attributes": {
"overlay": "#157EFB"
}
}
} ],
"exectype": "parallel",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/256607f7-f80a-405d-b950-4e91ea6ac060"
},
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
} else if(jFirer.is("#s-Image_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/256607f7-f80a-405d-b950-4e91ea6ac060"
},
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
})
.on("pageload", ".s-e9c80754-163d-453f-9a3b-b87c69a17243 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_31")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": [ "#s-Label_31" ],
"value": {
"action": "jimConcat",
"parameter": [ {
"action": "jimSubstring",
"parameter": [ {
"action": "jimSystemTime"
},"0","5" ]
}," PM" ]
}
},
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