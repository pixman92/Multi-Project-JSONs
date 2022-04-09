

var theBigJSON;
var theSmallJSON;
var extractedJSON;

function initVariables(){
    // inits the variables
    theBigJSON = new JSON_Instance();
    theSmallJSON = new JSON_Instance();
}

function addMetaToBig(name){
    // adds the starting name MetaData to the JSON 
    //theBigJSON.JSONobj.innerArray[0][0][1]
    theBigJSON.addToObj([[[0], ['bigName', name]]]);
}

function addStuffToSmall(dataToAdd){
    // pump up the smallJSON with data
    theSmallJSON.addToObj([[[0], [dataToAdd]]])
}

function addSmallToBig(index, projName){
    // adds the entire smallJSON to BigJSON, then clears it

    var smallInStringForm = theSmallJSON.stringMe();
    // theBigJSON.JSONobj.innerArray
    var arrToPush = [['name', projName], ['data', smallInStringForm]]

    if(index == ""){
        theBigJSON.JSONobj.innerArray.push('');
        var len = theBigJSON.JSONobj.innerArray.length-1
        theBigJSON.JSONobj.innerArray[len] = arrToPush;
    }else{
        theBigJSON.JSONobj.innerArray[index] = arrToPush;
    }

    theSmallJSON = new JSON_Instance();

    // if(theBigJSON.JSONobj.innerArray[index]==undefined){
    //     console.log('Index not found! Try to push new index');
    // }
}
function changeProjectName(index, replacement){
    // change an exist Project Name, based on Index
    if(index!=0){
        theBigJSON.JSONobj.innerArray[index][0][1] = replacement;
    }
}
function changeProjectData(index, JSONString){
    // change the JOSN string data of the project, be sure to <pullProjectOnIndex(index)>
    // extrac the Array
    // add to the array
    // call this function, changeProjectData(index, extractedJSON.stringMe())


    // JSONString = theSmallJSON.stringMe()
    if(index!=0){
        theBigJSON.JSONobj.innerArray[index][1][1] = JSONString;
    }

}

// =================
var nameOfProject; var dataOfProject; var indexSaved;
function pullProjectOnIndex(index){
    // pull WHOLE project based on Index
    // save NAME & DATA - as global variables
    if(index!=0){
        nameOfProject = theBigJSON.JSONobj.innerArray[index][0][1]
        dataOfProject = theBigJSON.JSONobj.innerArray[index][1][1];
        console.log('NameOfProject: ', nameOfProject);
        console.log('Data', dataOfProject);
    }
    extractJSONFromString(dataOfProject);
    indexSaved = index;
}

// ==================================

function extractJSONFromString(str){
    // helper function to extract JSON string to Array Obj
    // extractedJSON = "";
    extractedJSON = new JSON_Instance();
    extractedJSON.insertJSON(str);
    extractedJSON.parseMe();
    extractedJSON.print();
}

function addToExtracted(dataToAdd){
    // helper function to ADD Data to the exracted Array
    extractedJSON.addToObj([[[0], [dataToAdd]]]);
    var savedString = extractedJSON.stringMe();
    theSmallJSON = new JSON_Instance();
    theSmallJSON.insertJSON(savedString);
}

function BigDeleteProjectFromIndex(index){
    theBigJSON.JSONobj.innerArray.splice(index, 1);
}
function SmallDeleteProjectFromIndex(index){
    // if(extractedJSON!=undefined){
    try{
        theSmallJSON.JSONobj.innerArray.splice(index, 1);
    }catch(err){
        console.log('err ', err);
    } 
        
    // }
}

// =================
function clearSmallJSON(){
    theSmallJSON = new JSON_Instance();
}


// ==================================
function run(){
    initVariables();
    addMetaToBig("Chris's Data");
    addStuffToSmall('hey there, much love');
    addSmallToBig("", 'i love this project')
}

function run2(){
    addStuffToSmall('nope, not going');
    addStuffToSmall('lol, maybe???');
    addSmallToBig('', 'feelings');



    addStuffToSmall('bed time');
    addStuffToSmall('wake up time');
    addStuffToSmall('lunch time');
    addSmallToBig('', 'times of day')

}

window.onload = ()=>{
    run();run2();
}