function loading0to100() {
    const loadingdiv =document.getElementById('loading');
    loadingdiv.classList.add('d-none');
} 



const loadphone = async(phone)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`
    const res = await fetch(url);
    const data =await res.json();
    displayphones(data.data);

}

const displayphones = Phones => {
    console.log(Phones);
    const phonecointainer =document.getElementById('phonecontainer');
    

    const warningmessage =document.getElementById('warningmessage')

    if(Phones.length === 0){
        warningmessage.classList.remove('d-none');
    }
    else{
        phonecointainer.innerText ='';
        Phones=Phones.slice(0,6);
        Phones.forEach(phone => {
        const phonediv= document.createElement('div');
        console.log(phone.phone_name);
        phonediv.classList.add('col');
        phonediv.innerHTML =`
        <div class="card h-100">
        <img src="${phone.image}" class="img-fluid card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    </div>`
        phonecointainer.appendChild(phonediv)
    
        })
    }
}

function buttononclick(){
    const searchvalue = document.getElementById('searchinput').value;
    loadphone(searchvalue);
    searchvalue.innerText='';




}




