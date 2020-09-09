jQuery("#simulation")
.on("click", ".s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 .click", function(event, data) {
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
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Button_10": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Button_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Button_10 span": {
"attributes": {
"color": "#FECCCD",
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
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Button_10": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Button_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Button_10 span": {
"attributes": {
"color": "#F92C52",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "timed",
"delay": 200
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
} else if(jFirer.is("#s-Label_82")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Label_82 span": {
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
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Image_5 > svg": {
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
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Label_82 span": {
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
"#s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 #s-Image_5 > svg": {
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
"target": "screens/78916770-54d9-4169-bd93-ea0cee1b53f9"
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
"target": "screens/78916770-54d9-4169-bd93-ea0cee1b53f9"
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
} else if(jFirer.is("#s-Image_7")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/93adc9b4-1cb7-4464-bb78-d94bfcb2c10a"
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
} else if(jFirer.is("#s-Image_12")) {
cases = [
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
} else if(jFirer.is("#s-Image_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/955a66e0-7c60-41f9-8b29-78f13e80d90c"
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
} else if(jFirer.is("#s-Image_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/b31de7dc-0f47-4319-ab94-d43ca10f64d8"
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
} else if(jFirer.is("#s-Image_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/78916770-54d9-4169-bd93-ea0cee1b53f9"
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
.on("pageload", ".s-b31de7dc-0f47-4319-ab94-d43ca10f64d8 .pageload", function(event, data) {
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