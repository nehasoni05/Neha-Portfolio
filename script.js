function fun()
{
    
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var contact=document.getElementById("mobile");
    var msg=document.getElementById("msg");
    if(name.value=="" || email.value=="" || contact.value=="" || msg.value=="")
    {
        window.alert("Enter the  required field");
    }
    else
    {
        var disp=document.getElementById("last");
    disp.style.display="block";
    var table = document.getElementById("detailTable");
    var count=0;
    for (let row of table.rows) 
    {
        for(let cell of row.cells) 
        {
        if(cell.innerText == email.value || cell.innerText==contact.value)
        count=1;
        }
    }
    if(count==1)
    alert("User already exists");
    else
    {
      alert("Thanks for connecting. You can see your details below "); 
    var row = table.insertRow(table.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name.value;
    cell2.innerHTML = email.value;
    cell3.innerHTML=contact.value;
    cell4.innerHTML=msg.value;

    row.setAttribute("class","table-success");
    name.value='';
    email.value='';
    contact.value='';
    msg.value='';
    }
}
}