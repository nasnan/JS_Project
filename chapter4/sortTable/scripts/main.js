function sort(type, order) {
  var jsList=document.getElementById("jsList");
  var rows=jsList.getElementsByTagName("tr");
  var allArr=[];
  for (let i=0;i<rows.length;i++){
    let tempArr=[];
    let tds=rows[i].getElementsByTagName("td");
    for(let j=0;j<tds.length;j++){
      tempArr.push(tds[j].innerHTML);
    }
    allArr.push(tempArr);
  }
  var aftArr=[];
  if(type=="id") aftArr=sortByTypeOrder(allArr,0,order);
  if(type=="price") aftArr=sortByTypeOrder(allArr,1,order);
  if(type=="sales") aftArr=sortByTypeOrder(allArr,2,order);
  writeArrToTable(aftArr);
}

function sortByTypeOrder(arr,type,order){
  let l=arr.length;
  let tempArr=[];
  if(order==false)
  {
    for(let i=0;i<l;i++){ //递增
      for(let j=i+1;j<l;j++){
        if(arr[i][type]>arr[j][type]){
          tempArr=arr[i];
          arr[i]=arr[j];
          arr[j]=tempArr;
        }
      }
    }
  }
  else if(order==true){
    for(let i=0;i<l;i++){ //递增
      for(let j=i+1;j<l;j++){
        if(arr[i][type]<arr[j][type]){
          tempArr=arr[i];
          arr[i]=arr[j];
          arr[j]=tempArr;
        }
      }
    }
  }
  return arr;
}

function writeArrToTable(arr){
  var jsList=document.getElementById("jsList");
  var html="";
  for (let i=0;i<arr.length;i++){
    html+="<tr>";
    for (let j=0;j<3;j++){
      let tempHtml="<td>"+arr[i][j]+"</td>";
      html+=tempHtml;
    }
    html+="</tr>\n";
  }
  jsList.innerHTML=html;
}


function addTheadEvent(){
  let ths=document.getElementsByTagName("thead")[0].getElementsByTagName("th");
  for(let i=0;i<ths.length;i++){
    ths[i].flag=false;
    ths[i].addEventListener("click",function(e){
        sort(e.target.innerHTML,e.target.flag);
        e.target.flag=!e.target.flag;
    })
  }
}

addTheadEvent();