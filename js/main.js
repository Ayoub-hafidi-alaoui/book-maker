var site_name = document.getElementById("site_name")
var site_url = document.getElementById("site_url")
var table_body = document.getElementById("tbody")
var buttonSubmit = document.getElementById("buttonSubmit")

var web_sites = []


function submit() {
    // push the website into the the array
    if(validateUrl(site_url.value)) {
        console.log("inside if")
        var website = {
            'index': 0,
            'web_site_name': site_name.value,
            'url': site_url.value
        }
    
        web_sites.push(website)
        
        // display 
        display(website)
    }
    return 
   
}

function validateUrl(url) {
    var url_regex =  /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i
    var flag = url_regex.test(url)
    pushClassOnInput(flag)
    return flag
}

function pushClassOnInput(flag) {
    site_url.classList.remove('is-valid')
    site_url.classList.remove('is-invalid')
    // Validation
    flag ? site_url.classList.add('is-valid') : site_url.classList.add('is-invalid');
    //Disable button submit
    flag ? buttonSubmit.disabled=false : buttonSubmit.disabled=true


}

function display(website) {
    console.log("display")
    table_body.innerHTML += `
        <tr>
                <th scope="row">${website.index}</th>
                <td>${website.web_site_name}</td>
                <td>  
                    <a href="${website.url}">
                        <i class="fa-solid fa-eye pe-2"></i>
                    </a></td>
                <td>@mdo</td>
        </tr>        
    
    `
}

site_url.addEventListener("keyup", function() {
    validateUrl(site_url.value)
})

