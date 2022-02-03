

export async function getLinks(key){
    const myLinks=await localStorage.getItem(key)

    let linkSave=JSON.parse(myLinks) || []

    return linkSave

}

export async function saveLink(key,newLink){

    let linksStore=await getLinks(key)

    const hasLink=linksStore.some(link=>link.id===newLink.id)

    if(hasLink){
        alert('Esse link já existe em sua lista !')
        return
    }

    linksStore.push(newLink)
    await localStorage.setItem(key,JSON.stringify(linksStore))

}

export function deleteLink(links,id){

    let myLinks=links.filter( item => {
        return(item.id !== id)
    })

    localStorage.setItem('@link',JSON.stringify(myLinks))

    return myLinks
}