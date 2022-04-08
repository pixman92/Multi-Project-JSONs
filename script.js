var theBigJSON;

var theSmallJSON;

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

function addLittleToBig(index){
    var smallInStringForm = theSmallJSON.stringMe();
    // if(theBigJSON.JSONobj.innerArray[1]==undefined){
    //     theBigJSON.addMoreToIndex(index, [[[0], [smallInStringForm]]]);    
    // }else{
    //     theBigJSON.addToObj([[[0], [smallInStringForm]]]);
    // }
    if(theBigJSON.JSONobj.innerArray[index]==undefined){
        console.log('Index not found! Try to push new index');
    }
    
}






// =================
function run(){
    initVariables();
    addMetaToBig("Chris's Data");
    addStuffToLittle('hey there, much love');



}

window.onload = ()=>{
    run();
}