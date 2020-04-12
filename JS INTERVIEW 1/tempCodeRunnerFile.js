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