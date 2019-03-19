function max(arr){
    var maximum=arr[0],temp;
    for(var i=1; i<arr.length; i++)
    { 
        if(maximum<arr[i])
        {
            maximum=arr[i];
            temp=arr[arr.length-1]
            arr[arr.length-1]=arr[i]
            arr[i]=temp
        }console.log("Maximium value", maximum);
    }console.log(arr)
}

max([10,20,40,250,9,39,7,1])
