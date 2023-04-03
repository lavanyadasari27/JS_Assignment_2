let count=0;
let min_count=0;
let hour_count=0;
let Id=null;
let a = document.getElementById("seconds");
let b = document.getElementById("minutes");
let c = document.getElementById("hours");
function change(){
    Id=setInterval(function()
    {
        count=count+1;
        if (count<=9)
        {
            a.textContent="0" + count;
        }
        else{
            a.textContent=count;
        }
        if (count==6)
        {
            count=0;
            min_count=min_count+1;
            if (min_count<=9)
            {
                b.textContent="0"+ min_count;
            }
            else{
                b.textContent=min_count;
            }
            a.textContent= count;
          
           
        }
        if (min_count==6)
        {
            min_count=0;
            hour_count=hour_count+1;
            if (hour_count<=9){

                b.textContent="0" + min_count;
            }
            else{
                b.textContent=min_count;
            }
            c.textContent=hour_count;
        }
    },1000);
}
function stop()
{
    clearInterval(Id);
}
function reset()
{
        count=0;
        min_count=0;
        hour_count=0;
        a.textContent="0"+ count;
        b.textContent="0"+ min_count;
        c.textContent="0"+ hour_count;
}