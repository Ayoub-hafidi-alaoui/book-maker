var site_name = document.getElementById("site_name")
var site_url = document.getElementById("site_url")
var table_body = document.getElementById("tbody")

var web_sites = []


function submit() {
    // validate the url
    validateUrl(site_url.value)
    if(validateUrl(site_url.value)) {
        console.log("inside if")
        var website = {
            'index': 0,
            'web_site_name': site_name.value,
        }
    
        web_sites.push(website)
        display(website)
    }
    return 
   
}

function validateUrl(url) {
    var url_regex =  /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i
    var flag = url_regex.test(url)
    console.log(flag)
    pushClassOnInput(flag)
    return flag
}

function pushClassOnInput(flag) {
    site_url.classList.remove('is-valid')
    site_url.classList.remove('is-invalid')
    flag ? site_url.classList.add('is-valid') : site_url.classList.add('is-invalid');
}

function display(website) {
    console.log("display")
    table_body.innerHTML += `
        <tr>
                <th scope="row">${website.index}</th>
                <td>${website.web_site_name}</td>
                <td>Otto</td>
                <td>@mdo</td>
        </tr>        
    
    `
}

