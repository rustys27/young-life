

const changeTime = (view, field) => {
  let date = Knack.models[view].toJSON()[`${field}_raw`].iso_timestamp;
  let timezoneDate = new Date(date).toLocaleString();
  let timeField = $(`.${field} .kn-detail-body span span`);

  $(timeField).text(timezoneDate);

}
$(document).on('knack-scene-render.scene_4710', function() { changeTime("view_8552", "field_2884") });

$(document).on('knack-scene-render.any', function(event, scene) {
        
    var pagetitle = $('.kn-crumbtrail a:first-child').text()+' - '+$('.kn-scene h1').text();
    pagetitle = pagetitle.replace(/'/g, '&quot;');
    var pageurl = window.location;
    var ga =  "<script>\n\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-89023576-1', 'auto');ga('send', 'pageview', {\n 'page':'"+pageurl+"',\n'title':'"+pagetitle+"'\n});</script>"
    
    $(ga).remove();
    $("#knack-body").append(ga);
        
    });

    // Hide crumbtrail on Staff Goals Details page
    $(document).on('knack-scene-render.any', function (event, view, records) {
    if ($("#kn-scene_3635").is(":visible")) {
    $(".kn-crumbtrail").hide();
    }
    else {
    $(".kn-crumbtrail").show();
    }
    });

    // Hide crumbtrail on Womens Survey Confirmation page
    $(document).on('knack-scene-render.any', function (event, view, records) {
    if ($("#kn-scene_4443").is(":visible")) {
    $(".kn-crumbtrail").hide();
    }
    else {
    $(".kn-crumbtrail").show();
    }
    });

    // Hide crumbtrail on 360 Assessment page
    $(document).on('knack-scene-render.any', function (event, view, records) {
    if ($("#kn-scene_4489").is(":visible")) {
    $(".kn-crumbtrail").hide();
    }
    else {
    $(".kn-crumbtrail").show();
    }
});



// Change submit buttons to save
$(document).on('knack-view-render.any', function (event, view, data) {
  $('div.submit a').text('Save');
});

$(document).on("knack-view-render.view_6871", function(IBIRS_action, IBIRS_userName, IBIRS_password) {

  var csrf_name;
        var csrf_value;
  
// Add code to login to WebFOCUS and call the embedded portal on success
            $.ajax({
                type: "POST",
                url: "https://webfocus-test.younglife.org/ibi_apps/rs/ibfs",
                data: "IBIRS_action=signOn&IBIRS_userName=knackuser&IBIRS_password=Knack1!",
                dataType: "xml",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: xmlParser,
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("You can not send Cross Domain AJAX requests: " + errorThrown);
                }

            })

        });

function xmlParser(xml) {

            // Add code to parse XML response for CSRF name and value
            $(xml).find("entry").each(function () {
                if ($(this).attr("key") == "IBI_CSRF_Token_Name") {
                    csrf_name = $(this).attr("value");

                }
                if ($(this).attr("key") == "IBI_CSRF_Token_Value") {
                    csrf_value = $(this).attr("value");
                }
            });

			// window.open('https://webfocus-test.younglife.org/ibi_apps/portal/CoreMissionProgress','_blank');
			document.location.replace('https://webfocus-test.younglife.org/ibi_apps/portal/CoreMissionProgress');
};





$(document).on("knack-scene-render.scene_4690", (event, view, record) => { 
    const userEmail = Knack.getUserAttributes().email;
    const userToken = Knack.getUserToken();
    $(".kn-link-1").attr("href", `https://fmc-api.com/younglife/?email=${userEmail}&token=${userToken}`)
})



$(document).on("knack-view-render.view_8521", (event, view, record) => { 

    let offlineRecord = {};
    let submitButton = $("#view_8521 .kn-button");

    const userEmail = Knack.getUserAttributes().email;
    window.email = userEmail;

    $("body").on("change", (e) => {
        let {name, value} = e.target;
        offlineRecord = {...offlineRecord, [name]:value}
        window.offlineRecord = offlineRecord;
        console.log({offlineRecord})
    });

    // $(submitButton).on("click", () => {
    //     sendTransaction(offlineRecord);
    // })
})

$(document).on("knack-form-submit.view_8521", (event, view, record) => {
    console.log(record)
    window.record = record;
})



// Prevent closing modal popup
$(document).on('knack-scene-render.any', function(event, scene) {
    $('.kn-modal-bg').off('click');
 
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2866").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2860").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2895").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2896").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2897").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2898").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2861").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2863").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2899").prop('type' , 'number');
});

$(document).on('knack-view-render.any', function(event, view, data) {
  $("#field_2864").prop('type' , 'number');
});


// ----- 9 GRID ------ //

// scene_4765/views/view_8664
let loggedInUser = Knack.getUserAttributes().id;

const talent_mapping_url = 'https://api.knack.com/v1/scenes/scene_4765/views/view_8664/records';
const talent_filters = [{
  field: "field_2851",
  operator: "is",
  value: loggedInUser
}]

const headers = {
  'X-Knack-Application-Id': Knack.application_id,
  'X-Knack-Rest-API-KEY': "knack"
}
let categories = [
  {
    name: "Next_Level_Leader",
    leaders: []
  },
  {
    name: "Emerging_Leader",
    leaders: []
  },
  {
    name: "Future_Leader",
    leaders: []
  },
  {
    name: "Expert_Competence",
    leaders: []
  },
  {
    name: "Key_Player",
    leaders: []
  },
  {
    name: "Valued_Competence",
    leaders: []
  },
  {
    name: "Misaligned_Competence",
    leaders: []
  },
  {
    name: "Inconsistent_Competence",
    leaders: []
  },
  {
    name: "Limited_Competence",
    leaders: []
  },
];
let leaders = [];

const getLeaders =  async (view) => {

 
  let leaderData = Knack.models[view].data.toJSON();
  //api call
  // let leaderData = await fetch(`${talent_mapping_url}?filters=${encodeURIComponent(JSON.stringify(talent_filters))}&rows_per_page=500`, {
  //   headers: headers
  // }).then(res => {
  //   return res.json()
  // }).then(data => data.records);

  // console.log({leaderData})
  leaders = leaderData;

  return leaderData;

}

const sortLeaders = async () => {
  leaders.forEach(leader => {
    let category = leader.field_2839.split(" - ")[1].replaceAll(" ", "_");    
    let name = leader.field_2826_raw[0].identifier;
    let id = leader.id;
    let title = leader.field_945_raw[0].identifier;
    console.log(category)
    
    let match = categories.find(cat => cat.name === category );
    console.log(match)
    if (match) {
      match.leaders.push({name: name, id: id, title: title });
      
      console.log({categories})
    }
  })
}

const updateCategories = async  () => {
  categories.forEach(({name, leaders}) => {
    console.log({name})
    let options = "";
  
    leaders.forEach(leader => {
      //options += `<li><a href="https://younglife.knack.com/dataportal#talent-mapping/candidate-summaries/edit-candidate-summary/${leader.id}/">${leader.name}</a></li>`
      options += `<li title="${leader.title}"><a href="https://younglife.knack.com/dataportal#api-talent-mapping/view-candidate-summary/${leader.id}/">${leader.name}</a></li>`
    })

    document.querySelector(`#${name} ul`).innerHTML = options;

  
  })
}
// start of code to replicate per view for 9box
$(document).on('knack-scene-render.scene_4672', async () => {
    leaders = [];
    categories = [
        {
          name: "Next_Level_Leader",
          leaders: []
        },
        {
          name: "Emerging_Leader",
          leaders: []
        },
        {
          name: "Future_Leader",
          leaders: []
        },
        {
          name: "Expert_Competence",
          leaders: []
        },
        {
          name: "Key_Player",
          leaders: []
        },
        {
          name: "Valued_Competence",
          leaders: []
        },
        {
          name: "Misaligned_Competence",
          leaders: []
        },
        {
          name: "Inconsistent_Competence",
          leaders: []
        },
        {
          name: "Limited_Competence",
          leaders: []
        },
      ];
    await getLeaders("view_8498");
    await sortLeaders();
    await updateCategories();
})
// end of code to copy for 9box

// start of code to replicate per view for 9box
$(document).on('knack-scene-render.scene_4830', async () => {
    leaders = [];
    categories = [
        {
          name: "Next_Level_Leader",
          leaders: []
        },
        {
          name: "Emerging_Leader",
          leaders: []
        },
        {
          name: "Future_Leader",
          leaders: []
        },
        {
          name: "Expert_Competence",
          leaders: []
        },
        {
          name: "Key_Player",
          leaders: []
        },
        {
          name: "Valued_Competence",
          leaders: []
        },
        {
          name: "Misaligned_Competence",
          leaders: []
        },
        {
          name: "Inconsistent_Competence",
          leaders: []
        },
        {
          name: "Limited_Competence",
          leaders: []
        },
      ];
    await getLeaders("view_8778");
    await sortLeaders();
    await updateCategories();
})
// end of code to copy for 9box

//function to populate current records
const getRecords = async (scene, view, field) => {
  const filters = [{field: field, operator: "is blank"}]; // field that holds record id
  const url = `https://api.knack.com/v1/pages/${scene}/views/${view}/records`;
  
  let records = await $.ajax({
    url: `${url}?filters=${encodeURIComponent(JSON.stringify(filters))}&rows_per_page=1000`,
    headers: {
      "X-Knack-Application-Id": Knack.application_id,
      "X-Knack-REST-API-Key": "knack",
      "Content-Type": "application/json"
    },

    type: "GET",
    success: function(res) {
      console.log("success!");
      return res.records
    },
    error: function (err) {
      console.log("error updating record")
      $.ajax(this);
    }
  });
  
  records.records.forEach(record => {
    populateId("scene_4807", "view_8741", field, record.id)
  })
}
// function updates individual records
const populateId = (scene, view, field, recordId) => {
  const url = `https://api.knack.com/v1/pages/${scene}/views/${view}/records`;
  let updatePayload = {};
  
  updatePayload[field] = recordId;
  
  $.ajax({
    url: `${url}/${recordId}`,
    headers: {
      "X-Knack-Application-Id": Knack.application_id,
      "X-Knack-REST-API-Key": "knack",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(updatePayload),
    type: "PUT",
    success: function(res) {
      console.log("successfully updated record")
    },
    error: function (err) {
      console.log("error updating record")
      $.ajax(this);
    }
  })
  
  
};

//add new 360 assessment set record id
$(document).on("knack-form-submit.view_8440", (event, view, record) => {
  populateId("scene_4807", "view_8741", "field_3051", record.id);
});

//add new 360 assessment set record id
$(document).on("knack-form-submit.view_8084", (event, view, record) => {
  populateId("scene_4807", "view_8741", "field_3051", record.id);
});

//add new 360 assessment set record id
$(document).on("knack-form-submit.view_8267", (event, view, record) => {
  populateId("scene_4807", "view_8741", "field_3051", record.id);
});

/*scene render to batch set all blank record ids
 $(document).on("knack-scene-render.scene_4488", () => {
  getRecords("scene_4488", "view_8085", "field_3051");
});*/

// Convert Instruction to Tooltips
// Instructions Fields Converted to Tooltips (Refer to CSS Page for Styling Tooltips)	
$(document).on('nack-scene-render.scene_4828', function (event, scene) {
					
let inputs = document.getElementsByClassName('control');
let i = 0, l = inputs.length;
for (i; i < l; i++) {
let input = inputs[i];
let instruction = input.getElementsByClassName('kn-instructions')[0];
if (instruction && instruction.innerHTML != "") {
input.getElementsByClassName('kn-label')[0].style.position = "relative";
input.getElementsByClassName('label kn-label')[0].innerHTML += '<span class="ttpict"> <i class="fa fa-question-circle" style="padding:0 .25em; font-size: 1.1em"</i> </span>';
input.getElementsByClassName('ttpict')[0].setAttribute('data-tooltip', instruction.innerHTML);
}
}	
});

