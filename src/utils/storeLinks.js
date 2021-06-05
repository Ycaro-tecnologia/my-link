import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);
  
  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}

export async function SaveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( link => link.id === newLink.id);

    if(hasLink) {
        console.log('Esse Link já Existe na Lista.');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('LINK SALVO COM SUCESSO');
}


export async function DeleteLink(links, id) {
  let myLinks = links.filter( (item) => {
    return (item.id !== id)
  } )

  await AsyncStorage.setItem('ycarolinks', JSON.stringify(myLinks));

  console.log('LINK DELETADO DO STORAGE');

  return myLinks;
    
}