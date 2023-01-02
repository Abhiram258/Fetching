fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
    .then(res => res.json())
    .then(data => xyz(data.Employees))

    function xyz(array){
        var x="";
        var z="";
        var t=`<tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Date of joining</th>
                </tr>`
    for(var i=0;i<3;i++){
        // table
        t+= `<tr>
                <td>${array[i].Name}</td>
                <td>${array[i].Address}</td>
                <td>${array[i].Salary}</td>
                <td>${array[i].DateOfJoining}</td>
            </tr>`
            
            // Salary
            
            if(array[i].Salary > 500000){
                x+=array[i].Name +"<br>";
            }
            
            // Date of joining
            
            var [d,m,y]=(array[i].DateOfJoining).split("-");
            if(m==12){
                z+=array[i].Name +"<br>";
            }
        }
        
        document.getElementById('hello').innerHTML=t;
        document.getElementById('123').innerHTML = x;
        document.getElementById('456').innerHTML = z;
    }
    
    