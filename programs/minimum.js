function min(arr)
{
    var minimum=arr[0],temp;
    for(var i=1; i<arr.length; i++)
    { 
        if(minimum>arr[i])
        {
            minimum=arr[i];
            console.log("Minimium value", minimum);
            // temp=arr[arr.length-1]
            // arr[arr.length-1]=arr[i]
            // arr[i]=temp
        }
    }console.log(arr)
}

min([10,20,40,25,9,39,70,100])