// Q7. Give a relevant example of Promises



    // A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

    // Code Example-1
    let promiseOne = new Promise(function(resolve, reject){
        console.log('Perform taskOne');

        let isTaskOneOver = true;

        if(isTaskOneOver)
            resolve('Done');
        else
            reject('Failed');
    })

    promiseOne.then(function(fromResolve){
        console.log('Task ' + fromResolve);
    })       .catch(function(fromReject){
        console.log('Task ' + fromReject);
    })

    // Code Example-2

    let solveDataStructures = function(){
        return new Promise(function(resolve, reject){
            resolve('Solved 5 questions for ds; ');
        })
    }

    let addNewFeatureToWebApp = function(message){
        return new Promise(function(resolve, reject){
            resolve(message+'Added a new feature and pushed to github; ');
        })
    }

    let relaxAndNetflix = function(message){
        return new Promise(function(resolve, reject){
            resolve(message+'Relaxing; ');
        })
    }

    result = '1';

    solveDataStructures()
        .then(function(result){
            return addNewFeatureToWebApp(result)
        .then(function(result){
            return relaxAndNetflix(result)
        .then(function(result){
                console.log(result + 'Finished with the day');
            });
        })
    })



