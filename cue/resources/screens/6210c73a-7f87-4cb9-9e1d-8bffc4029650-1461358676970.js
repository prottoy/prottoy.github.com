jQuery("#simulation")
  .on("click", ".s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1f962bd9-be19-4c1f-9d4a-e91920073ad5",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
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
                    "target": "screens/9ae28311-ada2-4b53-a225-b0740d70735b",
                    "transition": "slideleft"
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
    } else if(jFirer.is("#s-Label_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_1": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_1 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_50": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_50 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_50 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_2": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_2 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_46": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_46 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_46 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_4": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_4 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
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
    } else if(jFirer.is("#s-Label_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_1": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_1 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_50": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_50 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_50 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_2": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_2 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_46": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS9-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_46 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_46 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS9-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_4": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Label_4 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
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
  })
  .on("pageload", ".s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_38",
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