jQuery("#simulation")
.on("click", ".s-e194a328-5dcb-40fc-9a81-3a77666ac647 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_30")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_30": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_30 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_30 span": {
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
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_30": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_30 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_30 span": {
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
} else if(jFirer.is("#s-Label_31")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_31": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_31 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_31 span": {
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
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_31": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_31 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-e194a328-5dcb-40fc-9a81-3a77666ac647 #s-Label_31 span": {
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