jQuery("#simulation")
.on("click", ".s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Button_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Button_10": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Button_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Button_10 span": {
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Button_10": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Button_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Button_10 span": {
"attributes": {
"color": "#007DFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "timed",
"delay": 300
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
"target": "screens/2f196579-398b-4690-abe0-9d1c4d4940a3"
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
.on("pageload", ".s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_32")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": [ "#s-Label_32" ],
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
} else if(jFirer.is("#s-Line_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Line_15" ],
"effect": {
"type": "slide",
"easing": "linear",
"duration": 1000,
"direction": "left"
}
},
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
"action": "jimHide",
"parameter": {
"target": [ "#s-Group_34" ],
"effect": {
"type": "fade",
"duration": 500
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
})
.on("focusin", ".s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Input_12 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Input_12 input": {
"attributes": {
"color": "#999999",
"text-align": "left",
"text-decoration": "none",
"font-family": "'Roboto-Light',Arial",
"font-size": "11.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": [ "#s-Input_12" ],
"value": ""
},
"exectype": "parallel",
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
.on("focusout", ".s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Input_12 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-250d14a4-5a49-4dd5-a79b-a0cb5c939743 #s-Input_12 input": {
"attributes": {
"color": "#999999",
"text-align": "left",
"text-decoration": "none",
"font-family": "'Roboto-Light',Arial",
"font-size": "11.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": [ "#s-Input_12" ],
"value": "Search"
},
"exectype": "parallel",
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