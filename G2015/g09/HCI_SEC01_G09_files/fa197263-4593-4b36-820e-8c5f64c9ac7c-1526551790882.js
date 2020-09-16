jQuery("#simulation")
.on("click", ".s-fa197263-4593-4b36-820e-8c5f64c9ac7c .click", function(event, data) {
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
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_82 span": {
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
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Image_5 > svg": {
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
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_82 span": {
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
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Image_5 > svg": {
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
} else if(jFirer.is("#s-Label_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12": {
"attributes": {
"background-color": "#157EFB",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12": {
"attributes-ie": {
"-pie-background": "#157EFB",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"border-top-width": "1px",
"border-top-style": "solid",
"border-top-color": "#157EFB",
"border-right-width": "1px",
"border-right-style": "solid",
"border-right-color": "#157EFB",
"border-bottom-width": "1px",
"border-bottom-style": "solid",
"border-bottom-color": "#157EFB",
"border-left-width": "1px",
"border-left-style": "solid",
"border-left-color": "#157EFB",
"border-radius": "0px 0px 0px 0px",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14 span": {
"attributes": {
"color": "#157EFB",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14": {
"attributes-ie": {
"border-top-width": "1px",
"border-top-style": "solid",
"border-top-color": "#157EFB",
"border-right-width": "1px",
"border-right-style": "solid",
"border-right-color": "#157EFB",
"border-bottom-width": "1px",
"border-bottom-style": "solid",
"border-bottom-color": "#157EFB",
"border-left-width": "1px",
"border-left-style": "solid",
"border-left-color": "#157EFB",
"border-radius": "0px 0px 0px 0px",
"-pie-background": "transparent",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13 span": {
"attributes": {
"color": "#157EFB",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13": {
"attributes-ie": {
"-pie-background": "transparent",
"-pie-poll": "false"
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
} else if(jFirer.is("#s-Label_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12 span": {
"attributes": {
"color": "#157EFB",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12": {
"attributes-ie": {
"-pie-background": "transparent",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"border-top-width": "1px",
"border-top-style": "solid",
"border-top-color": "#157EFB",
"border-right-width": "1px",
"border-right-style": "solid",
"border-right-color": "#157EFB",
"border-bottom-width": "1px",
"border-bottom-style": "solid",
"border-bottom-color": "#157EFB",
"border-left-width": "1px",
"border-left-style": "solid",
"border-left-color": "#157EFB",
"border-radius": "0px 0px 0px 0px",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14 span": {
"attributes": {
"color": "#157EFB",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14": {
"attributes-ie": {
"border-top-width": "1px",
"border-top-style": "solid",
"border-top-color": "#157EFB",
"border-right-width": "1px",
"border-right-style": "solid",
"border-right-color": "#157EFB",
"border-bottom-width": "1px",
"border-bottom-style": "solid",
"border-bottom-color": "#157EFB",
"border-left-width": "1px",
"border-left-style": "solid",
"border-left-color": "#157EFB",
"border-radius": "0px 0px 0px 0px",
"-pie-background": "transparent",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13": {
"attributes": {
"background-color": "#157EFB",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13": {
"attributes-ie": {
"-pie-background": "#157EFB",
"-pie-poll": "false"
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
} else if(jFirer.is("#s-Label_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12 span": {
"attributes": {
"color": "#007DFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_12": {
"attributes-ie": {
"-pie-background": "transparent",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14": {
"attributes": {
"background-color": "#157EFB",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_14": {
"attributes-ie": {
"-pie-background": "#157EFB",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13 span": {
"attributes": {
"color": "#157EFB",
"text-align": "center",
"text-decoration": "none",
"font-family": "'Roboto-Regular',Arial",
"font-size": "9.0pt"
}
}
},{
"#s-fa197263-4593-4b36-820e-8c5f64c9ac7c #s-Label_13": {
"attributes-ie": {
"-pie-background": "transparent",
"-pie-poll": "false"
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
} else if(jFirer.is("#s-Image_3")) {
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
}
})
.on("pageload", ".s-fa197263-4593-4b36-820e-8c5f64c9ac7c .pageload", function(event, data) {
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