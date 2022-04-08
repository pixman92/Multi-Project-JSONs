

var theBigJSON;
var theSmallJSON;
var extractedJSON;

function initVariables(){
    theBigJSON = new JSON_Instance();
    theSmallJSON = new JSON_Instance();
}

function addMetaToBig(name){
    //theBigJSON.JSONobj.innerArray[0][0][1]
    theBigJSON.addToObj([[[0], ['bigName', name]]]);
}

function addStuffToLittle(dataToAdd){
    theSmallJSON.addToObj([[[0], [dataToAdd]]])
}

function addLittleToBig(index, projName){
    // if(theBigJSON.JSONobj.innerArray[1]==undefined){
    //     theBigJSON.addMoreToIndex(index, [[[0], [smallInStringForm]]]);    
    // }else{
    //     theBigJSON.addToObj([[[0], [smallInStringForm]]]);
    // }

    
    var smallInStringForm = theSmallJSON.stringMe();
    // theBigJSON.JSONobj.innerArray
    var arrToPush = [['name', projName], ['data', smallInStringForm]]
    theBigJSON.JSONobj.innerArray[index] = arrToPush;

    theSmallJSON = new JSON_Instance();

    if(theBigJSON.JSONobj.innerArray[index]==undefined){
        console.log('Index not found! Try to push new index');
    }
}
//=================
function pullOutJSONproject(str){
    extractedJSON = new JSON_Instance();
    extractedJSON.insertJSON(str);
    extractedJSON.parseMe();
    extractedJSON.print();
}
// =================

function pullProjectOnIndex(index){
    if(index!=0){
        var name = theBigJSON.JSONobj.innerArray[index][0][1]
        var data = theBigJSON.JSONobj.innerArray[1][1][1];
        console.log('Name: ', name);
        console.log('Data', data);
    }
}



// =================
function run(){
    initVariables();
    addMetaToBig("Chris's Data");
    addStuffToLittle('hey there, much love');
    addLittleToBig(1, 'i love this project')
}

function run2(){
    addStuffToLittle('nope, not going');
    addStuffToLittle('lol, maybe???');

}

window.onload = ()=>{
    run();
}