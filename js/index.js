const my_form= document.getElementById('myform');


//the functions
const bookmark_save=(e)=>{
    console.log("Form works");

    //get form values
    var site_name=document.getElementById('site_name').value;
    console.log(site_name);

    var site_url=document.getElementById('site_url').value;
    console.log(site_url);

    var bookmark={
        name:site_name,
        url:site_url
    }

    // console.log(bookmark);
   

    // localStorage.setItem('test','hello world');

    // console.log(localStorage.getItem('test'));
    
    // localStorage.removeItem('test');

    // console.log("Item Removed");


    if(localStorage.getItem('bookmarks')==null){ //if an item with the bookmarks key isnt there
        //init array
        var bookmarks=[];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    else{
        //get from localstorage
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

        //add bookmark to array

        bookmarks.push(bookmark);
        

        //reset back to local storage

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    }
    

    //prevent form from submitting
    e.preventDefault();
}


const fetch_bookmarks=()=>{
    //get from localstorage
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

    console.log(bookmarks);

    const bookmark_results=document.getElementById('results');

    bookmark_results.innerHTML=""

    for(var i =0; i< bookmarks.length; i++){
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;

        bookmark_results.innerHTML+=`
        <div class="jumbotron">
            <h3>${name}</h3> 
            <a class="btn btn-primary" target="_blank" href="${url}">Visit</a>
            <a class="btn btn-danger" on_click="delete_bookmark('${url}')" target="_blank" href="${url}">Delete</a>

        </div>


        `;
        
    }

   
    
}

//the eventlisteners
my_form.addEventListener('submit',bookmark_save);