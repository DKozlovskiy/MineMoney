gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBlockObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDPregradaDownObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDPregradaUpObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDPregradaUpObjects1= [];
gdjs.Untitled_32sceneCode.GDPregradaUpObjects2= [];
gdjs.Untitled_32sceneCode.GDPregradaUpObjects3= [];
gdjs.Untitled_32sceneCode.GDPregradaDownObjects1= [];
gdjs.Untitled_32sceneCode.GDPregradaDownObjects2= [];
gdjs.Untitled_32sceneCode.GDPregradaDownObjects3= [];
gdjs.Untitled_32sceneCode.GDBallansGameObjects1= [];
gdjs.Untitled_32sceneCode.GDBallansGameObjects2= [];
gdjs.Untitled_32sceneCode.GDBallansGameObjects3= [];
gdjs.Untitled_32sceneCode.GDBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDBlockObjects3= [];
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1= [];
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects2= [];
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects3= [];
gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1= [];
gdjs.Untitled_32sceneCode.GDGameOverInfoObjects2= [];
gdjs.Untitled_32sceneCode.GDGameOverInfoObjects3= [];
gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1= [];
gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects2= [];
gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects3= [];
gdjs.Untitled_32sceneCode.GDButtonSupportObjects1= [];
gdjs.Untitled_32sceneCode.GDButtonSupportObjects2= [];
gdjs.Untitled_32sceneCode.GDButtonSupportObjects3= [];
gdjs.Untitled_32sceneCode.GDPanelObjects1= [];
gdjs.Untitled_32sceneCode.GDPanelObjects2= [];
gdjs.Untitled_32sceneCode.GDPanelObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "76b232400d8b201.mp3", false, 100, 1);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonNewGameObjects1Objects = Hashtable.newFrom({"ButtonNewGame": gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaUpObjects1Objects = Hashtable.newFrom({"PregradaUp": gdjs.Untitled_32sceneCode.GDPregradaUpObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaDownObjects1Objects = Hashtable.newFrom({"PregradaDown": gdjs.Untitled_32sceneCode.GDPregradaDownObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonNewGame"), gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonNewGameObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonSupport"), gdjs.Untitled_32sceneCode.GDButtonSupportObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonWithdrawal"), gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverInfo"), gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PregradaDown"), gdjs.Untitled_32sceneCode.GDPregradaDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("PregradaUp"), gdjs.Untitled_32sceneCode.GDPregradaUpObjects1);
{runtimeScene.getVariables().get("Game").setNumber(1);
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaUpObjects1Objects);
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaDownObjects1Objects);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPregradaDownObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPregradaDownObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPregradaUpObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPregradaUpObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDButtonSupportObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDButtonSupportObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, 100, 420, "");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaUpObjects2Objects = Hashtable.newFrom({"PregradaUp": gdjs.Untitled_32sceneCode.GDPregradaUpObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaDownObjects3Objects = Hashtable.newFrom({"PregradaDown": gdjs.Untitled_32sceneCode.GDPregradaDownObjects3});
gdjs.Untitled_32sceneCode.asyncCallback8756700 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("PregradaUp"), gdjs.Untitled_32sceneCode.GDPregradaUpObjects3);

gdjs.Untitled_32sceneCode.GDPregradaDownObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaDownObjects3Objects, 600, (( gdjs.Untitled_32sceneCode.GDPregradaUpObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPregradaUpObjects3[0].getAABBBottom()) + 220, "");
}}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDPregradaUpObjects2) asyncObjectsList.addObject("PregradaUp", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8756700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Game")) == 1;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PregradaDown"), gdjs.Untitled_32sceneCode.GDPregradaDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("PregradaUp"), gdjs.Untitled_32sceneCode.GDPregradaUpObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[i].setX(gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[i].getX() - (2));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPregradaDownObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPregradaDownObjects2[i].setX(gdjs.Untitled_32sceneCode.GDPregradaDownObjects2[i].getX() - (2));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "CreatePregrada", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Game")) == 1;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaUpObjects2Objects, 600, gdjs.randomFloatInRange(50, 600), "");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PregradaUp"), gdjs.Untitled_32sceneCode.GDPregradaUpObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[i].getX() == -(100) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[k] = gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPregradaUpObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PregradaDown"), gdjs.Untitled_32sceneCode.GDPregradaDownObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPregradaDownObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPregradaDownObjects1[i].getX() == -(100) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDPregradaDownObjects1[k] = gdjs.Untitled_32sceneCode.GDPregradaDownObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPregradaDownObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPregradaDownObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPregradaDownObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPregradaDownObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaUpObjects2Objects = Hashtable.newFrom({"PregradaUp": gdjs.Untitled_32sceneCode.GDPregradaUpObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaDownObjects2Objects = Hashtable.newFrom({"PregradaDown": gdjs.Untitled_32sceneCode.GDPregradaDownObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.Untitled_32sceneCode.GDBlockObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGameOverInfoObjects1Objects = Hashtable.newFrom({"GameOverInfo": gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonNewGameObjects1Objects = Hashtable.newFrom({"ButtonNewGame": gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonWithdrawalObjects1Objects = Hashtable.newFrom({"ButtonWithdrawal": gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonSupportObjects1Objects = Hashtable.newFrom({"ButtonSupport": gdjs.Untitled_32sceneCode.GDButtonSupportObjects1});
gdjs.Untitled_32sceneCode.asyncCallback8761188 = function (runtimeScene, asyncObjectsList) {
}
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8761188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.Untitled_32sceneCode.GDBlockObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDPregradaDownObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDPregradaUpObjects1.length = 0;


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.GDBlockObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.GDPregradaDownObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.GDPregradaUpObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PregradaUp"), gdjs.Untitled_32sceneCode.GDPregradaUpObjects2);
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaUpObjects2Objects, false, runtimeScene, false);
if( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDPregradaUpObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPregradaUpObjects1_1final.push(gdjs.Untitled_32sceneCode.GDPregradaUpObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PregradaDown"), gdjs.Untitled_32sceneCode.GDPregradaDownObjects2);
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPregradaDownObjects2Objects, false, runtimeScene, false);
if( gdjs.Untitled_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDPregradaDownObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDPregradaDownObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDPregradaDownObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPregradaDownObjects1_1final.push(gdjs.Untitled_32sceneCode.GDPregradaDownObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Untitled_32sceneCode.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.Untitled_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBlockObjects2Objects, false, runtimeScene, false);
if( gdjs.Untitled_32sceneCode.condition2IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDBlockObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDBlockObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDBlockObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDBlockObjects1_1final.push(gdjs.Untitled_32sceneCode.GDBlockObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDBlockObjects1_1final, gdjs.Untitled_32sceneCode.GDBlockObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1_1final, gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPregradaDownObjects1_1final, gdjs.Untitled_32sceneCode.GDPregradaDownObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPregradaUpObjects1_1final, gdjs.Untitled_32sceneCode.GDPregradaUpObjects1);
}
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDButtonSupportObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1.length = 0;

{runtimeScene.getVariables().get("Game").setNumber(0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGameOverInfoObjects1Objects, 96, 300, "MenuInfo");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonNewGameObjects1Objects, 116, 480, "MenuInfo");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonWithdrawalObjects1Objects, 116, 608, "MenuInfo");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDButtonSupportObjects1Objects, 116, 736, "MenuInfo");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Game")) == 1;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("BallansPlayer").add(0.0000001);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BallansGame"), gdjs.Untitled_32sceneCode.GDBallansGameObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallansGameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallansGameObjects1[i].setString(gdjs.evtsExt__ExtendedMath__ToFixedString.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("BallansPlayer")), 6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPregradaUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPregradaUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPregradaUpObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPregradaDownObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPregradaDownObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPregradaDownObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallansGameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallansGameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallansGameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlockObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDButtonNewGameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverInfoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverInfoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameOverInfoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDButtonWithdrawalObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDButtonSupportObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDButtonSupportObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDButtonSupportObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPanelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPanelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPanelObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
