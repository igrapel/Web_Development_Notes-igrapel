  function fillTestResults() {
            var testResults = document.getElementById('testResults');
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var found = document.getElementById('found').value;
            testResults.innerHTML = "You entered " + firstName + " " + lastName
                + " for a name. You found us via " + found + ".";
        }

 function fillState(location) {
            var state = document.getElementById('state');
            if (state.value == '') {
                if (location == 'Miami') {
                    state.value = 'FL';
                }
                else if (location == 'New York City') {
                    state.value = 'NY';
                }
                else {
                    state.value = '';
                }
            }
        }


        function convertUpper(text, field) {
            document.getElementById(field).value = text.toUpperCase();
        }

        function convertLower(text, field) {
            document.getElementById(field).value = text.toLowerCase();
        }
        function checkCity(city) {
            city = city.toUpperCase();
            if (city == 'New York City' || city == 'Atlanta' || city == 'Madrid') {
                document.getElementById('testResults').innerHTML = "Your chosen location will only be available during the summer";
            }

        }
        function checkFields() {
            if (document.getElementById('firstName').value == '' ||// add operator
                document.getElementById('lastName').value == '') {
                alert('One or more required name fields is empty');
            }
        }
