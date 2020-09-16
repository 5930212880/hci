jQuery("#simulation")
.on("click", ".s-bf976139-1e35-4d79-a6ca-725e2dc704b2 .click", function(event, data) {
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
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Label_82 span": {
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
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Image_5 > svg": {
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
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Label_82": {
"attributes": {
"font-size": "12.0pt",
"font-family": "'Roboto-Regular',Arial"
}
}
},{
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Label_82 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Label_82 span": {
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
"#s-bf976139-1e35-4d79-a6ca-725e2dc704b2 #s-Image_5 > svg": {
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
} else if(jFirer.is("#s-Ellipse_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_12" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "9"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_11" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "-15"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_16" ]
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
} else if(jFirer.is("#s-Ellipse_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_12" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_11" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_15" ]
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
} else if(jFirer.is("#s-Ellipse_8")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_9" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "9"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_8" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "-15"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_10" ]
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
} else if(jFirer.is("#s-Ellipse_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_9" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_8" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_9" ]
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
.on("pageload", ".s-bf976139-1e35-4d79-a6ca-725e2dc704b2 .pageload", function(event, data) {
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
})
.on("swipeleft", ".s-bf976139-1e35-4d79-a6ca-725e2dc704b2 .swipeleft", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Ellipse_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_12" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "9"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_11" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "-15"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_16" ]
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
} else if(jFirer.is("#s-Ellipse_8")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_9" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "9"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_8" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "-15"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_10" ]
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
.on("swiperight", ".s-bf976139-1e35-4d79-a6ca-725e2dc704b2 .swiperight", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Ellipse_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_12" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_11" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_15" ]
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
} else if(jFirer.is("#s-Ellipse_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_9" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_8" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_9" ]
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