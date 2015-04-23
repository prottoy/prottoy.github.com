/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '290px','800px','190px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'rickshaw-03',
                type: 'image',
                rect: ['266px', '-30px','608px','453px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rickshaw-03.png",'0px','0px']
            },
            {
                id: 'Girl2',
                type: 'image',
                rect: ['-56px', '25px','452px','464px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Girl2.png",'0px','0px']
            },
            {
                id: '_022',
                type: 'image',
                rect: ['210px', '5px','195px','160px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"022.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Girl2}": [
                ["style", "top", '25px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-378px']
            ],
            "${__022}": [
                ["style", "top", '-167px'],
                ["style", "height", '160px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '210px'],
                ["style", "width", '195px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '480px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "top", '290px'],
                ["style", "left", '0px'],
                ["style", "height", '190px']
            ],
            "${_rickshaw-03}": [
                ["style", "left", '686px'],
                ["style", "top", '-30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_Girl2}", "left", '-56px', { fromValue: '-378px'}], position: 0, duration: 2000, easing: "easeInOutElastic" },
                { id: "eid10", tween: [ "style", "${__022}", "top", '5px', { fromValue: '-167px'}], position: 2000, duration: 1000, easing: "easeInOutElastic" },
                { id: "eid12", tween: [ "style", "${_rickshaw-03}", "left", '266px', { fromValue: '686px'}], position: 3000, duration: 1000, easing: "easeInOutBack" }            ]
        }
    }
},
"talk": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['24px', '0px', '236px', '92px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['9px', '24px', '42px', '43px', 'auto', 'auto'],
                    transform: [[0, 0], ['41']],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "left", '24px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '24px'],
                ["transform", "rotateZ", '41deg'],
                ["style", "height", '43px'],
                ["style", "left", '9px'],
                ["style", "width", '42px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '260px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13793540");
