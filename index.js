let count=0;
    let str=" - "
    
    let saveEl=document.getElementById("save-el")
    const countelement=document.getElementById("count-el");
    function increment()
    {
        count+=1
        countelement.innerText=count;
        myLogger();
    }
    function myLogger()
    {
        console.log("Button clicked");
    }
    function save()
    {
        if(count>0){
        if(saveEl.textContent=== "Previous entries: ")
            {saveEl.textContent+=count
            }
        else{
        saveEl.textContent+=str+count
        }
        count=0;
        countelement.innerText=count;
    }
    else{
        alert("Count is 0. Nothing to save");
    }
    }
    