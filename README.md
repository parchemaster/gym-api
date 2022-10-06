# gym-api
This API was created for fetching data for this application https://github.com/parchemaster/sport-app.git. Feel free to use API or check my sport-app.


There are 4 data links: /bodyParts (10x), /equipmentList (28x), /exercises (1326x), /exercisesInRussian (1326x), /targetList (19x).
It's one of the ways to use them in React (exemple below):

        React.useEffect(() => {
                //geting data of parts of body
                fetch('https://sharai-gym-api.herokuapp.com/bodyParts')
                .then(response => response.json())
                .then(response => {console.log(response)});
        }, [])
