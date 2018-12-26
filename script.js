let nameBirthDay = new XMLHttpRequest();
nameBirthDay.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let stepOne = JSON.parse(this.responseText);
      document.getElementById("name").innerHTML = stepOne.fullName;
      document.getElementById("bDay").innerHTML = stepOne.birthDay;
    }};
    nameBirthDay.open("GET", "einstein.json", true);
    nameBirthDay.send();
 
        function loadBio(){
        let newBio = new XMLHttpRequest();
        newBio.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              let stepTwo = JSON.parse(this.responseText);
                document.getElementById("theBio").innerHTML = stepTwo.entireBio;
          }};
          newBio.open("GET", "einstein.json", true);
          newBio.send();    
        };
      